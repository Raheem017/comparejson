import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { Decoration, EditorView } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

export default function JsonComparator() {
  const [json1, setJson1] = useState("");
  const [json2, setJson2] = useState("");
  const [result, setResult] = useState("");
  const [decorations1, setDecorations1] = useState(Decoration.none);
  const [decorations2, setDecorations2] = useState(Decoration.none);

  // Utility: parse JSON safely
  const tryParse = (str) => {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  };

  // Flatten JSON (works for arrays too)
  const flattenJSON = (obj, path = "") => {
    if (typeof obj !== "object" || obj === null) {
      return { [path]: obj };
    }

    let result = {};

    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        const newPath = path ? `${path}[${index}]` : `[${index}]`;
        Object.assign(result, flattenJSON(item, newPath));
      });
    } else {
      Object.entries(obj).forEach(([key, val]) => {
        const newPath = path ? `${path}.${key}` : key;
        Object.assign(result, flattenJSON(val, newPath));
      });
    }

    return result;
  };

  // Compare flattened JSONs
  const compareFlat = (flat1, flat2) => {
    const match = new Set();
    const diff = new Set();

    const allKeys = new Set([...Object.keys(flat1), ...Object.keys(flat2)]);
    allKeys.forEach((key) => {
      if (key in flat1 && key in flat2) {
        if (JSON.stringify(flat1[key]) === JSON.stringify(flat2[key])) {
          match.add(key);
        } else {
          diff.add(key);
        }
      } else {
        diff.add(key);
      }
    });

    return { match, diff };
  };

  const countObjectStart = (text, position) => {
    let count = 0;

    // We start counting array elements only after finding the "records": [
    const recordsStart = text.indexOf('"records": [');
    if (recordsStart === -1) return 0;

    for (let i = recordsStart; i < position; i++) {
      if (text[i] === "{") {
        let j = i - 1;
        while (j > recordsStart && /\s/.test(text[j])) {
          j--; // Skip whitespace
        }

        if (text[j] === "[" || text[j] === ",") {
          count++;
        }
      }
    }

    // The first item (index [0]) starts with '[{', so we return count - 1
    return count > 0 ? count - 1 : 0;
  };

  // Find all positions of a key in CodeMirror text, now respecting array context
  const findPositions = (text, key) => {
    const parts = key.split(".");
    const lastKey = parts.slice(-1)[0];
    const arrayIndexMatch = key.match(/\[(\d+)\]/);
    const targetIndex = arrayIndexMatch
      ? parseInt(arrayIndexMatch[1], 10)
      : null;

    // Search for the specific key name (e.g., "gender")
    const keyPattern = new RegExp(`"${lastKey}"`, "g");
    const positions = [];

    let match;
    while ((match = keyPattern.exec(text)) !== null) {
      const startIndex = match.index;

      // **LOGIC:** If we are looking for an array item, check the object context
      if (targetIndex !== null) {
        const estimatedIndex = countObjectStart(text, startIndex);

        // If the line containing this key is not in the correct object index, skip it.
        if (estimatedIndex !== targetIndex) {
          continue; // Skip this match; it belongs to a different records[i]
        }
      }

      // Original logic to find the start and end of the line
      let lineStart = text.lastIndexOf("\n", startIndex);
      lineStart = lineStart === -1 ? 0 : lineStart + 1;

      let lineEnd = text.indexOf("\n", startIndex);
      if (lineEnd === -1) lineEnd = text.length;

      positions.push({ from: lineStart, to: lineEnd });
    }

    return positions.length ? positions : null;
  };

  // Generate color highlights for CodeMirror
  const generateDecorations = (text, flat, matchSet, diffSet) => {
    // ... (Your original generateDecorations function remains here)
    const builder = new RangeSetBuilder();
    const ranges = [];

    Object.keys(flat).forEach((key) => {
      const positions = findPositions(text, key);
      if (!positions) return;

      const deco = matchSet.has(key)
        ? Decoration.mark({
            attributes: { style: "background-color: #B2F5EA; color: black;" }, // ✨ Mint Green
          })
        : diffSet.has(key)
        ? Decoration.mark({
            attributes: { style: "background-color: #FFF3F2; color: black;" }, // ✨ Pale Coral
          })
        : null;
      // ...

      if (deco) {
        positions.forEach(({ from, to }) => {
          ranges.push({ from, to, deco });
        });
      }
    });

    ranges.sort((a, b) => a.from - b.from);
    ranges.forEach(({ from, to, deco }) => builder.add(from, to, deco));

    return builder.finish();
  };

  // Handle Compare click
  const handleCompare = () => {
    const obj1 = tryParse(json1);
    const obj2 = tryParse(json2);

    if (!obj1 || !obj2) {
      setResult("❌ Invalid JSON format! Please check your input.");
      setDecorations1(Decoration.none);
      setDecorations2(Decoration.none);
      return;
    }

    const flat1 = flattenJSON(obj1);
    const flat2 = flattenJSON(obj2);
    const { match, diff } = compareFlat(flat1, flat2);

    setResult(`Equal Values: ${match.size}\nDifferent Values: ${diff.size}`);

    setDecorations1(generateDecorations(json1, flat1, match, diff));
    setDecorations2(generateDecorations(json2, flat2, match, diff));
  };

  // CodeMirror decoration extension
  const decorationExtension = (decorations) =>
    EditorView.decorations.of(decorations);

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">🧩 JSON Compare</h1>

      <div className="flex flex-wrap gap-6 justify-center w-full max-w-6xl">
        {/* Left JSON Editor */}
        <div className="flex-1 min-w-[350px] border rounded-2xl overflow-hidden shadow-sm">
          <CodeMirror
            key={"editor1-" + result}
            value={json1}
            height="400px"
            placeholder={"Enter JSON 1"}
            extensions={[json(), decorationExtension(decorations1)]}
            onChange={(value) => {
              setJson1(value);
              // **FIX 2: RangeError Fix**
              if (value.trim() === "") {
                setDecorations1(Decoration.none);
              }
            }}
          />
        </div>

        {/* Compare Button */}
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={handleCompare}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Compare
          </button>
        </div>

        {/* Right JSON Editor */}
        <div className="flex-1 min-w-[350px] border rounded-2xl overflow-hidden shadow-sm">
          <CodeMirror
            key={"editor2-" + result}
            value={json2}
            height="400px"
            placeholder={"Enter JSON 2"}
            extensions={[json(), decorationExtension(decorations2)]}
            onChange={(value) => {
              setJson2(value);
              if (value.trim() === "") {
                setDecorations2(Decoration.none);
              }
            }}
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="mt-6 w-full max-w-xl bg-white border rounded-2xl p-4 text-center shadow-sm whitespace-pre-wrap font-mono text-gray-700">
        <h3>Output:</h3>
        {result}
      </div>
    </div>
  );
}

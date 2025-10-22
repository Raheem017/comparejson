import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

// ✅ Inline SVG replacements
const YoutubeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path
      fill="currentColor"
      d="M549.655 124.083c-6.281-23.65-24.787-42.207-48.497-48.498C498.428 64 288 64 288 64S77.572 64 54.842 75.582c-23.71 6.291-42.216 24.798-48.497 48.498C0 146.428 0 256 0 256s0 109.572 5.345 131.917c6.281 23.65 24.787 42.207 48.497 48.498C77.572 448 288 448 288 448s210.428 0 233.158-11.582c23.71-6.291 42.216-24.798 48.497-48.498C576 365.572 576 256 576 256s0-109.572-5.345-131.917zm-31.258 152.091L232.023 378.026V134.974l286.374 152.091z"
    />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M389.2 48h70.6L305.6 224.2 487 464H397.4L267.6 309.9 119.5 464H78.2L249.3 286.9 64 48h94L245.8 191.7 389.2 48zM364.5 423.8h53.7L138.5 89.2H82.8L364.5 423.8z"
    />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM135.2 416H77.1V192h58.1v224zM106.1 169.1c-19.1 0-34.7-15.6-34.7-34.7c0-19.1 15.6-34.7 34.7-34.7s34.7 15.6 34.7 34.7c0 19.1-15.6 34.7-34.7 34.7zm276.9 246.9h-57.9V326c0-23.7-19.3-43-43-43c-23.7 0-43 19.3-43 43v90H188.1V192h57.9v25.2c9.8-19.7 32.1-43 72-43c55.6 0 100 44.4 100 100v141.8z"
    />
  </svg>
);

export default function ProductPage({ editorView }) {
  const theme = useTheme();

  const faqs = [
    {
      q: "Is it safe to compare JSON data online?",
      a: "Yes, your JSON data is processed securely. All comparisons happen directly in your browser, and no data is stored or shared with any server, ensuring complete privacy.",
    },
    {
      q: "Do I need an account to compare JSON files?",
      a: "No, you don’t need to sign up or log in. The JSON Compare tool works instantly and is completely free to use — just paste your JSONs and click Compare.",
    },
    {
      q: "Can this tool highlight the same and different values?",
      a: "Yes! The tool shows which key–value pairs are identical and which are different, with color highlights and a count of equal vs. different pairs.",
    },
    {
      q: "Does it support nested or complex JSON objects?",
      a: "Absolutely. The tool can handle nested JSON objects and compares each key–value path individually for accurate results.",
    },
    {
      q: "Can I ignore specific keys during comparison?",
      a: "Yes, you can choose to ignore certain keys like 'timestamp' or 'id' if you don’t want them included in the comparison results.",
    },
  ];

  const features = [
    {
      title: "Compare JSON Objects Instantly",
      desc: "Quickly compare two JSON objects side by side. Highlight matching and different key–value pairs with color-coded results.",
    },
    {
      title: "Count Equal and Different Values",
      desc: "Get instant insights with a summary showing how many key–value pairs are equal and how many differ between two JSONs.",
    },
    {
      title: "Support for Nested JSON Structures",
      desc: "Easily handle complex or nested JSON data. The tool compares every key path for accurate and detailed difference detection.",
    },
    {
      title: "Ignore Keys and Customize Comparison",
      desc: "Skip certain keys like 'id' or 'timestamp' during comparison. Fine-tune your comparison for cleaner, more meaningful results.",
    },
  ];

  return (
    <Box>
      {/* HERO SECTION */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h1" sx={{ fontSize: "30px", fontWeight: 700 }}>
          JSON Editor Online – Format, Validate & Beautify Instantly
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "15px", mt: 2, maxWidth: "700px", mx: "auto" }}
        >
          Our JSON editor online helps developers, testers, and students edit,
          validate, and beautify JSON directly in the browser. No installation
          needed.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              editorView.focus();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            href="https://json-format.com/"
            target="_blank"
          >
            Start Using JSON Editor Online
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Chrome Extension
          </Button>
        </Box>
      </Box>

      {/* FEATURES SECTION */}
      <Box sx={{ py: 8, px: 4 }}>
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: "38px",
            fontWeight: 700,
            color: theme.palette.primary.main,
          }}
        >
          JSON Compare Tool Features
        </Typography>
        <Typography
          component="h3"
          sx={{
            textAlign: "center",
            mb: 8,
            fontSize: "20px",
            color: "#333",
          }}
        >
          Highlight Same & Different Key–Value Pairs with Real-Time Count
        </Typography>

        <Grid container spacing={6} sx={{ justifyContent: "center" }}>
          {features.map((f, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Typography
                component="h3"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.primary.main,
                }}
              >
                {f.title}
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: "17px", color: "#333", maxWidth: "90%" }}
              >
                {f.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* WHY CHOOSE */}
      <Box sx={{ py: 6, maxWidth: "800px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{ fontSize: "28px", fontWeight: 600, mb: 3 }}
        >
          Why Choose Our JSON Compare Tool Online?
        </Typography>
        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>
            ✅ <strong>Free JSON Comparison</strong> – No sign-up or
            installation needed. Compare JSON objects instantly online.
          </li>
          <li>
            ✅ <strong>Highlights Same & Different Values</strong> – See
            matching and different key–value pairs with clear color coding.
          </li>
          <li>
            ✅ <strong>Count Summary</strong> – Instantly view how many pairs
            are equal and how many differ between two JSON files.
          </li>
          <li>
            ✅ <strong>Supports Nested JSON Objects</strong> – Handles complex
            structures and deeply nested key paths with ease.
          </li>
          <li>
            ✅ <strong>Private & Secure</strong> – All comparisons happen
            directly in your browser; no data is uploaded or stored.
          </li>
        </ul>
      </Box>

      {/* FAQ SECTION */}
      <Box sx={{ py: 6, maxWidth: "800px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{ fontSize: "28px", fontWeight: 600, mb: 3 }}
        >
          Compare Json – Common Questions
        </Typography>
        {faqs.map((faq, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="h3"
                sx={{ fontSize: "20px", fontWeight: 600 }}
              >
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* FINAL CTA */}
      <Box
        sx={{
          py: 6,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography component="h2" sx={{ fontSize: "28px", fontWeight: 700 }}>
          Edit JSON Online – Simple, Fast & Free
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3, fontSize: "18px" }}>
          From chaos to clarity in seconds. Use our JSON editor online to
          format, beautify, and validate JSON instantly.
        </Typography>
        <Button
          size="large"
          onClick={() => {
            editorView.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          sx={{ backgroundColor: "#fff", color: theme.palette.primary.main }}
        >
          Try JSON Editor Online Now
        </Button>
      </Box>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#f3f8ff] px-6 py-10 text-[#1a2b6d]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Brand & Summary */}
          <div className="md:w-[30%]">
            <h2 className="text-2xl font-bold">
              <span className="text-[#1a50b3]">JSON</span> Compare Tool
            </h2>
            <p className="mt-3 bg-white shadow-sm p-3 rounded-lg text-[15px] text-gray-700 leading-relaxed">
              Compare JSON objects online in seconds. Highlight matching and
              different key–value pairs, get a summary count of equal vs.
              different values, and handle nested structures easily. Fast,
              secure, and developer-friendly.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} JSON Compare Tool. All rights
              reserved.
            </p>
          </div>

          {/* Tools & Legal */}
          <div className="md:w-1/4 text-left">
            <h3 className="text-lg font-bold text-[#1a50b3] mb-2">
              JSON Compare & Legal
            </h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="/">Compare JSON Online</a>
              </li>
              <li>
                <a href="/diff">JSON Diff Viewer</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center text-center flex-1">
            <p>
              Write to us at{" "}
              <a
                href="mailto:info@json-format.com"
                className="text-[#1a50b3] font-medium"
              >
                info@json-format.com
              </a>
            </p>
            <p className="mt-3 font-semibold">Follow us:</p>
            <div className="flex justify-center gap-6 my-3">
              <a
                href="https://www.youtube.com/@JsonFormat-w8z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#eaf1ff] p-2 rounded-full hover:scale-110 transition-transform"
              >
                <YoutubeIcon
                  width={26}
                  height={26}
                  className="text-[#1a50b3]"
                />
              </a>
              <a
                href="https://x.com/json_format"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#eaf1ff] p-2 rounded-full hover:scale-110 transition-transform"
              >
                <TwitterIcon
                  width={26}
                  height={26}
                  className="text-[#1a50b3]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/json-format-page"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#eaf1ff] p-2 rounded-full hover:scale-110 transition-transform"
              >
                <LinkedinIcon
                  width={26}
                  height={26}
                  className="text-[#1a50b3]"
                />
              </a>
            </div>

            <p className="font-semibold">Our Products</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                alt="Chrome"
                className="w-8 h-8"
              />
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a2b6d] font-medium hover:underline"
              >
                Chrome Extension
              </a>
            </div>

            <p className="text-[#002fff] mt-3 font-medium">
              Latest Release Version: <span className="font-bold">1.1.0</span>
            </p>
          </div>

          {/* Blog Links */}
          <div className="md:w-1/4 text-left">
            <h3 className="text-lg font-bold text-[#1a50b3] mb-2">BLOG</h3>
            <ul className="space-y-2 font-medium">
              <li>Basics</li>
              <li>Features</li>
              <li>Releases</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
      </footer>
    </Box>
  );
}

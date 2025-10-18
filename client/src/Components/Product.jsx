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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ProductPage({ editorView }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const faqs = [
    {
      q: "How do I edit a JSON file?",
      a: "You can edit a JSON file with any text editor, but using a json editor online ensures error-free syntax, formatting, and real-time validation.",
    },
    {
      q: "What is the JSON editor?",
      a: "A JSON editor is a tool that allows you to create, modify, and validate JSON data. A json editor online like json-format.com offers syntax highlighting, error detection, and tree view navigation.",
    },
    {
      q: "What is the JSON formatter?",
      a: "A JSON formatter organizes messy or minified JSON into a readable format. With a json editor online, you can format JSON instantly with proper indentation.",
    },
    {
      q: "How to beautify a JSON file?",
      a: "You can beautify JSON using code editors or a json editor online like json-format.com. It adds indentation and makes data human-readable.",
    },
    {
      q: "How can I format JSON?",
      a: "Format JSON by pasting it into a json editor online such as json-format.com. It instantly validates, formats, and beautifies your JSON.",
    },
  ];

  const features = [
    {
      title: "JSON Formatter Extension",
      desc: "Format JSON instantly inside your browser with our Chrome extension. No copy-paste needed.",
    },
    {
      title: "Online JSON Formatter",
      desc: "Use our json editor online to format and validate JSON in seconds with zero setup.",
    },
    {
      title: "JSON Viewer",
      desc: "Navigate JSON in tree or text mode for improved debugging and readability.",
    },
    {
      title: "JSON Compare",
      desc: "Easily spot differences between two JSON files using our online comparison tool.",
    },
    {
      title: "JSON Beautifier",
      desc: "Make messy JSON clean and structured with proper indentation.",
    },
    {
      title: "JSON Validator",
      desc: "Ensure your JSON syntax is error-free before using it in projects.",
    },
    {
      title: "Downloadable JSON Formatter",
      desc: "Work offline with our lightweight JSON Formatter tool.",
    },
  ];

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h1" sx={{ fontSize: "40px", fontWeight: 700 }}>
          JSON Editor Online – Format, Validate & Beautify Instantly
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "18px", mt: 2, maxWidth: "700px", mx: "auto" }}
        >
          Our json editor online helps developers, testers, and students edit
          JSON, validate syntax, and beautify data directly in the browser. No
          installation needed — edit JSON files instantly.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              editorView.focus();
              window.scrollTo({
                top: 0,
                behavior: "smooth", // enables smooth animation
              });
            }}
          >
            Start Using JSON Editor Online
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://chromewebstore.google.com/detail/json-format/hlgkjmgkncbnlfmpbllpnnklglablloj?hl=en-US&utm_source=ext_sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Chrome Extension
          </Button>
        </Box>
      </Box>

      {/* FEATURES LIST */}
      <Box sx={{ py: 8, px: 2 }}>
        {/* Main Heading with keyword */}
        <Typography
          component="h1"
          sx={{
            textAlign: "center",
            mb: 8,
            fontSize: "38px",
            fontWeight: 700,
            lineHeight: 1.3,
            color: theme.palette.primary.main,
          }}
        >
          JSON Editor Online – Simplify Your JSON Workflow
        </Typography>

        {features.map((f, i) => (
          <Grid
            container
            spacing={6}
            key={i}
            sx={{
              mb: 10,
              alignItems: "center",
            }}
          >
            {/* Text */}
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 2, md: i % 2 === 0 ? 1 : 2 }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "26px",
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                {f.title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "#333",
                }}
              >
                {f.desc}
              </Typography>
            </Grid>

            {/* Clean right/left illustration space */}
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 1, md: i % 2 === 0 ? 2 : 1 }}
              sx={{ textAlign: "center" }}
            ></Grid>
          </Grid>
        ))}
      </Box>

      {/* WHY CHOOSE */}
      <Box sx={{ py: 6, maxWidth: "800px", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "28px", fontWeight: 600, mb: 3 }}
        >
          Why Choose Our JSON Editor Online?
        </Typography>
        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>✅ 100% Free & Online – no signup required</li>
          <li>✅ Beginner & professional friendly</li>
          <li>✅ Secure – your JSON data stays private</li>
          <li>✅ All-in-one: Format, Beautify, Validate, View, Compare</li>
        </ul>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 6, maxWidth: "800px", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "28px", fontWeight: 600, mb: 3 }}
        >
          JSON Editor Online – Common Questions
        </Typography>
        {faqs.map((faq, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h3"
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
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: 700 }}>
          Edit JSON Online – Simple, Fast & Free
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3, fontSize: "18px" }}>
          From chaos to clarity in seconds. Use our json editor online to
          format, beautify, and validate JSON instantly.
        </Typography>
        <Button
          // variant="outlined"s
          size="large"
          onClick={() => {
            editorView.focus();
            window.scrollTo({
              top: 0,
              behavior: "smooth", // enables smooth animation
            });
          }}
          sx={{ backgroundColor: "#fff" }}
        >
          Try JSON Editor Online Now
        </Button>
      </Box>
    </Box>
  );
}

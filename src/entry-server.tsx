import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Build-time prerender of the home page, so crawlers get real content in index.html.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

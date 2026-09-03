import { readFileSync } from "fs";
import path from "path";

// Serves the brand manual as a standalone HTML document rather than a
// React page — it's a self-contained file with its own <style>/<script>,
// not something that should be wrapped in the site's Header/Footer.
export const dynamic = "force-static";

export async function GET() {
  const content = readFileSync(
    path.join(process.cwd(), "app/branding/brand-manual.html"),
    "utf-8"
  );
  const html = `<!doctype html>\n<html lang="en">\n${content}\n</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

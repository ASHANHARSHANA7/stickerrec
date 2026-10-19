import { readFile, writeFile } from "node:fs/promises";

const root = "/home/ubuntu/sticker-reconciliation/dist/public";
let html = await readFile(`${root}/index.html`, "utf8");
const cssMatch = html.match(/<link rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/);
const jsMatch = html.match(/<script type="module"[^>]+src="([^"]+)"[^>]*><\/script>/);
if (!cssMatch || !jsMatch) throw new Error("Could not locate build assets in dist/public/index.html");
const css = await readFile(`${root}/${cssMatch[1].replace(/^\//, "")}`, "utf8");
const js = await readFile(`${root}/${jsMatch[1].replace(/^\//, "")}`, "utf8");
html = html.replace(cssMatch[0], `<style>/* Inlined production stylesheet */\n${css}\n</style>`);
html = html.replace(jsMatch[0], `<script type="module">/* Inlined production application bundle */\n${js}\n</script>`);
html = html.replace(/<script\s+defer\s+src="%VITE_ANALYTICS_ENDPOINT%\/umami"[\s\S]*?<\/script>/, "");
html = html.replace(/<title>[^<]*<\/title>/, "<title>NOBALANCE RECONCILIATION</title>");
await writeFile("/home/ubuntu/sticker-reconciliation/NOBALANCE-RECONCILIATION-FULL.html", html);
console.log("Created NOBALANCE-RECONCILIATION-FULL.html", html.length, "bytes");

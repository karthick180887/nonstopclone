const fs = require("fs");

const source = fs.readFileSync("f:/nonstopclone/temp-discovery/source-bundle.js", "utf8");
const start = source.indexOf("Od=") + 3;

let i = start;
let depth = 0;
let inString = false;

for (; i < source.length; i++) {
  const c = source[i];
  const prev = source[i - 1];

  if (inString) {
    if (c === '"' && prev !== "\\") inString = false;
    continue;
  }

  if (c === '"') {
    inString = true;
    continue;
  }

  if (c === "{") depth++;
  else if (c === "}") {
    depth--;
    if (depth === 0) {
      i++;
      break;
    }
  }
}

const objectCode = source.slice(start, i);
const od = new Function(`return ${objectCode}`)();
fs.writeFileSync("f:/nonstopclone/lib/route-od-data.json", JSON.stringify(od));
console.log("route count", Object.keys(od).length);

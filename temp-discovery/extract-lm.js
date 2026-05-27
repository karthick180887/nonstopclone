const fs = require("fs");
const path = require("path");

const bundlePath = path.join(__dirname, "source-bundle.js");
const s = fs.readFileSync(bundlePath, "utf8");

const lmEq = s.indexOf("Lm=");
if (lmEq < 0) throw new Error("Lm= not found");
const objStart = lmEq + 3;
const endMarker = s.indexOf("},Ox=[", objStart);
if (endMarker < 0) throw new Error("},Ox=[ not found after Lm");

const code = s.slice(objStart, endMarker + 1);
// eslint-disable-next-line no-new-func
const Lm = new Function(`return ${code}`)();

const out = path.join(__dirname, "..", "lib", "city-lm-data.json");
fs.writeFileSync(out, JSON.stringify(Lm));
console.log("wrote", out, "keys", Object.keys(Lm).length);

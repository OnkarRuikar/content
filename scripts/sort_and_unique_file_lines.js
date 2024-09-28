import fs from "node:fs";
import path from "node:path";

const filePath = process.argv[2];

if (!fs.existsSync(filePath)) {
  console.error(`File ${filePath} doesn't exist.`);
  process.exit(1);
}

function equalsIgnoreCase(string1, string2) {
  return new RegExp(`^${string1}$`, "gi").test(string2);
}

const uniq = [];
const lines = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")
  .sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    return a < b ? -1 : a > b ? 1 : 0;
  });

for (let i = 0; i < lines.length; ) {
  const line = lines[i];
  if (line.trim() !== "") {
    uniq.push(line);
    while (equalsIgnoreCase(line, lines[++i]));
  } else {
    i++;
  }
}

fs.writeFileSync(filePath, uniq.join("\n"));

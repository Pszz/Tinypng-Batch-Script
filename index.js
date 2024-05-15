const tinify = require("tinify");
const fs = require("fs");
const path = require("path");

const entry = "./entry";
const outDir = "./output";
const suffixs = ["png", "jpeg", "webp"];

!fs.existsSync(outDir) && fs.mkdirSync(outDir);
function setup(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  files.forEach((item) => {
    const currPath = `${dir}/${item.name}`;
    const outPath = currPath.replace(entry, outDir);
    if (item.isDirectory()) {
      if (!fs.existsSync(outPath)) {
        fs.mkdirSync(outPath);
      }

      return setup(currPath);
    }
    const suffix = path.extname(currPath).replace(".", "").toLowerCase();
    if (suffixs.includes(suffix)) {
      build(currPath);
    }
  });
}

tinify.key = "Your TinyPNG API-KEY";
function build(dir) {
  // https://tinypng.com/developers/reference/nodejs
  // tinify.proxy = "http://user:pass@192.168.0.1:8080";
  const source = tinify.fromFile(dir);

  source.toFile(dir.replace(entry, outDir));
}
setup(entry);

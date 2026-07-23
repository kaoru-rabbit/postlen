// 日本語文章の翻訳調を機械的に測る。
//   node scripts/ja-audit.cjs [ファイル...]
// 引数なしなら src/content/ 配下の全ファイルを対象にする。
//
// 「自然かどうか」は主観だが、翻訳調の日本語には再現性のある特徴がある。
// 受身の多用、causal「ため」の連発、英語の強調構文の直写し、そして
// 文長が均一であること。ここではその4つを数える。

const fs = require("fs");
const path = require("path");

const TARGETS = {
  passivePer1000: 2.0, // 受身「される」
  tamePer1000: 1.5, // 「〜ため、」
  cleftPer1000: 0.5, // 「〜のは〜です」
  longRatio: 0.1, // 60字超の文の割合（長すぎ）
  shortRatio: 0.15, // 15字以下の文の割合（短すぎ・細切れ）
  avgMin: 33, // 一文の平均字数の下限（これ未満は細切れ）
  avgMax: 48, // 一文の平均字数の上限（これ超は冗長）
};

function collectFiles(args) {
  if (args.length) return args;
  const dir = path.join(__dirname, "..", "src", "content");
  const out = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".ts")) out.push(p);
    }
  })(dir);
  return out;
}

function extractJa(file) {
  const s = fs.readFileSync(file, "utf8");
  const out = [];
  // text: "..." / q: "..." / a: "..." / heading: "..." を拾う
  const re = /(?:text|q|a|heading|title|description)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    if (/[ぁ-ゖァ-ヺ]/.test(m[1])) out.push(m[1]);
  }
  return out;
}

function analyse(paragraphs) {
  const all = paragraphs.join("");
  if (!all.length) return null;
  const per1000 = (re) => ((all.match(re) || []).length / all.length) * 1000;

  const sentences = all
    .split(/。/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
  const lens = sentences.map((s) => s.length).sort((a, b) => a - b);
  const avg = lens.reduce((a, b) => a + b, 0) / lens.length;
  const median = lens[Math.floor(lens.length / 2)];

  return {
    chars: all.length,
    sentences: sentences.length,
    passivePer1000: per1000(/され(ます|ている|た|る|ない)/g),
    tamePer1000: per1000(/ため[に、]/g),
    cleftPer1000: per1000(/のは[^。]{0,25}です/g),
    longRatio: lens.filter((l) => l > 60).length / lens.length,
    shortRatio: lens.filter((l) => l <= 15).length / lens.length,
    avg,
    median,
    longest: sentences.slice().sort((a, b) => b.length - a.length)[0] || "",
  };
}

function report(label, r) {
  if (!r) return console.log(label + ": 日本語なし");
  const row = (name, value, cond, targetText) => {
    const shown = typeof value === "number" ? value.toFixed(1) : value;
    console.log(
      "  " + name.padEnd(22) + String(shown).padStart(6) +
        "   目標 " + targetText + "   " + (cond ? "OK" : "NG")
    );
  };
  console.log("\n" + label + "  (" + r.chars + "字 / " + r.sentences + "文)");
  row("受身 /千字", r.passivePer1000, r.passivePer1000 <= TARGETS.passivePer1000, "≤ " + TARGETS.passivePer1000);
  row("ため /千字", r.tamePer1000, r.tamePer1000 <= TARGETS.tamePer1000, "≤ " + TARGETS.tamePer1000);
  row("強調構文 /千字", r.cleftPer1000, r.cleftPer1000 <= TARGETS.cleftPer1000, "≤ " + TARGETS.cleftPer1000);
  row("60字超の割合", r.longRatio * 100, r.longRatio <= TARGETS.longRatio, "≤ " + TARGETS.longRatio * 100 + "%");
  row("15字以下の割合", r.shortRatio * 100, r.shortRatio <= TARGETS.shortRatio, "≤ " + TARGETS.shortRatio * 100 + "%");
  row("一文の平均字数", r.avg, r.avg >= TARGETS.avgMin && r.avg <= TARGETS.avgMax, TARGETS.avgMin + "〜" + TARGETS.avgMax + "字");
  console.log("  中央値 " + r.median + "字");
  if (r.longest.length > 60) {
    console.log("  最長 [" + r.longest.length + "字] " + r.longest.slice(0, 60) + "…");
  }
}

const files = collectFiles(process.argv.slice(2));
let all = [];
for (const f of files) {
  const ja = extractJa(f);
  if (!ja.length) continue;
  all = all.concat(ja);
  if (files.length > 1) report(path.basename(f), analyse(ja));
}
report(files.length > 1 ? "=== 全体 ===" : path.basename(files[0]), analyse(all));

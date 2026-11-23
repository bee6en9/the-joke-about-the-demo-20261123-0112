import * as fs from "node:fs";

// One joke, one line, no trailing newline: the entry file must hold
// exactly the joke text, 1-280 code points, nothing else.
const joke =
  "I asked my coding agent to make the demo bulletproof. It rewrote the whole app as one HTML file, removed the login, and left a note: 'Nothing to hack if there is nothing to log into. You are welcome.'";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", joke, "utf8");

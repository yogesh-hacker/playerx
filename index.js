import fs from "fs";
import { webcrack } from "webcrack";
const url = "https://moviesapi.club/";
const options = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:138.0) Gecko/20100101 Firefox/138.0",
    Referer: url,
  },
};
const main = async () => {
  try {
    const iframe = await (await fetch(`${url}movie/385687`, options))
      .text()
      .then((resp) => resp.match(/iframe.*src=['"](.*?)['"]/)[1]);

    const resp = await fetch(iframe, options);

    const text = await resp.text();

    const script = text
      .match(/<script type="text\/javascript">(.*?)<\/script>/g)
      .sort((a, b) => a.length - b.length)
      .pop()
      .replace(/<script type="text\/javascript">/g, "")
      .replace("</script>", "");

    const result = await webcrack(script);
    const code = result.code;
    const match = code.match(/const\s+\w+\s*=\s*"([^"]*)"/);
    const pass_phrase = match ? match[1] : null;
    if (pass_phrase) {
        const key_hex = Buffer.from(pass_phrase, 'utf-8').toString('hex');
        fs.writeFileSync("key.key", key_hex);
        console.log("🌽 Hex Key saved to key.key");
    } else {
        console.log("No match found.");
    }
  } catch (error) {
    console.error("🌽 Failed:", err.message);
  }
};
main();

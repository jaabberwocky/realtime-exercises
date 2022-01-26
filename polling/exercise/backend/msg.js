import nanobuffer from "nanobuffer";

const msg = new nanobuffer(50);
msg.push({
  user: "brian",
  text: "hi",
  time: Date.now(),
});

const getMsgs = () => Array.from(msg).reverse();
export { msg, getMsgs };

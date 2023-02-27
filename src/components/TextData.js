const data = [
  {
    shape: "path",
    d: "M 0 0 L 230 0 L 200 100 L -20 100 Z",
    fill: "lightgreen",
    transform: "translate(170, 10)",
  },
  ,
  { shape: "text", text: "Enter Integers A and b", x: 200, y: 60 },
  {
    shape: "line",
    x1: 260,
    y1: 110,
    x2: 260,
    y2: 240,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "path",
    d: "M250 240 l20 0l-10 10z",
    fill: "black",
  },
  { shape: "rect", x: 170, y: 250, width: 200, height: 100, fill: "teal" },
  { shape: "text", text: "Start with A and B", x: 207, y: 300 },
  {
    shape: "line",
    x1: 260,
    y1: 350,
    x2: 260,
    y2: 470,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "path",
    d: "M250 470 l20 0l-10 10z",
    fill: "black",
  },
  {
    shape: "path",
    d: "M 0 0 L 90 90 L 0 180 L -90 90 Z",
    fill: "green",
    transform: "translate(260, 480)",
  },
  { shape: "text", text: "B == 0 ?", x: 230, y: 570 },

  {
    shape: "line",
    x1: 260,
    y1: 660,
    x2: 260,
    y2: 790,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "path",
    d: "M250 790 l20 0l-10 10z",
    fill: "black",
  },
  { shape: "rect", x: 160, y: 800, width: 200, height: 100, fill: "orange" },
  {
    shape: "text",
    text: "GCD = B",
    x: 230,
    y: 850,
  },
  { shape: "text", text: "True", x: 200, y: 720 },
  { shape: "text", text: "False", x: 380, y: 550 },
  {
    shape: "line",
    x1: 350,
    y1: 570,
    x2: 555,
    y2: 570,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "path",
    d: "M560 570 l-10 -10 l0 20 z",
    fill: "black",
  },
  {
    shape: "rect",
    x: 560,
    y: 520,
    width: 200,
    height: 100,
    fill: "lightblue",
  },
  { shape: "text", text: "x = y", x: 600, y: 560 },
  { shape: "text", text: "y = x % y", x: 600, y: 580 },
  {
    shape: "line",
    x1: 640,
    y1: 520,
    x2: 640,
    y2: 420,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "line",
    x1: 640,
    y1: 420,
    x2: 270,
    y2: 420,
    stroke: "black",
    strokeWidth: "2",
  },
  {
    shape: "path",
    d: "M260 420 l10 10 l0 -20z",
    fill: "black",
  },
];

const customXML = data
  .map((obj) => {
    switch (obj.shape) {
      case "rect":
        return `<rect/${obj.x}/${obj.y}/${obj.width}/${obj.height}>`;
      case "circle":
        return `<circle/${obj.rx}/${obj.ry}/${obj.rad}>`;
      case "line":
        return `<line/${obj.x1}/${obj.y1}/${obj.x2}/${obj.y2}>`;
      case "path":
        return `<path/${obj.d}/${obj.fill}>`;
      case "text":
        return `<text/${obj.text}/${obj.x}/${obj.y}>`;
      default:
        return "";
    }
  })
  .filter((str) => str !== "");
const TextData = () => {
  console.log(customXML);
  return <></>;
};
export default TextData;

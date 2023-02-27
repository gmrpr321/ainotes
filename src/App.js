import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { select } from "d3-selection";
import SvgBackground from "./components/SvgBackground";
import TextData from "./components/TextData";
import GiveImage from "./components/GiveImage";
let base_url = "http://127.0.0.1:8000/login/";
function App() {
  const [data, setData] = useState("");
  let sendData = {
    username: "asdf",
    password: "asfd",
  };

  // useEffect(() => {
  //   axios.get(base_url).then((Response) => {
  //     console.log(Response.data);
  //     setData(Response.data);
  //   });
  // }, []);
  console.log(data["data"]);
  return (
    <div>
      <SvgBackground />
    </div>
  );
}

export default App;

const data = [
  '{"shape" : "rect","x" : 50,"y" : 50,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Lexical Analyzer","x" : 100,"y" : 100}',
  '{"shape": "line","x1": 150,"y1": 150,"x2": 150,"y2": 280,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M280 150 L290 150 L150 160 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 200,"y" : 280,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Syntax Analyzer","x" : 250,"y" : 330}',
  '{"shape": "line","x1": 250,"y1": 380,"x2": 250,"y2": 510,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M510 380 L520 380 L250 390 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 350,"y" : 510,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Semantic Analyzer","x" : 400,"y" : 560}',
  '{"shape": "line","x1": 400,"y1": 610,"x2": 400,"y2": 740,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M740 610 L750 610 L400 620 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 450,"y" : 740,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Intermediate Code Generator","x" : 500,"y" : 790}',
  '{"shape": "line","x1": 500,"y1": 840,"x2": 500,"y2": 970,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M970 840 L980 840 L500 850 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 550,"y" : 970,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Code Optimizer","x" : 600,"y" : 1020}',
  '{"shape": "line","x1": 600,"y1": 1070,"x2": 600,"y2": 1200,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M1200 1070 L1210 1070 L600 1080 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 650,"y" : 1200,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Code Generator","x" : 700,"y" : 1250}',
  '{"shape": "line","x1": 700,"y1": 1300,"x2": 700,"y2": 1430,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M1430 1300 L1440 1300 L700 1310 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 750,"y" : 1430,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Object Code Generator","x" : 800,"y" : 1480}',
  '{"shape": "line","x1": 800,"y1": 1530,"x2": 800,"y2": 1660,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M1660 1530 L1670 1530 L800 1540 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 850,"y" : 1660,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Assembler","x" : 900,"y" : 1710}',
  '{"shape": "line","x1": 900,"y1": 1760,"x2": 900,"y2": 1890,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M1890 1760 L1900 1760 L900 1770 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 950,"y" : 1890,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Linker","x" : 1000,"y" : 1940}',
  '{"shape": "line","x1": 1000,"y1": 1990,"x2": 1000,"y2": 2120,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M2120 1990 L2130 1990 L1000 2000 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1050,"y" : 2120,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Loader","x" : 1100,"y" : 2170}',
  '{"shape": "line","x1": 1100,"y1": 2220,"x2": 1100,"y2": 2350,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M2350 2220 L2360 2220 L1100 2230 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1150,"y" : 2350,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Symbol Table","x" : 1200,"y" : 2400}',
  '{"shape": "line","x1": 1200,"y1": 2450,"x2": 1200,"y2": 2580,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M2580 2450 L2590 2450 L1200 2460 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1250,"y" : 2580,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Error Handler","x" : 1300,"y" : 2630}',
  '{"shape": "line","x1": 1300,"y1": 2680,"x2": 1300,"y2": 2810,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M2810 2680 L2820 2680 L1300 2690 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1350,"y" : 2810,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","x" : 1400,"y" : 2860,"text" : "Parser"}',
  '{"shape": "line","x1": 1400,"y1": 2910,"x2": 1400,"y2": 3040,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M3040 2910 L3050 2910 L1400 2920 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1450,"y" : 3040,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","x" : 1500,"y" : 3090,"text" : "Interpreter"}',
  '{"shape": "line","x1": 1500,"y1": 3140,"x2": 1500,"y2": 3270,"stroke": "black","strokeWidth" : "2"}',
  '{"shape" : "path","d": "M3270 3140 L3280 3140 L1500 3150 Z","fill" : "black"}',
  '{"shape" : "rect","x" : 1550,"y" : 3270,"width" : 100,"height" : 100,"fill" : "teal"}',
  '{"shape" : "text","text" : "Code Optimizer","x" : 1600,"y" : 3320}',
];

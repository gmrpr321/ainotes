import axios from "axios";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";
import { useState } from "react";
const triangle = "M260 240 l20 0l-10 10z";
const parallelogram = {
  shape: "path",
  d: "M 0 0 L 60 0 L 40 100 L -20 100 Z",
  fill: "blue",
  transform: "translate(100, 100)",
};
const diamond = {
  shape: "path",
  d: "M 0 0 L 90 90 L 0 180 L -90 90 Z",
  fill: "green",
  transform: "translate(250, 40)",
};
const arrowDown = {
  shape: "path",
  d: "M250 240 l20 0l-10 10z",
  fill: "black",
};
const arrowRight = {
  shape: "path",
  d: "M560 570 l-10 -10 l0 20 z",
  fill: "black",
};
const GiveImage = (props) => {
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
  console.log("demo running");
  const anchorRef = useRef(null);
  const svg = select(anchorRef.current);
  let result = {};
  useEffect(() => {
    // let result = {};
    // for (let x = 0; x < data.length; x++) {
    //   //convert data[x] into a dict
    //   let currentVal = { [x]: data[x] };
    //   result = { ...result, ...currentVal };
    // }
    const svg = select(anchorRef.current);
    for (let element in data) {
      let isText = false;
      if (data[element]["shape"] == "text") {
        var sym = svg.append("text");
        isText = true;
      } else {
        var sym = svg.append(data[element]["shape"]);
      }
      for (let attribute in data[element]) {
        if (attribute == "shape") continue;
        if (isText && attribute == "text") {
          sym.text(data[element]["text"]);
          continue;
        }
        sym.attr(attribute, data[element][attribute]);
      }
    }
  });

  return <svg ref={anchorRef} width="700" height="2000"></svg>;
};
export default GiveImage;
// '{ "shape": "path","d": "M300,530 L220,430 L320,430 Z","stroke": "black","strokeWidth": "2","fill": "transparent"}',

// {
//   shape: "line",
//   x1: 750,
//   y1: 570,
//   x2: 750,
//   y2: 700,
//   stroke: "black",
//   strokeWidth: "2",
// },
// {
//   shape: "path",
//   d: "M" + 740 + " 700 L" + 760 + " 700 L" + 750 + " 710 Z",
//   fill: "black",
// },
// { shape: "rect", x: 200, y: 700, width: 100, height: 100, fill: "teal" },
// { shape: "text", x: 250, y: 750, text: "Intermediate Code Generation" },
// {
//   shape: "line",
//   x1: 250,
//   y1: 800,
//   x2: 250,
//   y2: 930,
//   stroke: "black",
//   strokeWidth: "2",
// },
// {
//   shape: "path",
//   d: "M" + 240 + " 930 L" + 260 + " 930 L" + 250 + " 940 Z",
//   fill: "black",
// },
// { shape: "rect", x: 400, y: 930, width: 100, height: 100, fill: "teal" },
// { shape: "text", text: "Optimization", x: 450, y: 980 },
// {
//   shape: "line",
//   x1: 450,
//   y1: 1030,
//   x2: 450,
//   y2: 1160,
//   stroke: "black",
//   strokeWidth: "2",
// },
// {
//   shape: "path",
//   d: "M" + 440 + " 1160 L" + 460 + " 1160 L" + 450 + " 1170 Z",
//   fill: "black",
// },
// { shape: "rect", x: 700, y: 1160, width: 100, height: 100, fill: "teal" },
// { shape: "text", x: 750, y: 1210, text: "Code Generation" },
// {
//   shape: "line",
//   x1: 750,
//   y1: 1260,
//   x2: 750,
//   y2: 1390,
//   stroke: "black",
//   strokeWidth: "2",
// },
// {
//   shape: "path",
//   d: "M" + 740 + " 1390 L" + 760 + " 1390 L" + 750 + " 1400 Z",
//   fill: "black",
// },
// { shape: "rect", x: 200, y: 1390, width: 100, height: 100, fill: "teal" },
// { shape: "text", text: "Assembly", x: 250, y: 1440 },
// {
//   shape: "line",
//   x1: 250,
//   y1: 1490,
//   x2: 250,
//   y2: 1620,
//   stroke: "black",
//   strokeWidth: "2",
// },
// {
//   shape: "path",
//   d: "M" + 240 + " 1620 L" + 260 + " 1620 L" + 250 + " 1630 Z",
//   fill: "black",
// },
// { shape: "rect", x: 400, y: 1620, width: 100, height: 100, fill: "teal" },
// { shape: "text", text: "Object Code", x: 450, y: 1670 },

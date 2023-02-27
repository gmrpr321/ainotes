import { select } from "d3-selection";
import { useEffect, useRef } from "react";
import axios from "axios";
let base_url = "http://127.0.0.1:8000/image/";
let totalData = [];
let result = {};
const SvgBackground = (props) => {
  const anchorRef = useRef(null);
  let data = [];
  let title = "";
  console.log(result);
  useEffect(() => {
    console.log("req sent");
    axios
      .post(base_url, title)
      .then((Response) => {
        data = Response.data["data"];
      })
      .then(() => {
        let result = data;
        // for (let x = 0; x < data.length; x++) {
        //   //convert data[x] into a dict
        //   let currentVal = { [x]: JSON.parse(data[x]) };
        //   result = { ...result, ...currentVal };
        // }
        const svg = select(anchorRef.current);
        for (let element in result) {
          let isText = false;
          if (result[element]["shape"] == "text") {
            var sym = svg.append("text");
            isText = true;
          } else {
            var sym = svg.append(result[element]["shape"]);
          }
          for (let attribute in result[element]) {
            if (attribute == "shape") continue;
            if (isText && attribute == "text") {
              sym.text(result[element]["text"]);
              continue;
            }
            sym.attr(attribute, result[element][attribute]);
          }
        }
        console.log(result);
      });
  }, []);

  return <svg ref={anchorRef} width="5000" height="5000"></svg>;
};
export default SvgBackground;

// let curShape = shape[0];
//     svg
//       .append(data[curShape]["shape"])
//       .attr("x", data[curShape]["x"])
//       .attr("y", data[curShape]["y"])
//       .attr("width", data[curShape]["width"])
//       .attr("height", data[curShape]["height"])
//       .attr("fill", data[curShape]["fill"]);

//     curShape = shape[1];
//     svg
//       .append(data[curShape]["shape"])
//       .attr("x", data[curShape]["x"])
//       .attr("y", data[curShape]["y"])
//       .attr("width", data[curShape]["width"])
//       .attr("height", data[curShape]["height"])
//       .attr("fill", data[curShape]["fill"]);
//     curShape = shape[2];
//     svg
//       .append(data[curShape]["shape"])
//       .attr("cx", data[curShape]["cx"])
//       .attr("cy", data[curShape]["cy"])
//       .attr("r", data[curShape]["r"]);
//     curShape = shape[3];
//     svg
//       .append(data[curShape]["shape"])
//       .attr("x1", data[curShape]["x1"])
//       .attr("y1", data[curShape]["y1"])
//       .attr("x2", data[curShape]["x2"])
//       .attr("y2", data[curShape]["y2"])
//       .attr("stroke", data[curShape]["stroke"])
//       .attr("stroke-width", data[curShape]["strokeWidth"]);

// const data = {
//     baseRect: {
//       shape: "rect",
//       x: 0,
//       y: 0,
//       width: 500,
//       height: 500,
//       fill: "lightblue",
//     },
//     leftRectangle: {
//       shape: "rect",
//       x: 200,
//       y: 10,
//       width: 100,
//       height: 100,
//       fill: "darkblue",
//     },
//     rightCircle: {
//       shape: "circle",
//       cx: 200 + 100 / 2,
//       cy: 300,
//       r: 60,
//       fill: "lightgreen",
//     },
//     firstLine: {
//       shape: "line",
//       x1: 200 + 100 / 2,
//       y1: 110,
//       x2: 200 + 100 / 2,
//       y2: 240,
//       stroke: "black",
//       strokeWidth: "2",
//     },
//   };

// prompt
// construct a dictionary that contains attributes of svg elements for the given topic
// topic : Explain the structure of a Database system
// for example, this dictionary contains data to display a circle , a rectangle and a line that connects the edge of the circle with the rectangle

// const data = {
//     baseRect: {
//       shape: "rect",
//       x: 0,
//       y: 0,
//       width: 500,
//       height: 500,
//       fill: "lightblue",
//     },
//     topRectangle: {
//       shape: "rect",
//       x: 200,
//       y: 10,
//       width: 100,
//       height: 100,
//       fill: "darkblue",
//     },
//     bottomCircle: {
//       shape: "circle",
//       cx: 200 + 100 / 2,
//       cy: 300,
//       r: 60,
//       fill: "lightgreen",
//     },
//     connectLine: {
//       shape: "line",
//       x1: 200 + 100 / 2,
//       y1: 110,
//       x2: 200 + 100 / 2,
//       y2: 240,
//       stroke: "black",
//       strokeWidth: "2",
//     },
//     bottomCircleText: {
//       shape: "text",
//       value: "Bottom Circle",
//       x: 200 + 100 / 2,
//       y: 300,
//       fill: "black",
//       "text-anchor": "middle",
//     },
//     topRectangleText: {
//       shape: "text",
//       value: "Top Rectangle",
//       x: 200 + 100 / 2,
//       y: 60,
//       fill: "black",
//       "text-anchor": "middle",
//     },
//   };
// no tag should be nested inside another tag

// prompt
// construct a dictionary that contains attributes of svg elements for the given topic
// topic : Explain the structure of a Database system
// no tag should be nested inside another tag
// for example, this dictionary contains data to display a circle , a rectangle and a line that connects the edge of the circle with the rectangle

const data = {
  baseRect: {
    shape: "rect",
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    fill: "lightblue",
  },
  topRectangle: {
    shape: "rect",
    x: 200,
    y: 10,
    width: 100,
    height: 100,
    fill: "darkblue",
  },
  bottomCircle: {
    shape: "circle",
    cx: 200 + 100 / 2,
    cy: 300,
    r: 60,
    fill: "lightgreen",
  },
  connectLine: {
    shape: "line",
    x1: 200 + 100 / 2,
    y1: 110,
    x2: 200 + 100 / 2,
    y2: 240,
    stroke: "black",
    strokeWidth: "2",
  },
  bottomCircleText: {
    shape: "text",
    value: "Bottom Circle",
    x: 200 + 100 / 2,
    y: 300,
    fill: "black",
    "text-anchor": "middle",
  },
  topRectangleText: {
    shape: "text",
    value: "Top Rectangle",
    x: 200 + 100 / 2,
    y: 60,
    fill: "black",
    "text-anchor": "middle",
  },
};

// var line = svg.append("line")
// .attr("x1",50)
// .attr("y1",10)
// .attr("x2",200)
// .attr("y2",50)
// .attr("stroke","red")
// .attr("stroke-width",2)
// .attr("marker-end","url(#arrow)");

//FIRST TRY
// const data = {
//   baseRect: {
//     shape: "rect",
//     x: 0,
//     y: 0,
//     width: 600,
//     height: 600,
//     fill: "lightblue",
//   },
//   databaseRect: {
//     shape: "rect",
//     x: 150,
//     y: 50,
//     width: 300,
//     height: 100,
//     fill: "teal",
//   },
//   databaseText: {
//     shape: "text",
//     value: "Database",
//     x: 300,
//     y: 100,
//     fill: "white",
//     "text-anchor": "middle",
//   },
//   userRect: {
//     shape: "rect",
//     x: 50,
//     y: 200,
//     width: 200,
//     height: 100,
//     fill: "lightgreen",
//   },
//   userText: {
//     shape: "text",
//     value: "User",
//     x: 150,
//     y: 250,
//     fill: "black",
//     "text-anchor": "middle",
//   },
//   queryRect: {
//     shape: "rect",
//     x: 350,
//     y: 200,
//     width: 200,
//     height: 100,
//     fill: "lightgreen",
//   },
//   queryText: {
//     shape: "text",
//     value: "Query",
//     x: 450,
//     y: 250,
//     fill: "black",
//     "text-anchor": "middle",
//   },
//   userLine: {
//     shape: "line",
//     x1: 150,
//     y1: 150,
//     x2: 150,
//     y2: 200,
//     stroke: "black",
//     strokeWidth: "2",
//   },
//   queryLine: {
//     shape: "line",
//     x1: 450,
//     y1: 150,
//     x2: 450,
//     y2: 200,
//     stroke: "black",
//     strokeWidth: "2",
//   },
//   tableRect: {
//     shape: "rect",
//     x: 200,
//     y: 350,
//     width: 200,
//     height: 100,
//     fill: "orange",
//   },
//   tableText: {
//     shape: "text",
//     value: "Table",
//     x: 300,
//     y: 400,
//     fill: "black",
//     "text-anchor": "middle",
//   },
//   databaseLine: {
//     shape: "line",
//     x1: 300,
//     y1: 150,
//     x2: 300,
//     y2: 350,
//     stroke: "black",
//     strokeWidth: "2",
//   },
//   tableLine: {
//     shape: "line",
//     x1: 300,
//     y1: 450,
//     x2: 300,
//     y2: 500,
//     stroke: "black",
//     strokeWidth: "2",
//   },
//   recordsCircle: {
//     shape: "circle",
//     cx: 200,
//     cy: 550,
//     r: 40,
//     fill: "purple",
//   },
//   recordsText: {
//     shape: "text",
//     value: "Records",
//     x: 200,
//     y: 600,
//     fill: "black",
//     "text-anchor": "middle",
//   },
// };

// useEffect(() => {
//   const svg = select(anchorRef.current);
//   for (let element in data) {
//     let sym = svg.append(data[element]["shape"]);
//     let isText = false;
//     for (let attribute in data[element]) {
//       if (data[element][attribute] == "text") {
//         isText = true;
//         continue;
//       }
//       if (attribute == "shape") continue;
//       if (isText && attribute == "value") {
//         sym.text(data[element][attribute]);
//         continue;
//       }
//       sym.attr(attribute, data[element][attribute]);
//     }
//   }
// }, []);

// return <svg ref={anchorRef} width="1000" height="1000"></svg>;
// };
// export default SvgBackground;

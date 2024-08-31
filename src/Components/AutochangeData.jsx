import React from "react";
import "../css/Autochange.css";
import img1 from "../images/npdejsImg.jpg";
import img2 from "../images/jsImg.jpg";
import img3 from "../images/reactImg.jpg";

function AutochangeData() {
  return (
    <div id="textchange">
      <section class="cd-intro">
        <h1 class="cd-headline clip is-full-width">
          <span class="cd-words-wrapper">
            <b
              class="is-visible"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <img
                src={img1}
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
                  // backgroundColor: "red",
                  width: "100px",
                  height: "100px",
                }}
              />
              <span
                style={{
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "wheat",
                  marginLeft: "10px",
                }}
              >
                node js
              </span>
            </b>
            <b>
              <img
                src={img2}
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
                  width: "100px",
                  height: "100px",
                }}
              />

              <span
                style={{
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "wheat",
                  marginLeft: "10px",
                }}
              >
                Js
              </span>
            </b>
            <b>
              <img
                src={img3}
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
                  width: "100px",
                  height: "100px",
                }}
              />

              <span
                style={{
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "wheat",
                  marginLeft: "10px",
                }}
              >
                React Js
              </span>
            </b>
          </span>
        </h1>
      </section>
    </div>
  );
}

export default AutochangeData;

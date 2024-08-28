import React from "react";
import "../css/Autochange.css";

function AutochangeData() {
  return (
    <div id="textchange">
      <section class="cd-intro">
        <h1 class="cd-headline clip is-full-width">
          <span
            id="head"
            style={{
              fontFamily: "Matematica, sans-serif", // Apply the Matematica font
            }}
          >
            Hi , I am Suseentheran
          </span>
          <span class="cd-words-wrapper">
            <b
              class="is-visible"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <img
                src="https://i.imgur.com/h7tFlwr.png"
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
                  // backgroundColor: "red",
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
                Squarespace
              </span>
            </b>
            <b>
              <img
                src="https://i.imgur.com/U4ubCte.png"
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
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
                Shopify
              </span>
            </b>
            <b>
              <img
                src="https://i.imgur.com/ge59aPV.png"
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "black",
                  padding: "5px",
                  borderRadius: "10px",
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
                Wix
              </span>
            </b>
          </span>
        </h1>
      </section>
    </div>
  );
}

export default AutochangeData;

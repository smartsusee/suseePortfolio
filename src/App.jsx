import React, { useRef, useState } from "react";
import "./Components/main.css";
import { useEffect } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Road from "./Components/Road";
import AutochangeData from "./Components/AutochangeData";
function App() {
  const showNav = useRef(null);
  const [ref, setref] = useState(false);

  useEffect(() => {
    $(".navTrigger").click(function () {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
  }, [ref]);
  const handle = () => {
    setref(!ref);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav class="nav">
        <div>
          <div class="logo">
            <a href="#">Your Logo</a>
          </div>
          <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    navigate("/purchase");
                  }}
                >
                  purchase
                </a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <span class="navTrigger" onClick={handle}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </nav>
      <section class="home">
        <div
          className="text-white"
          style={{
            color: "white",
            width: "100%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <div class="hi"></div>
          <AutochangeData />
          {/* <h1> Hi , I am Suseentheran </h1> */}
          <div class="hi"></div>
        </div>
      </section>
      <BasicExample />
      <Road />
    </>
  );
}

function BasicExample() {
  return (
    <div id="div" data-aos="fade-up">
      <section class="container">
        <div
          class="card"
          data-aos="flip-up"
          data-aos-delay="150"
          data-aos-duration="5000"
        >
          <div class="card-image">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
              alt="card image"
            />
          </div>
          <div class="content">
            <h3>Frontend Developer</h3>
            <p>HTML|CSS|JS</p>
          </div>
          <div class="icons">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="card image"
            />
          </div>
          <div class="content">
            <h3>Data Base</h3>
            <p>SEO|Media|MongooDB</p>
          </div>
          <div class="icons">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        <div
          class="card"
          data-aos="flip-up"
          data-aos-delay="150"
          data-aos-duration="5000"
        >
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="card image"
            />
          </div>
          <div class="content">
            <h3>Backend Developer</h3>
            <p>node js</p>
          </div>
          <div class="icons">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

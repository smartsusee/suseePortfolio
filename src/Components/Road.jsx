import React from "react";
import "../css/road.css";
import img1 from "../images/Screenshot 2024-08-13 134437.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Road() {
  return (
    <>
      <div id="Road">
        <div class="planet"></div>
        <div class="starfield">
          <div class="star-layer" style={{ "--i": 1 }}></div>
          <div class="star-layer" style={{ "--i": 2 }}></div>
          <div class="star-layer" style={{ "--i": 3 }}></div>
        </div>
        <div class="road"></div>

        <section class="container">
          <div
            class="card"
            data-aos="flip-up"
            data-aos-delay="150"
            data-aos-duration="5000"
          >
            <div>i am worked this project</div>
            <br />
            {/* <img
              style={{ width: "200px" }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="card image"
            /> */}

            <img
              src={img1}
              alt=""
              width={"250px"}
              style={{ borderRadius: "30px" }}
            />

            {/* <div class="content">
              <h3>Backend Developer</h3>
              <p>node js</p>
            </div> */}
            <div class="icons">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </div>
          </div>

          {/* <div class="card">
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
          </div> */}

          <div
            class="card"
            data-aos="flip-up"
            data-aos-delay="150"
            data-aos-duration="5000"
          >
            <div>i am worked this project</div>
            <br />
            {/* <img
              style={{ width: "200px" }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="card image"
            /> */}

            <img
              src={img1}
              alt=""
              width={"250px"}
              style={{ borderRadius: "30px" }}
            />

            {/* <div class="content">
              <h3>Backend Developer</h3>
              <p>node js</p>
            </div> */}
            <div class="icons">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Road;

import React from "react";
import "../css/road.css";
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
    </>
  );
}

export default Road;

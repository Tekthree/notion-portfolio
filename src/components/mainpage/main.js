import React from "react";
import "./main.scss";

export default function main() {
  return (
    <div>
      <section className="section">
        <div className="hero-top-pad">
          <div className="hero-image" alt="hero"></div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid">
            <div className="grid-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Pudantium molestias eos{" "}
              </p>
            </div>
            <div className="grid-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius seudantium molestias eos{" "}
              </p>
            </div>
            <div className="grid-item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius se laudantium molestias eos{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex-row space-between copy-two">
            <div className="max-width">
              <h4>
                Design <span className="small-text">and</span> Development
              </h4>
            </div>
            <div>
              <div>
                <h5>My Mom say's Hi</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

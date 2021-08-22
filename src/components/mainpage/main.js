import React from "react";
import "./main.scss";

export default function main() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-image" alt="hero"></div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex-row space-between">
            <div className="max-width">
              <h4>
                Design <span className="small-text">and</span> Development
              </h4>
            </div>
            <div>
            <div className="">
              <h5>
                My Mom say's Hi
              </h5>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";

export default function Main() {
  const [heading, setHeading] = useState("");



  useEffect(() => {
   
      .then((res) => {
        const jwt = res.__raw;
        const config2 = {
          headers: { Authorization: `Bearer ${jwt}` },
          method: "get",
          baseURL: process.env.REACT_APP_SERVER,
          url: "api/v2/bounties",
        };
        axios(config2)
          // this is where we can make a request to GET bounty list
          .then(function (response) {
            let axiosResults = response.data;
            setFormData([...axiosResults]);
          })
          .catch(function (err) {
            console.error(err);
          });
      })
      .catch(function (err) {
        console.error(err);
      });


  },[]);

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

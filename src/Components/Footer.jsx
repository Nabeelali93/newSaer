import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "../Utils/hero.scss";




function Footer() {
  return (
    <div className="overflow-hidden w-full">
      <div className="bg-[#06335D] flex md:flex-row flex-col mx-auto items-center md:justify-evenly p-3">
        <div>
          <h1 className="text-white font-bold text-xl md:text-2xl uppercase">
            Subscribe To get updated
          </h1>
          <p className="text-white text-[10px] md:text-sm">
            Stay up to date with the latest news, announcements and articles.
          </p>
        </div>

        <div className="my-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="placeholder:text-white placeholder:text-sm outline-none placeholder:px-3  md:w-72 text-white border-2 border-white bg-transparent rounded-md p-0.5 md:p-2"
            name=""
            id=""
          />

          <button className="bg-white text-[#06335D] mx-1 md:mx-5 md:text-base text-xs p-2 rounded-md">
            Subscribe Now
          </button>
        </div>
      </div>

      <footer class="text-white bg-[#09559B] body-font">
        <div class="container px-3 py-10   mx-auto flex justify-center  md:flex-row   flex-col">
          <div class="md:w-[50%] w-full ">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
              <h1 className=" text-base md:text-xl font-bold">
                Saer.pk <br />
                <p className="text-xs md:text-sm font-normal">
                  By saer karo Travels and tours (smc pvt limited.)
                </p>
              </h1>
            </div>

            <p class="mt-2 text-xs  md:text-[13px] text-white">
              Saer.pk streamlines Umrah booking with ease, local expertise, and{" "}
              <br className="md:block hidden" />
              exclusive deals for a hassle-free spiritual journey in Pakistan.
            </p>

            <div className="py-3 flex gap-3">
              <Icon icon="ic:baseline-facebook" width="28" height="28" />
              <Icon icon="mdi:instagram" width="28" height="28" />
              <Icon icon="formkit:twitter" width="28" height="28" />
            </div>
          </div>

          <div className="md:w-[50%] md:ml-5   w-full ">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <h1 className="md:text-xl text-lg">Useful Links</h1>
                <ul className="leading-loose md:text-base text-sm">
                  <Link to={"privacypolicy"}><li className="padding">Privacy policy</li></Link>
                  <Link to={"termsconditions"}><li className="padding">Term & Conditions</li></Link>
                  <Link to={"/helpcenter"}><li className="padding">Contact Us</li></Link>
                  <Link to={"/aboutus"}><li className="padding">About Us</li></Link>

                </ul>
              </div> 

              <div>
                <h1 className="md:text-xl text-lg">Services</h1>
                <ul className="leading-loose md:text-base text-sm">

<Link to={{ pathname: "/", search: "0" }}><li className="padding">Umrah Packages</li></Link>
<Link to={{ pathname: "/", search: "1" }}><li className="padding">Flights</li></Link>
<Link to={{ pathname: "/", search: "2" }}><li className="padding">Hotel</li></Link>
<Link to={{ pathname: "/", search: "3" }}><li className="padding">Insurance</li></Link>

                </ul>
              </div>

              <div>
                <h1 className="md:text-xl text-lg">More</h1>
                <ul className="leading-loose md:text-base text-sm">

                <Link to={{ pathname: "/", search: "4" }}><li className="padding">Visa</li></Link>
                <Link to={{ pathname: "/", search: "5" }}><li className="padding">Trips</li></Link>


               
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="bg-[#09559B]">
          <div class=" py-4">
            <p class="text-white  text-sm text-center ">
              © 2024 Saer.pk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

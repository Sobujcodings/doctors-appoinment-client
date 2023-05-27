import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryBtn from "../../../Componants/PrimaryBtn/PrimaryBtn";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import './Banner.css'

const Banner = () => {
  return (
    <>
      <div className="hero h-3/5" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse px-14 py-28">
          <img
            src={chair}
            alt="dental chair"
            className="rounded-lg shadow-2xl lg:w-1/2"
          />
          <div>
            <h1 className="text-4xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={"/appoinment"}>
              <PrimaryBtn>Get Started</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>

      {/* <p className="text-center  bannerWidth text-red-500 mt-6 py-2 border mx-auto">Your New Smile Starts Here</p> */}
      <Marquee className="bannerWidth">
      <p className="text-center text-cyan-500 mt-6 py-2 ">Holy Gental Dental, Your New Smile Starts Here &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp; &ensp; &ensp; &ensp; </p>
      </Marquee>
    </>
  );
};

export default Banner;

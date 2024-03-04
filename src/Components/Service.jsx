import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import time from "../assets/time.png";
import rocket from "../assets/rocket.png";
import base from "../assets/base.png";

function Service() {
  const data = [
    {
      img: rocket,
      desc: "SwiftOps: Elevating Your Experience with Rapid Service Excellence.",
    },
    {
      img: time,
      desc: "RefundSwift: Unmatched Service Delivery with 48-Hour Guarantee.",
    },
    {
      img: base,
      desc: "ProcessEase: Streamlined, Effortless, Every Transaction Simplified.",
    },
  ];
  const [autoplayMobile, setAutoplayMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is less than 768px (mobile breakpoint)
      if (window.innerWidth < 768) {
        setAutoplayMobile(true); // Enable autoplay on mobile
      } else {
        setAutoplayMobile(false); // Disable autoplay on desktop and tablet
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set autoplay based on initial screen width
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Slides desktop par
    slidesToScroll: true,
    autoplay: autoplayMobile, // Enable autoplay based on screen width
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Slides tablet par
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Slides mobile par
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <hr />

      <div className="text-center p-4 flex justify-center py-10 w-[100%]">
        <h1 className="md:text-2xl text-xs sm:text-xl text-center font-bold">
          Why should you choose to utilize our services?
          <p className="text-[10px] md:text-sm py-3 text-center font-normal md:px-52 ">
            Explore the convenience of Saer.pk, Pakistan's first online platform
            for hassle-free Umrah packages. Get your ideal Umrah package in just
            seconds with simplicity at your fingertips. Experience swift and
            effortless booking for your spiritual journey!
          </p>
        </h1>
      </div>

      <section className="body-font">
        <div className="px-5">
          <Slider {...settings}> {/* Wrap with Slider component */}
            {data.map((v, i) => (
              <div key={i} className="px-4 py-6 text-center  rounded-lg">
                <img src={v.img} className="mx-auto py-2" alt="" />
                <p className="leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Service;

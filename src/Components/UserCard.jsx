import { Icon } from "@iconify/react";
import React,{useState,useEffect} from "react";
import Slider from "react-slick";

function UserCard() {
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
    slidesToShow: 4, // Slides desktop par
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

  const data = [
    {
      review:
        "Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    {
      review:
        "Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    {
      review:
        "Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    {
      review:
        "Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    
  ];

  return (
    <div className="overflow-hidden">
      <hr />

      <h1 className="md:text-2xl text-lg font-bold py-5 text-center">
        What Our Users Are Saying
      </h1>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-10 mx-auto">
          <Slider {...settings}> {/* Wrap with Slider component */}
            {data.map((v, i) => (
              <div
                key={i}
                className="lg:w-[22%] md:w-[47%] w-full shadow-lg  lg:mb-0 mb-6 p-4"
              >
                <div className=" text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full mx-auto border-2 border-gray-200 bg-gray-100"
                    src="https://www.shareicon.net/download/2016/05/24/770139_man_512x512.png"
                  />
                  <p className="leading-relaxed">{v.review} </p>
                  <div className="flex justify-center py-5 text-yellow-400">
                    <Icon icon="material-symbols:star" width="32" height="32" />
                    <Icon icon="material-symbols:star" width="32" height="32" />
                    <Icon icon="material-symbols:star" width="32" height="32" />
                    <Icon icon="material-symbols:star" width="32" height="32" />
                    <Icon icon="material-symbols:star" width="32" height="32" />
                  </div>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>

                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {v.name}
                  </h2>
                  <p className="text-gray-500">{v.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default UserCard;

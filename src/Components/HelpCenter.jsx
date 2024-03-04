import React, { useState } from "react";
import { Icon } from "@iconify/react";

function HelpCenter() {
  const data = [
    {
      name: "Email Us",
      text: "Support@saer.pk",
      text2: "Ahsan@saer.pk",
      icon: "ic:outline-email",
    },
    {
      name: "Visit Us",
      text: "1st floor,Mall mainBoulevard,Gulberg lll,Lahore",
      icon: "ep:location",
    },
    {
      name: "Live Chat",
      text: "+923000709017",
      text2: "042-111-Saer.pk",
      icon: "tabler:message",
    },
    {
      name: "Call Us",
      text: "+923000709017",
      text2: "042-111-Saer.pk",
      icon: "material-symbols:call",
    },
  ];

  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: "Can I customize my Umrah package?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      name: "What is included in a typical Umrah package?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      name: "How do I choose the right Umrah package for me?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },

    {
      id: 4,
      name: "What is the best time to book an Umrah package?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 5,
      name: "What documents are required for Umrah?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },

    {
      id: 6,
      name: "Are there any age restrictions for Umrah?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 7,
      name: "What types of Umrah packages are available?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : question
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex justify-center ">
          <h1 className=" text-2xl md:text-6xl font-medium p-12">
            HELP CENTER
          </h1>
        </div>

        <div className="flex items-center  justify-center ">
          <div className="flex  rounded-lg border-2 bg-white h-12 md:h-12 md:ml-5 md:w-[35%] w-[75%]">
            <input
              type="text"
              className="px-4 py-2  placeholder:sm:text-lg placeholder:text-xs  rounded-lg outline-none  w-[100%]"
              placeholder="Any search question..."
            />
            <button className="flex items-center justify-center px-4 border-l">
              <Icon className="h-6 w-6" icon="radix-icons:magnifying-glass" />
            </button>
          </div>
        </div>
      </div>

      {/* Qustions work start */}

      <div className="mx-auto w-[77%] mt-10 border-2 border-solid bg-white">
        {questions.map((question) => (
          <div key={question.id} className="cursor-pointer">
            <div onClick={() => toggleQuestion(question.id)} className="flex  justify-between items-center">
              <p className="p-5 ml-2 md:text-[20px] text-[13px] " onClick={() => toggleQuestion(question.id)}>
                {question.name}
              </p>
              <div>
                <Icon
                  icon={
                    question.isOpen
                      ? "line-md:chevron-up"
                      : "line-md:chevron-down"
                  }
                  className="mr-5"
                  onClick={() => toggleQuestion(question.id)}
                />
              </div>
            </div>
            {question.isOpen && (
              <>
                <p className="mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
                  {question.answer}
                </p>
                <hr className="border-gray-400" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Qustions work  and */}

      <div className="p-5 mx-auto cursor-pointer w-[80%]">
        <div className="flex  flex-wrap  gap-5   ">
          {/* Large screens (lg): 4 columns */}

          {data.map((v, i) => (
            <>
              <div
                key={i}
                className="lg:w-[23%] md:w-1/3 sm:w-1/2 border-2 w-full rounded-md "
              >
                <div className="flex  flex-row bg-white rounded-lg">
                  <div className="p-3 ">
                    <div className="bg-[#1278F0]  w-[35px] h-[35px] rounded-lg flex justify-center items-center ">
                      <Icon
                        icon={v.icon}
                        color="white"
                        height={"20"}
                        width={"20"}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="p-1">
                      <h1 className="text-[17px] text-[#699FC9]">{v.name}</h1>
                      <p className="text-[10px] text-[#699FC9]">{v.text}</p>
                      <p className="text-[10px] text-[#699FC9]">{v.text2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default HelpCenter;

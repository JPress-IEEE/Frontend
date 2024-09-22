import { Link } from "react-router-dom";

const TaskerProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 container px-4 md:px-8 lg:px-10 my-20">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2 rounded-[10px] shadow-md shadow-[#BBBBBB40]">
          <img src="../../../public/img/Rectangle 124.png" alt="" />
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] text-[#003E7E] font-semibold">
              John Wick
            </h3>
            <div className="flex gap-2">
              <img
                src="../../../public/img/material-symbols_star.png"
                alt=""
                className="text-[#003E7E]"
              />
              <span>5.0</span>
              <span>( 1622 reviews )</span>
            </div>
            <span>2015 overall tasks</span>
          </div>
        </div>
        <div className="p-5 rounded-[10px] shadow-md shadow-[#BBBBBB40]">
          <div className="pb-5 mb-5 border-b-[1px] border-gray-400">
            <h4 className="mb-2 text-[20px] text-[#003E7E] font-semibold">
              About me{" "}
            </h4>
            <p className="text-[#939DA8] font-semibold">
              Hi, I’m [Tasker’s Name], a [Tasker's field] professional with [X
              years] of experience. Ready to help with your tasks efficiently
              and reliably....
            </p>
            <span className="text-[14px] text-[#F26A27] font-semibold">
              Read more
            </span>
          </div>
          <div>
            <h4 className="mb-2 text-[20px] text-[#003E7E] font-semibold">
              Working in Cairo
            </h4>
            <div className="flex items-center gap-2 text-[#939DA8]">
              <img
                src="../../../public/img/material-symbols_date-range.png"
                alt=""
                className="text-[#003E7E]"
              />
              <span>Working in Cairo </span>
            </div>
            <div className="flex items-center gap-2 text-[#939DA8]">
              <img
                src="../../../public/img/material-symbols_date-range.png"
                alt=""
                className="text-[#003E7E]"
              />
              <span>Tasker since 2020 </span>
            </div>
            <div className="flex items-center gap-2 text-[#939DA8]">
              <img
                src="../../../public/img/mdi_speak-outline.png"
                alt=""
                className="text-[#003E7E]"
              />
              <span>Speaks : arabic , English</span>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-[10px] shadow-md shadow-[#BBBBBB40]">
          <h3 className="mb-7 text-[24px] text-[#003E7E] font-semibold">
            My Skills
          </h3>
          <div className="flex flex-col gap-7">
            <span className="text-[#939DA8]">
              Appliance Installation & Repairs
            </span>
            <span className="text-[#939DA8]">Furniture Assembly</span>
            <span className="text-[#939DA8]">Minor Home Repairs</span>
            <span className="text-[#939DA8]">Wall Repair</span>
          </div>
        </div>
      </div>
      <div className="flex-[2] p-5 rounded-[10px] shadow-md shadow-[#BBBBBB40]">
        <div className="flex items-center justify-between mb-4 gap-5">
          <h3 className="text-[24px] text-[#003E7E] font-semibold">
            Furniture Assembly for{" "}
            <span className="text-[#F26A27]">$75.36</span>
          </h3>
          <Link
            to="/payment"
            className="text-[16px] md:text-[20px] text-nowrap font-semibold border-none bg-[#F26A27] py-[8px] px-[16px] md:py-[16px] md:px-[32px] text-white rounded-xl"
          >
            Select & Continue
          </Link>
        </div>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <img
              src="../../../public/img/material-symbols_star.png"
              alt=""
              className="text-[#003E7E]"
            />

            <span>5.0</span>
            <span>(656 reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../../../public/img/gg_check-o.png"
              alt=""
              className="text-[#003E7E]"
            />

            <span>1531</span>
            <span>Furniture Assembly tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../../../public/img/tabler_clock-hour-5.png"
              alt=""
              className="text-[#003E7E]"
            />

            <span>2</span>
            <span>our minimum required</span>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
            Skills and Experience
          </h3>
          <p className="text-[#939DA8]">
            Experienced in furniture assembly, wall repairs, and general
            handyman tasks. Over [X years] of hands-on experience, ensuring
            reliable and efficient service for all your home improvement needs.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
            Photos
          </h3>
          <div className="flex items-center flex-wrap gap-4">
            <img
              src="../../../public/img/istockphoto-1300888648-612x612 6.png"
              alt=""
            />
            <img
              src="../../../public/img/istockphoto-1300888648-612x612 6.png"
              alt=""
            />
            <img
              src="../../../public/img/istockphoto-1300888648-612x612 6.png"
              alt=""
            />
            <img
              src="../../../public/img/istockphoto-1300888648-612x612 6.png"
              alt=""
            />
            <img
              src="../../../public/img/istockphoto-1300888648-612x612 6.png"
              alt=""
            />
            <img src="../../../public/img/Group 59435.png" alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
            Reviews for Furniture Assembly(50)
          </h3>
          <div className="mb-4">
            <div className="flex items-center gap-5 mb-4">
              <img
                src="../../../public/img/Rectangle 124.png"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
                  Omar M.
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#939DA8] font-medium mb-2">
              [Tasker's Name] did a fantastic job! Quick, professional, and the
              results were perfect. Highly recommend!
            </p>
            <span className="text-[#003E7E] font-semibold">
              September 9, 2024
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-5 mb-4">
              <img
                src="../../../public/img/Rectangle 124.png"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
                  Omar M.
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#939DA8] font-medium mb-2">
              [Tasker's Name] did a fantastic job! Quick, professional, and the
              results were perfect. Highly recommend!
            </p>
            <span className="text-[#003E7E] font-semibold">
              September 9, 2024
            </span>
          </div>
          <div>
            <div className="flex items-center gap-5 mb-4">
              <img
                src="../../../public/img/Rectangle 124.png"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div>
                <h3 className="text-[24px] text-[#003E7E] font-semibold mb-4">
                  Omar M.
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                  <img
                    src="../../../public/img/material-symbols_star.png"
                    alt=""
                    className="text-[#003E7E]"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#939DA8] font-medium mb-2">
              [Tasker's Name] did a fantastic job! Quick, professional, and the
              results were perfect. Highly recommend!
            </p>
            <span className="text-[#003E7E] font-semibold">
              September 9, 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskerProfile;

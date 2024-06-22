import React from "react";

function About() {
  return (
    <div className="w-full  bg-[#252e53] text-gray-600" name="about">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 text-[#f3a712] ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          {/* <div></div> */}
        </div>
        <div className="max-w-[1000px] w-full h-full grid sm:grid-cols-2 gap-8 text-[#f0cea0] px-4">
          <div className="sm:text-right font-bold text-4xl">
            <p>Hi. I'm Muskan, nice to meet you. Please take a look around.</p>
          </div>
          <div className="mb-40">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae deserunt sapiente quia, facere illo. Sequi deleniti voluptas fugit suscipit. Earum consectetur commodi ut iste facere quis natus, architecto mollitia facilis in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";

// function About() {
//   return (
//     <div className="w-full h-screen bg-[#252e53] text-gray-600" name="about">
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//           <div className="sm:text-right pb-8 pl-4 text-[#f3a712] ">
//             <p className="text-4xl font-bold inline border-b-4 border-pink-600">
//               About
//             </p>
//           </div>
//           {/* <div></div> */}
//         </div>
//         <div className="max-w-[1000px] w-full h-full grid sm:grid-cols-2 gap-8 text-[#f0cea0] px-4">
//           <div className="sm:text-right font-bold text-4xl">
//             <p>Hi. I'm Muskan, nice to meet you. Please take a look around.</p>
//           </div>
//           <div className="mb-40">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae deserunt sapiente quia, facere illo. Sequi deleniti voluptas fugit suscipit. Earum consectetur commodi ut iste facere quis natus, architecto mollitia facilis in.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Muskan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
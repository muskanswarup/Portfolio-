import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home(){
    return(
        <div className='w-full h-screen bg-[#252e53]' name='home'>
            {/* Container */}
            <div className='max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full'>
                <p className='text-[#db2b39]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl text-[#f3a712]'>Muskan Swarup</h1>
                <h2 className='text-4xl sm:text-7xl text-[#f0cea0]'>I'm a Full Stack Developer.</h2>
                <p className='py-4 max-w-[700px] text-[#d0ac63]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur libero dolorum, facere quibusdam necessitatibus debitis incidunt saepe. Qui, ex esse! Ut quia ducimus quod, minima reprehenderit modi ex error quaerat! Minus.</p>
                <div>
                    <button className='text-white group border-2  px-4 py-2 flex items-center hover:bg-[#db2b39]           hover:border-[#db2b39]'>View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react';

function Contact(){
    return(
        <div name='contact' className='w-full h-screen flex bg-[#252e53] p-4 text-white justify-center items-center pt-[150px]'>
            <form method='POST' action="https://getform.io/f/pbygnrkb"  className='flex flex-col max-w-[600px] w-full h-full text-black'>
                <div className='pb-8'>
                    {/* <p className='text inline font-bold border-b-4 border-pink-600 text-gray-300'>
                        Contact Me
                    </p> */}
                     <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact Me
            </p>
                    <p className='py-4 text-gray-300'>Submit the form below or shoot me an email - musk@mail.com</p>
                </div>

                <input type="text" placeholder='Enter your name' name='name' className='p-4'/>
                <input type="email" name="email" placeholder='Enter your email' className='my-4 p-4'/>
                <textarea name="message" rows={10} placeholder='Enter your message' className='p-4'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex duration-300 items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact;
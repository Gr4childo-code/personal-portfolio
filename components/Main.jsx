import React from 'react';
import { FaGithub, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
	return (
		<div className='h-screen w-full text-center'>
			<div className='mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2'>
				<div>
					<p className='text-sm uppercase tracking-widest text-gray-600'>
						LET`S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I`m <span className='text-[#5651e5]'>Daniil</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
					<p className='m-auto max-w-[70%] py-4 font-[500] text-gray-600'>
						I`m a front-end web developer specializing in building (and occasionally disigning )
						exceptional digital experiences. I`m focused on building responsive front-end web
						applications while learning back-end technlogoies.
					</p>
					<div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
						<div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-100 ease-in hover:scale-150 '>
							<FaTelegramPlane />
						</div>
						<div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
							<FaVk />
						</div>
						<div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
							<FaGithub />
						</div>
						<div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
							<AiOutlineMail />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

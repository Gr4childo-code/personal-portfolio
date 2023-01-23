import React from 'react';

const About = () => {
	return (
		<div id='about' className='flex w-full items-center p-2 py-16 md:h-screen'>
			<div className='m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid'>
				<div className='col-span-2'>
					<p className=' text-xl uppercase tracking-widest text-[#5651e5]'>About</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>// I am not your normal developer</p>
					<p className='py-2 text-black'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aut quas nesciunt
						autem aspernatur numquam aliquid animi, expedita labore accusantium, possimus nobis!
						Laborum magni necessitatibus itaque sequi error magnam ab?
					</p>
					<p className='py-2 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ea nihil iste eos
						obcaecati nostrum culpa reiciendis error natus nobis alias quis facere possimus in
						provident debitis, deleniti enim minima.
					</p>
					<p className='cursor-pointer py-2 text-gray-600 underline'>
						Check out some of my latest projects.
					</p>
				</div>
				<div className='m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105'>
					<img
						className='rounded-xl'
						src='https://images.unsplash.com/photo-1669985457873-0c540a1d832a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80'
						alt='/'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;

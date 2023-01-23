import Image from 'next/image';
import React from 'react';

const Skills = () => {
	return (
		<div id='skills' className='w-full p-2 lg:h-screen'>
			<div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>Skills</p>
				<h2 className='py-4'>What I can Do</h2>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{/*  */}
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/html.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/css.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/javascript.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/node.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Node.JS</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/react.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React.JS</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/mongo.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MONGO</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/nextjs.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Next.JS</h3>
							</div>
						</div>
					</div>
					<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
						<div className='grid grid-cols-2 items-center justify-center gap-4'>
							<div className='m-auto'>
								<Image src='/assets/skills/github1.png' width='64' height='64' alt='/' />
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		</div>
	);
};

export default Skills;

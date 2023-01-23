import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='m-auto w-full max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>Contact</p>
				<h2 className='py-4'>Get in touch</h2>
				<div className='grid gap-8 lg:grid-cols-5'>
					{/* left */}
					<div className='col-span h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2'>
						<div className='h-full lg:p-4'>
							<div>
								<img
									className='rounded-xl duration-300 ease-in hover:scale-105'
									src='https://images.unsplash.com/photo-1665685153075-c3a2327378ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
									alt='/'
								/>
							</div>
							<div>
								<h2 className='py-2'>Name here</h2>
								<p>Front-end developer</p>
								<p className='py-4'>
									I`am available for freelance or full-time positios. Contact me and let`s talk
								</p>
							</div>
							<div>
								<p className='pt-8 uppercase'>Connect with me</p>
								<div>
									<div className='flex items-start justify-between py-4'>
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
					</div>
					{/* Right */}
					<div className='col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid w-full gap-4 py-2 md:grid-cols-2'>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>Name</label>
										<input className='flex rounded-lg border-2 border-gray-300 p-3' type='text' />
									</div>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>Phone number</label>
										<input className='flex rounded-lg border-2 border-gray-300 p-3' type='text' />
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Email</label>
									<input className='flex rounded-lg border-2 border-gray-300 p-3' type='email' />
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Subject</label>
									<input className='flex rounded-lg border-2 border-gray-300 p-3' type='text' />
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Message</label>

									<textarea
										rows={10}
										className='rounded-lg border-2 border-gray-300 p-3'
									></textarea>
								</div>
								<button className='mt-4 w-full p-4 text-gray-100'>Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-100 ease-in hover:scale-150 '>
							<HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;

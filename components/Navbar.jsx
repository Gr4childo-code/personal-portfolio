import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaTelegramPlane, FaVk } from 'react-icons/fa';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2923');
	const router = useRouter();

	useEffect(() => {
		if (router.asPath === '/property') {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={shadow ? 'fixed z-[100] h-20 w-full shadow-xl' : 'fixed z-[100] h-20 w-full '}
		>
			<div className='flex h-full w-full items-center justify-between px-2 2xl:px-16'>
				<Image src='/assets/navLogo.png' alt='/' width='80' height='50' />
				<div>
					<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='cursor-pointer md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div className={nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''}>
				<div
					className={
						nav
							? 'fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]'
							: 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image src='/assets/navLogo.png' alt='/' width={87} height={35} />
							<div
								onClick={handleNav}
								className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='my-4 border-b border-gray-300'>
							<p className='w-[85%] py-4 md:w-[90%]'>Let`s build something legendary together</p>
						</div>
					</div>
					<div className='flex-col py-4'>
						<ul className='uppercase'>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>Let`s Connect</p>
							<div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
								<div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-100 ease-in hover:scale-150 '>
									<FaTelegramPlane />
								</div>
								<div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
									<FaVk />
								</div>
								<div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
									<FaGithub />
								</div>
								<div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-100 ease-in  hover:scale-150 '>
									<AiOutlineMail />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

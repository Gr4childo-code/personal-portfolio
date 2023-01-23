import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/proj1.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
const property = () => {
	return (
		<div className='w-full'>
			<div className='relative h-[50vh] w-screen'>
				<div className='absolute top-0 left-0 z-10 h-[50vh] w-full bg-black/70' />
				<Image
					className='z-1 absolute'
					alt='/'
					fill
					style={{ objectFit: 'cover' }}
					src={propertyImg}
				/>
				;
				<div className='absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white'>
					<h2 className='py-2'>Property Finders</h2>
					<h3>React JS / Tailwind / Firebase</h3>
				</div>
			</div>

			<div className='mx-auto grid max-w-[1240px] gap-8 p-2 py-8 md:grid-cols-5'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app was built using React JS and is hosted on Firebase. Users are able to search
						properties based on an Address, City, or ZIP code to retrieve a list of active
						properties currently for sale. You will be able to view property information as well as
						the specific location of the property integrated with the Google Maps API. User
						authentication is available so you can signup and signin to your account with an email
						address in order to save your favorite properties. This is made possible with Zillow
						API.
					</p>
					<a href='https://github.com/fireclint/property-finder' target='_blank' rel='noreferrer'>
						<button className='mt-4 mr-8 px-8 py-2'>Code</button>
					</a>
					<a href='https://property-finder-development.web.app/' target='_blank' rel='noreferrer'>
						<button className='mt-4 px-8 py-2'>Demo</button>
					</a>
				</div>
				<div className='col-span-4 rounded-xl py-4 shadow-xl shadow-gray-400 md:col-span-1'>
					<div className='p-2'>
						<p className='pb-2 text-center font-bold'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Javascript
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Google API
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Zillow API
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='cursor-pointer underline'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default property;

import Image from 'next/image';
import Link from 'next/link';
const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
	return (
		<div className='group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r'>
			<Image src={backgroundImg} className='rounded-xl group-hover:opacity-10' alt='/' />
			<div className='absolute top-[50%] left-[50%] hidden translate-y-[-50%] translate-x-[-50%] group-hover:block'>
				<h3 className='text-center text-2xl tracking-wider text-white'>{title}</h3>
				<p className='pb4 pt-2 text-center text-white'>React js project</p>
				<Link href={projectUrl}>
					<p className='cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700'>
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;

import React from 'react';
import ProjectItem from './ProjectItem';
import propetyimg from '../public/assets/projects/proj1.jpg';

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='mx-auto max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
				<h2 className='py-4'>What i`have built</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					{/*  */}
					<ProjectItem title='Propert finder' backgroundImg={propetyimg} projectUrl='/property' />
					{/*  */}
				</div>
			</div>
		</div>
	);
};

export default Projects;

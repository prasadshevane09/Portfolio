
import React from "react";
import vpn from '../assets/vpn.png'
import zoom from '../assets/zoom.png'
import call from '../assets/call.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    const getProjectUrl = (title) => {
        if (title === 'Wanderlust') return "https://wanderlust-fwce.onrender.com/listings";
        return "#";
    };

    return (
        <div className="w-[350px] h-[500px] bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <a href={getProjectUrl(title)} className="h-[200px] overflow-hidden">
                <img 
                    className="w-full h-full rounded-t-lg object-cover transition-transform duration-300 hover:scale-110"
                    src={image} 
                    alt={title}
                    onError={(e) => {
                        console.error(`Failed to load image for ${title}`);
                        e.target.src = 'placeholder.png';
                    }}
                />
            </a>
            
            <div className="p-4 flex-grow">
                <a href="#">
                    <h5 className="text-xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm text-gray-300 dark:text-gray-400 mt-2">{description}</p>
            </div>

            <div className='m-4 flex justify-between items-center'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow px-3 py-1 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Wanderlust',
        description:'Wanderlust is an online marketplace connecting hosts and guests worldwide for short-term rentals. Hosts can earn money by renting out space in their homes or entire properties. Guests can often find cheaper, more home-like accommodations compared to hotels.',
        image: vpn,
        git:'https://github.com/prasadshevane09/Wanderlust',
        technologies:['MongoDb' ,'ExpressJS' , 'NodeJS']
    },
    {
        title:'Full Stack Trading Platform',
        description:'A site that lets users buy, sell. It features secure login and an dashboard for portfolio management. Users can view charts and monitor watchlists. Built with frontend, backend and API integrations for trading experience.',
        image: zoom,
        git:"https://github.com/prasadshevane09/Full-Stack-Trading-Platform",
        technologies:[ 'React JS', 'MongoDb']
    },
    {
        title:'Apna Video Call',
        description:'SnapShot is a stunning portfolio that I exclusively designed using React JS and tailwind CSS.This Project serves as a representation of a photographer’s work, highlighting their portfolio and services.',
        image: call,
        git:"https://github.com/prasadshevane09/video-conferencing-site",
        technologies:[ 'React JS', 'MongoDb', 'Node JS']
    }
]

export default Projects
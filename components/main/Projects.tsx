"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="flex flex-col flex-wrap gap-10 justify-center items-center">
            <div className=" w-[100%] flex flex-col md:flex-row gap-10 px-10 ">
                <ProjectCard
                    link="https://ai-mern-app.vercel.app/"
                    src="/ai_mern.png"
                    title="AI Powered Image Generation"
                    description= "Developed an AI Image Generator web application using React, Tailwind CSS, Node.js, Express, MongoDB, and Cloudinary, enabling users to generate custom images from text prompts.
                    Integrated advanced AI APIs for image generation, implemented community sharing, and download functionalities, enhancing user engagement and creativity."
                />
                <ProjectCard
                    link="https://crowdfunding-dapp-drab.vercel.app/"
                    src="/chainrise.png"
                    title="Crowdfunding Platform"
                    description="Developed the Front-End of this project using React.js, Tailwindcss.
                    Authorization & Verificatio with Supabase. Added attractive and fully functional Pages with optimized performance."
                />
                <ProjectCard
                    link="https://shortlyy-urlshortner.netlify.app/"
                    src="/shortly.png"
                    title="Shortly -URL Shortener"
                    description="Developed a URL shortener using React and Tailwind CSS to build an appealing UI. Integrated the
                    ‘Super url shortener’ API .
                    "
                />
                </div>    

                <div className="w-full flex flex-col md:flex-row gap-10 px-10 ">
                <ProjectCard
                    link="https://you-type.vercel.app/"
                    src="/typing.png"
                    title="Typing Speed Game"
                    description="Developed a user-friendly typing web application featuring real-time accuracy tracking, error counting, and
                    Typing Speed calculation functionalities using Reactjs, Tailwind CSS, Custom Hooks . Ensures a seamless
                    user experience.
                    "
                />
                <ProjectCard
                    link="https://github.com/Anshikaj69/Whatsapp_Cloud_API/tree/master"
                    src="/cloud_api.jpg"
                    title="Cloud API Chat Application"
                    description="MERN Stack Chat Application using Whatsapp Cloud API. 
                    Implemented Real time Messaging using Socket.io and Webhooks.
                    Ability to Send and receive Media Files."
                />
                <ProjectCard
                    link="https://task-manaement-application.netlify.app/"
                    src="/tasky.png"
                    title="Task Management Web Application"
                    description="Presenting my skills effectively by highlighting expertise in frontend development, Javascript, Bootstrap and
                    local storage."
                />
            </div>

            <div className="w-full flex flex-col md:flex-row gap-10 px-10 ">
                <ProjectCard
                    link="https://jobs-in-japan.vercel.app/"
                    src="/foundit.png"
                    title="Figma to Code"
                    description="Pixel perfect translation of figma design into code."
                />
                <ProjectCard
                    link="https://github.com/Anshikaj69/Contact_Manager_Backend"
                    src="/contact.png"
                    title="Contact Manager Backend"
                    description="Securely manage contacts with this Node.js and Express.js backend. Featuring user registration, verification, password hashing, JWT authentication, and MongoDB storage, it ensures data integrity and confidentiality via protected routes.
                    "
                />
                

            </div>
            </div>
        </div>
    );
};

export default Projects;
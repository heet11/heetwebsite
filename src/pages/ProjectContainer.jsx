import React from 'react';
import Project from './Project';
import './projectstyle.css' 

const projectData = [{
    name:"Project 1",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    Codesandbox:"https://www.linkedin.com/"
},
{
    name:"Guessing Game",
    description:"A Guessing Game Using Javascript",
    skills:['Javascript','CSS'],
    github:"https://github.com/",
    Codesandbox:"https://codesandbox.io/s/strange-maxwell-u1l119"
},
{
    name:"Project 3",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills: ['SASS','TypeScript','React'],
    github:"https://github.com/",
    Codesandbox:"https://www.linkedin.com/"
},
{
    name:"Project 4",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    Codesandbox:"https://www.linkedin.com/"
}
];

const ProjectContainer = () => {
    return (
        <div><h1>Projects</h1>
        <div className="projectContainer">
            
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
        </div>
    )
}

export default ProjectContainer
import React from 'react'

const Project = ({projectItem}) => {
    const {name, description, skills, github, Codesandbox} = projectItem;
    console.log(projectItem.skills);
    
    return (
        <div className="card">
            <h1>Projects</h1>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
                <a href={github} target={'_blank'}>Github</a>
            </span>            
            <span>
                
                <a href={Codesandbox} target={'_blank'}>Codesandbox</a>
            </span>
        </div>
    )
}

export default Project
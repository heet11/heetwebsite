import React from 'react'
import './skillstyle.css'

const Skill = () => {
   return (
    <div class='section-skills'>
      <h2 class="section__title">Skills</h2>
        <ul class="skills__list" >
          <li class="skills__list-item">HTML</li>
          <li class="skills__list-item">CSS</li>
          <li class="skills__list-item">C</li>
          <li class="skills__list-item">JavaScript</li>
          <li class="skills__list-item">Java</li>
          <li class="skills__list-item">React</li>
          <li class="skills__list-item">Python</li>
          <li class="skills__list-item">Git</li>
          <li class="skills__list-item">MongoDB</li>
          <li class="skills__list-item">MySql</li>
          <li class="skills__list-item">Google Cloud</li>
          <li class="skills__list-item">Bootsrtap</li>
        </ul>
        
     <div class="contact">
        <h2 class="section__title">Contact</h2>
        <a href="mailto:daveheet321@gmail.com">
          <span class="btn3">Email me</span>
        </a>
        <hr style={{marginTop: "140px" , color:"black"}}/>
        <h2 style={{marginTop: "10px"}} >Created By <u>Heet Dave.</u></h2>
      </div>
    </div>
   )


}
export default Skill
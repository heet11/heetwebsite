import React from 'react'
import './homepagestyle.css'

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Heet Dave.</span></h1>
        <h2>An Enthusiastic Computer Science Student.</h2>
        <p className='desc'>I am pursuing Bachlors of Engineering From Shree swaminaryan institute of technology. Here its a website about my professional work's that i have done , and have some Projects and contact details of mine,so you can contact me for any project or work :)  </p>
        <div>
          <a class="btn1" href="https://rajshekhar26.github.io/cleanfolio-minimal/">Resume</a>
          <a href="https://github.com/heet11" target="_blank">github</a>
          <a href="/priidjs" >Linkedin</a>
        </div>
      </div>
    </>
  )
}
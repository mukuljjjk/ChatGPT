


import React from 'react'
import "./research.css"
import  Article from "./article/Article"
import {one,two,three,four} from  "./imports"
function Research() {
  return (
    <div className='gpt3__research section__padding'>
      <div className='gpt3__research-heading'>
        <h1 className='gradient__text'>Related research</h1> 
        </div>
        
         <div className='gpt3__research-container'>
         <div className='gpt3__research-container_groupB'>
          <Article  imgURL={one} date="March 26, 2023" title="GPTs are GPTs: An early look at the labor market impact potential of large language models" />
          <Article  imgURL={two} date="Jul 25, 2022" title="A hazard analysis framework for code synthesis large language models" />
          <Article  imgURL={three} date="Jan 11, 2023" title="Forecasting potential misuses of language models for disinformation campaigns and how to reduce risk" />
          <Article  imgURL={four} date="Dec 16, 2022" title="Point-E: A system for generating 3D point clouds from complex prompts" />
         </div>
         </div>
        
    </div>
  )
}

export default Research

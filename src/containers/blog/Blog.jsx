import React from 'react'
import "./blog.css"
import  Article from "../../components/article/Article"
import {blog01,blog02,blog03,blog04,blog05} from  "./imports"
function Blog() {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1> 
        </div>
        <div className='gpt3__blog-container'>
         <div className='gpt3__blog-container'>
         <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date="March 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
         </div>
         <div className='gpt3__blog-container_groupB'>
          <Article  imgURL={blog02} date="March 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article  imgURL={blog03} date="March 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article  imgURL={blog04} date="March 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article  imgURL={blog05} date="March 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
         </div>
         </div>
        </div>
    </div>
  )
}

export default Blog


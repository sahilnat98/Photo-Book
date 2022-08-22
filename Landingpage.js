import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  return (
    <div className='mainc'>
      <div className='img1'>
        <img className='himage' width="600px" height="280px" src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'></img>
      </div>
      <div className='container'>
        <div className='main'>

        </div>

        <div className='pos'>

          <div className='en'>
            <h1 >Enter Your Post</h1>
          </div>
          <div>
            <Link to={"/PostView"}> <button className='bt' >Post</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage

import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <>

<div className='chan'>
      <div className='im1'>
        <img width="300px" height="100px" src='https://thumbs.dreamstime.com/b/instagram-141049465.jpg'></img>
      </div>

      <div >
      <Link to={"/Form"}><img className='im2' width="100px" height="100px"  src='https://icons-for-free.com/download-icon-add+photo+plus+upload+icon-1320184027779532643_512.png'></img></Link> 
      </div>
      <div >
        <img className='im3'  width="80px" height="60px" src='https://pngshare.com/wp-content/uploads/2021/06/Instagram-Heart-Emoji-29.png'></img>
      </div>
      <div >
      <Link to={"/"}>  <img className='im3'  width="90px" height="65px" src='https://static.thenounproject.com/png/1228438-200.png'></img></Link>
      </div>
     
    </div>
    </>

  )
}

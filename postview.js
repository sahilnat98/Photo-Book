import { useEffect, useState } from "react";
import "../PostView/postview2.css";
import "../Form/style.css"
// import "../postview2.css";
const PostView = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://ins-ser.herokuapp.com/all")
      .then((data) => {
        return data.json();

      })
      .then((userData) => {
      
        setUserData(userData.data.reverse());
      });
  }, []);
  return (
    <>
      <div className="container">
        <div>
          {userData.map((user, i) => {
            return (
    
              <div className='content' key={i}>
              <div >
                  <header id='head'>
                    <div  >
                      <h3 className='name_loc'>{user.author}</h3>
                      <h4 className='name_loc' style={{fontWeight:'100'}} >{user.location}</h4>
                    </div>
                      <h2 style={{margin:'0px'}}>...</h2>
                  </header>
              </div>
              <div>
              <img className='image' src={user.image} alt={"err"} />
              </div>
              <div id='footer'>
                <div id='footer_flex'>
                  <div >
                    <img className='like_share' src='https://p.kindpng.com/picc/s/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png' alt=''></img>
                    <img className='like_share' src='https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png' alt=''></img>
                  </div>
                  <h6 style={{margin:'1px'}} className='date'>{user.date}</h6>
                </div>
                <h6 style={{margin:'10px 4px'}} className='likes'>{user.like}40 likes</h6>
                <h4 style={{margin:'10px 4px'}}>{user.description}</h4>
              </div>
              </div>
          )
          })}
        </div>
      </div>
    </>
  );
};
export default PostView;

///// ------------> https://mega-insta.herokuapp.com/   <------------////




// return (
            //   <div className="post">
            //     <div className="user-information" key={i}>
            //       <h3 className="name">
            //         {user.author}
            //         <img className="dots" src="dots.svg" alt="dots" />
            //       </h3>
            //       <div>
            //       <div className="location">{user.location}</div>
            //       </div>
            //       <br />
            //     </div>
            //     <div className="user-image">
            //       <img src={user.image} alt="user defined image" width="398px"></img>
            //     </div>
            //     {/* <div id='footer_flex'>
            //                 <div >
            //                   <img className='like_share' src='https://p.kindpng.com/picc/s/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png' alt=''></img>
            //                   <img className='like_share' src='https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png' alt=''></img>
            //                 </div>
            //                 <h6 style={{margin:'1px'}} className='date'>{post.date}</h6>
            //               </div> */}
            //     <div className="date">
            //       <div>
            //         <img className="heart" src="heart.svg" alt="heart" />
            //       </div>
            //       <span>
            //         <img className="rocket" src="rocket.svg" alt="rocket" />
            //       </span>
            //       <span>{user.date}</span>
            //     </div>
            //     <br />
            //     <div className="user-likes">{user.likes} likes</div>
            //     <div className="user-description">
            //       <strong>{user.description}</strong>
            //     </div>
            //   </div>
            // );
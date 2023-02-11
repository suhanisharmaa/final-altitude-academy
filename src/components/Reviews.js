import React from 'react'
import './Reviews.css';

function Reviews() {
  return (
    <div className='reviews'>
        <div className="gal_heading"><h2>WORDS OF APPRECIATION</h2></div>
        <div className="gallery">
      <div className="row">
  <div className="column a">
    <img src="images/reviews/Screenshot (541).png"/>
    <img src="images/reviews/Screenshot (542).png"/>
    <img src="images/reviews/Screenshot (543).png"/>
    <img src="images/reviews/Screenshot (550).png"/>
  </div>
  <div className="column b">
    <img src="images/reviews/Screenshot (552).png"/>
    <img src="images/reviews/Screenshot (544).png"/>
    <img src="images/reviews/Screenshot (545).png"/>
    <img src="images/reviews/Screenshot (551).png"/>
  </div>
  <div className="column c">
    <img src="images/reviews/Screenshot (547).png"/>
    <img src="images/reviews/Screenshot (548).png"/>
    <img src="images/reviews/Screenshot (549).png"/>
    <img src="images/reviews/Screenshot (546).png"/>
  </div>
  {/* <div className="column">
    <img src="images/reviews/Screenshot (550).png"/>
    <img src="images/reviews/Screenshot (551).png"/>
    <img src="images/reviews/Screenshot (544).png"/>
  </div> */}
</div>
</div>
    </div>
  )
}

export default Reviews
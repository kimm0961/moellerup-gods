import React from 'react'

const ImageSlider = () => {
    return ( 
        <div className="ImageSlider mb-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="Images/Intro/Slide1.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="Images/Intro/Slide2.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="Images/Intro/Slide3.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
     );
}
 
export default ImageSlider;
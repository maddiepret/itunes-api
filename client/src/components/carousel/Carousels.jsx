import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from './carousel-img/Carousel-2.jpg';
import img3 from './carousel-img/Carousel-3.jpg';


let styles = {
    margin: 'auto',
	width: '100%',
	height:'auto',
    backgroundColor: '#262626',
  };
  
function App() {
  return (
	<div style={styles}>
		<Carousel>
            <div>
				<img src={img3} alt="carousel 1" />
			</div>
            <div>
				<img src={img2} alt="carousel 2" />
			</div>
		</Carousel>
	</div>
  );
}

export default App;
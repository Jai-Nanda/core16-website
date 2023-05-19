import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import hi from '../../public/news.png'
import Image from 'next/image';
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel>
				<div>
          <Image src={hi} alt='jai'/>
					<p className="legend">Image 1</p>

				</div>
				<div>
        <Image src={hi} alt='jai'/>
					<p className="legend">Image 2</p>

				</div>
				<div>
        <Image src={hi} alt='jai'/>
					<p className="legend">Image 3</p>

				</div>
				<div>
        <Image src={hi} alt='jai'/>
					<p className="legend">Image 4</p>

				</div>
				<div>
        <Image src={hi} alt='jai'/>
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
			</div>
		);
	}
};
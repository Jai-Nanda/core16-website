import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import hi from '../../public/news.png'
import hi2 from '../../public/coreintras2.png'
import hi3 from '../../public/intrascore.png'
import Image from 'next/image';
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel>
				<div className='sm:max-w-7xl m-auto max-w-[90%]'>
          <Image src={hi2} alt='jai'/>

				</div>
				<div>
        <Image src={hi3} alt='jai'/>

				</div>
				
			</Carousel>
			</div>
		);
	}
};

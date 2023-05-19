import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import hi from '../../public/xino.png'
import img7 from '../../public/img7.jpg'
import img2 from '../../public/img2.jpg'
import img8 from '../../public/img8.jpg'
import img4 from '../../public/img4.jpg'
import img5 from '../../public/img5.jpg'
import img6 from '../../public/img6.jpg'
import { useState } from 'react'
import {RxCrossCircled} from 'react-icons/rx'
const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999
    },
    content: {
      maxWidth: '600px',
      maxHeight: '500px',
      margin: 'auto',
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer"
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
import Modal from 'react-modal';
function SliderO() {
   
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
    let settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
      <>
        <Slider {...settings}>
            <div className="card-wrapper cursor-pointer">
                <div className="card">
                    <div className="card-image mr-10">
                        <Image src={img7} alt='yo' onClick={openModal} width={400} height={400}></Image>
                        <Modal 
                        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div className='flex flex-col justify-end items-end '>
        <button onClick={closeModal}><RxCrossCircled color='white' size={36} className='mb-5'  /></button>
        <Image src={img7} alt='yo' className='w-full max-h-100px'></Image>
        </div>
      </Modal>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image mr-10">
                    <Image src={img8} alt='yo' onClick={openModal}></Image>
                        <Modal 
                        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div className='flex flex-col justify-end items-end '>
        <button onClick={closeModal}><RxCrossCircled color='white' size={36} className='mb-5'  /></button>
        <Image src={img8} alt='yo' className='w-full max-h-100px'></Image>
        </div>
      </Modal>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image mr-10">
                    <Image src={img6} alt='yo' onClick={openModal}></Image>
                        <Modal 
                        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div className='flex flex-col justify-end items-end '>
        <button onClick={closeModal}><RxCrossCircled color='white' size={36} className='mb-5'  /></button>
        <Image src={img6} alt='yo' className='w-full max-h-100px'></Image>
        </div>
      </Modal>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image mr-10">
                    <Image src={img4} alt='yo' onClick={openModal}></Image>
                        <Modal 
                        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div className='flex flex-col justify-end items-end '>
        <button onClick={closeModal}><RxCrossCircled color='white' size={36} className='mb-5'  /></button>
        <Image src={img4} alt='yo' className='w-full max-h-100px'></Image>
        </div>
      </Modal>
                    </div>
                </div>
            </div>
        </Slider>
        </>
    )
}

export default SliderO

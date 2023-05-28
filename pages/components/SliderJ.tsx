import React from 'react';
import ModalContent from './ModalContent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import image from '../../data/images.json'
import { useState } from 'react'
import {RxCrossCircled} from 'react-icons/rx'
const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 9999
    },
    content: {
      maxWidth: '800px',
      maxHeight: '700px',
      margin: 'auto',
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer"
    }
  };
  
import Modal from 'react-modal';
function SliderO(data: any) {
   
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [imgShow, setImgShow] = useState('')

    function openModal(link: string) {
      setImgShow(link)
      setmodalIsOpen(true);
      
      
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setmodalIsOpen(false);
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
        {image.map((arr, key) => 
            <div className=" cursor-pointer" key={key}>
                <div className="">
                    <div className=" mr-10">
                        <Image src={arr.link} alt='yo' onClick={() => openModal(arr.link)} width={400} height={400} ></Image>

                    </div>
                </div>
                </div>
                      )}
                </Slider>
                <Modal 
                        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <div className='flex flex-col justify-end items-end '>
        <button onClick={closeModal}><RxCrossCircled color='white' size={36} className='mb-5'  /></button>
        <Image src={imgShow} alt='yo' className='w-full max-h-100px' width={200} height={200} />
        </div>
      </Modal>
                </>
    )
}
export default SliderO
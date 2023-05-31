
import { useState } from 'react';

const verticalSlideGallery = [
    {
        img: '/image/blockace-about-us.png'
    },
    {
        img: '/image/blockace-about-us.png'
    },
    {
        img: '/image/blockace-about-us.png'
    }
]

function VerticalSlide() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(!openModal);
    };

    const prevSlide = () => {
        if (slideNumber === 0) {
            setSlideNumber(galleryImages.length - 1)
        } else {
            setSlideNumber(slideNumber - 1)
        }
    }

    const nextSlide = () => {
        if (slideNumber === verticalSlideGallery.length - 1) {
            setSlideNumber(0)
        } else {
            setSlideNumber(slideNumber + 1)
        }
    }

  return (
    <div className="verticleSlide">
        <div className="main-display">
            <figure className="about-us-figure">
                <img src={verticalSlideGallery[slideNumber].img}></img>
            </figure>
        </div>
        
        <div className="secondary-display">
            <figure className="about-us-figure secondary-display-01">
                <img src={verticalSlideGallery[slideNumber + 1].img}></img>
            </figure>
            <figure className="about-us-figure secondary-display-02">
                <img src={verticalSlideGallery[slideNumber + 2].img}></img>
            </figure>
        </div>
    </div>
  )
}

export default VerticalSlide
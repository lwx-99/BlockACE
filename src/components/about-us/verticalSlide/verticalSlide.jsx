import { useState, useEffect } from 'react';

const VerticalSlideGallery = [
    {
        img: '/image/slide/blockace-about-us.png',
        id: "1"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "2"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "3"
    },
    {
        img: '/image/slide/blockace-about-us.png',
        id: "4"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "5"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "6"
    },
    {
        img: '/image/slide/blockace-about-us.png',
        id: "1"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "2"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "3"
    },
    {
        img: '/image/slide/blockace-about-us.png',
        id: "4"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "5"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "6"
    },
    {
        img: '/image/slide/blockace-about-us.png',
        id: "1"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "2"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "3"
    },
    {
        img: '/image/slide/blockace-about-us.png',
        id: "4"
    },
    {
        img: '/image/slide/slide-01.jpg',
        id: "5"
    },
    {
        img: '/image/slide/slide-02.jpg',
        id: "6"
    },
]

function VerticalSlide() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [display, setDisplay] = useState(false);

    const nextSlide = () => {
        if (slideNumber === VerticalSlideGallery.length - 3) {
            setSlideNumber(0)
        } else {
            setSlideNumber(slideNumber + 1)
        }
    }

    useEffect(() => {
        setTimeout(nextSlide, 5000)
        setDisplay(false);
        setTimeout( () => {setDisplay(true)}, 1);
    }, [slideNumber]);

  return (
    <div className="VerticalSlide">
        
        <div className="secondary-display">
            { display ? <div className="main-display">
            <figure className="about-us-figure">
                <img src={VerticalSlideGallery[slideNumber].img}></img>
            </figure>
            </div> : <></>}
            <figure className="about-us-figure secondary-display-01">
                <img src={VerticalSlideGallery[slideNumber + 1].img}></img>
            </figure>
            <figure className="about-us-figure secondary-display-02">
                <img src={VerticalSlideGallery[slideNumber + 2].img}></img>
            </figure>
        </div>
    </div>
  )
}

export default VerticalSlide
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlights from "../assests/Highlights.svg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import backgroundPicture from "../assests/homeBg.png";

const items = [
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipMHxgjv5DKwgKt0Au1w7Hn5196VDbPXzTgI8vwR=w1080-h624-n-k-no",
    key: 1,
    caption: 'Palawan, Phillippines',
  },
  {
    src: "https://alaskatours.com/wp-content/uploads/2016/01/Alyeska-Resort-Northern-Lights-medium.jpg",
    key: 2,
    caption: 'Alyeska Resort, USA',
  },
  {
    src: "https://media.timeout.com/images/105240244/750/422/image.jpg",
    key: 3,
    caption: 'Seoul, South Korea',
  },
  {
    src: "https://cdn.kimkim.com/files/a/article_images/images/8114394af8a673691ae3e6321e06845646064e83/big-8dbfbf24282c1076eb3e87feb70e43f8.jpg",
    key: 4,
    caption: 'Havana, Cuba',
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/27/77/5b/photo0jpg.jpg?w=1200&h=1200&s=1",
    key: 5,
    caption: 'Queensland, Australia',
  },
  {
    src: "https://www.climbkilimanjaroguide.com/wp-content/uploads/2021/10/Melia-Zanzibar.jpg",
    key: 6,
    caption: 'Zanzibar, Africa',
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <div>
        <img src={item.src} alt={item.altText} style={{ height: "300px" }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </div>
    </CarouselItem>
  ));

  const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '65vh',
    position: 'relative',
  };

  const mottoText = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Marck Script, cursive',
    backgroundColor: 'rgba(215, 188, 152, 0.6)',
    padding: '10px',
  };

  const highlightStyle = {
    position: 'absolute',
    textAlign: 'center',
    marginTop: '2px',
    left: '0',
  };

  const carouselStyle = {
    marginTop: '160px',
    fontFamily: 'Manuale, serif',
  };

  return (
    <div className="homeflex">
      <div className="home-bg" style={backgroundStyle}>
        <div style={mottoText}>
          <h2>Whether living vicariously through others or creating bonds while embarking on adventures together, Passenger allows you to experience the places we all love to go!</h2>
          <Link to="/signin" className="manual-font">
            <button>GET ACCESS</button>
          </Link>
        </div>
      </div>
      <div style={highlightStyle}>
        <img
          alt="highlights"
          src={Highlights}
          width={480}
          height={80}
        />
      </div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="text-center"
        style={carouselStyle}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <div className="home-arrow">
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;

import React, { useState } from 'react'
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap';

function MyCarousel(carouselItems) {
  // State for Active index
  const [activeIndex, setActiveIndex] = useState(0);
  // State for Animation
  const [animating, setAnimating] = useState(false);

  // Items array length
  const itemLength = carouselItems.carouselItems.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ?
      itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ?
      0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  // Carousel Item Data
  const carouselItemData = carouselItems.carouselItems.map((item) => {
    return (
      <CarouselItem
        key={item.id}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img className='mycarousel__homePageFirst_images' src={item.carousel.image} alt={item.carousel.caption} />
        <CarouselCaption className="mycarousel__caption text-white round" captionText={item.carousel.subtitle} captionHeader={item.carousel.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className='mycarousel__homePageFirst text-center mb-5'>
      <Carousel previous={previousButton} next={nextButton}
        activeIndex={activeIndex}>
        <CarouselIndicators items={carouselItems.carouselItems}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }} />
        {carouselItemData}
        <CarouselControl directionText="Prev"
          direction="prev" onClickHandler={previousButton} />
        <CarouselControl directionText="Next"
          direction="next" onClickHandler={nextButton} />
      </Carousel>
    </div >
  );
}

export default MyCarousel
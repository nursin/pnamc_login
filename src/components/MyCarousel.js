import React, { useState } from 'react'
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap';

const pnamcPeople = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/pnamc_people.png?alt=media&token=2179c745-db72-4c1d-a799-bb3da5cc172a";
const growPNAMC = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/grow_with_PNAMC.jpg?alt=media&token=0820c918-f81b-4e4d-9cc6-77d2b7237be6";
const donateMedicalMission = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/donate_medical_mission.jpg?alt=media&token=3b3da759-d985-4538-bec1-f001e847eeee";

function MyCarousel() {
  // State for Active index
  const [activeIndex, setActiveIndex] = useState(0);

  // State for Animation
  const [animating, setAnimating] = useState(false);

  // Sample items for Carousel
  const items = [
    {
      caption: 'Philippine Nurses Association - Maryland Chapter', 
      src: pnamcPeople,
      altText: 'PNAMC people standing together'
    },
    {
      caption: 'Grow with PNAMC', 
      subtitle: 'Education - Missions - Community',
      src: growPNAMC,
      altText: 'people posing together on mission trip'
    },
    {
      caption: 'Donate to PNAMC', 
      subtitle: '501(c)3 Tax exempt organization',
      src: donateMedicalMission,
      altText: 'people posing together on mission trip'
    }
  ];

  // Items array length
  const itemLength = items.length - 1

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
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img className='mycarousel__homePageFirst_images' src={item.src} alt={item.altText} />
        <CarouselCaption className="mycarousel__caption text-white round" captionText={item.subtitle} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className='mycarousel__homePageFirst text-center mb-5'>
      <Carousel previous={previousButton} next={nextButton}
        activeIndex={activeIndex}>
        <CarouselIndicators items={items}
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
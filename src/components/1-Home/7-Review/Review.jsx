import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Review.css";
import classNames from "classnames";

const Review = () => {
  const leftImages = [
    { src: "img/Review-1.jpeg", text: "This is the first review." },
    { src: "img/Review-2.jpeg", text: "This is the second review.", top: true },
    { src: "img/Review-3.jpeg", text: "This is the third review." },
    { src: "img/Review-5.jpeg", text: "This is the fifth review.", top: true },
    { src: "img/Review-6.jpeg", text: "This is the sixth review." },
    {
      src: "img/Review-7.jpeg",
      text: "This is the seventh review.",
      top: true,
    },
    { src: "img/Review-8.jpeg", text: "This is the eighth review." },
    { src: "img/Review-9.jpeg", text: "This is the ninth review.", top: true },
    { src: "img/Review-10.jpeg", text: "This is the tenth review." },
    {
      src: "img/Review-11.jpeg",
      text: "This is the eleventh review.",
      top: true,
    },
    {
      src: "img/Review-6.jpeg",
      text: "This is the twelfth review.",
    },
    {
      src: "img/Review-7.jpeg",
      text: "This is the thirteenth review.",
      top: true,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(leftImages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 3) % leftImages.length;
      setSelectedImage(leftImages[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the delay as needed
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setCurrentIndex(leftImages.indexOf(image));
  };

  return (
    <div className="Review">
      <div className="bar_Review">
        <h1>Review</h1>
      </div>
      <div className="review-section">
        {/* Large image */}
        <div className="large-image-container">
          <img src={selectedImage.src} alt="Selected" className="large-image" />
        </div>

        {/* Swiper for small images on small screens */}
        <div className="small-images-container all-images">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 9 },
              320: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {leftImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <img
                    src={image.src}
                    alt={`Small ${index}`}
                    className={classNames("small-image", {
                      "-mt-[.5px]": image.top,
                    })}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text related to the large image */}
        <div className="review-text">
          <p>{selectedImage.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

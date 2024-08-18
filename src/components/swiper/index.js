import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// Import images
import img1 from "../../assets/Image1.jpg";
import img2 from "../../assets/Image2.jpg";
import img3 from "../../assets/Image3.jpg";
import img4 from "../../assets/Image4.jpg";
import img5 from "../../assets/Image5.jpg";

export default function App() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <Swiper
      spaceBetween={25}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`img${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

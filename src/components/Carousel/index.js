import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function Carousel({ data }) {
    return (
        <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 5000 }} className="carousel">
            {data.map((slider, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link to={`/${slider.book.slug}`}>
                            <img className="slide-img" src={slider.image_path} alt="Banner" />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Carousel;

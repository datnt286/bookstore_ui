import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Carousel() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="carousel">
            <SwiperSlide>
                <img className="slide-img" src="slide-1.jpg" alt="Banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide-img" src="slide-2.jpg" alt="Banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide-img" src="slide-3.jpg" alt="Banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide-img" src="slide-4.jpg" alt="Banner" />
            </SwiperSlide>
        </Swiper>
    );
}

export default Carousel;

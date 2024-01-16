import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerComponent.css';
import banner from '../../../assets/images/banner.jpg'

const BannerComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='bannerComponent'>
           <div className="widthBanner" style={{width: '85.11%'}}>
           <div className="banner">
                <Slider className='slickSlider' {...settings}>
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                    <img src={banner} alt="" />
                </Slider>
                <div className="contentBanner">
                    <p className="textBanner">text</p>
                    <button type="button" className="btnBanner">Xem chi tiết</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default BannerComponent;
import React from 'react';
import HomeBenefitsList from '../../components/HomeComponent/BenefitsListComponent/BenefitsListComponent';
import HomeCategoryComponent from '../../components/HomeComponent/CategoryComponent/CategoryComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import BannerComponent from '../../components/HomeComponent/BannerComponent/BannerComponent';
import FeaturedCourseComponent from '../../components/HomeComponent/FeaturedCourseComponent/FeaturedCourseComponent';
import NewsComponent from '../../components/HomeComponent/NewsComponent/NewsComponent';
import ReviewCourseComponent from '../../components/HomeComponent/ReviewCourseComponent/ReviewCourseComponent';
import NewPostsComponent from '../../components/HomeComponent/NewPostsComponent/NewPostsComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import banner1 from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/banner.jpg'
import banner3 from '../../assets/images/logoAnhIT.jpg'

const HomePage = () => {
    const images = [
        banner1,
        banner2,
        banner3,
    ]

    return (
        <div>
            <HeaderComponent />
            <BannerComponent images={images}/>
            <HomeBenefitsList />
            <HomeCategoryComponent />
            <FeaturedCourseComponent />
            <NewsComponent />
            <ReviewCourseComponent />
            <NewPostsComponent />
            <FooterComponent />
        </div>
    );
};

export default HomePage;
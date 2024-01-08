import React from 'react';
import './FeaturedCourseComponent.css'
import { Link } from 'react-router-dom';
import featuredCourse1 from '../../../assets/images/featuredCourse1.jpg'
import featuredCourse2 from '../../../assets/images/featuredCourse2.jpg'
import featuredCourse3 from '../../../assets/images/featuredCourse3.jpg'
import featuredCourse4 from '../../../assets/images/featuredCourse4.jpg'

const FeaturedCourseComponent = () => {
    return (
        <div className='featuredCourseComponent'>

            <div class="container">
                <div className="title">
                    <h2>Khóa học nổi bật</h2>
                    <Link href="">Xem thêm</Link>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={featuredCourse1} alt="" />
                        <h4 className="nameFeaturedCourse">Khóa học automation testing (Basic)</h4>
                        <hr style={{margin: '0'}}/>
                        <p className="priceFeaturedCourse">4.000.000 VNĐ</p>
                        <p className="lessonFeaturedCourse">40 buổi học</p>
                        <p className="timeFeaturedCourse">5 tháng (1 tuần/2 buổi)</p>
                        <a href="" className="btnDetailCourse">Xem chi tiết</a>
                    </div>
                    <div class="col-sm">
                        <img src={featuredCourse2} alt="" />
                        <h4 className="nameFeaturedCourse">Khóa học fresher Python</h4>
                        <hr style={{margin: '0'}}/>
                        <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                        <p className="lessonFeaturedCourse">20 buổi học</p>
                        <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                        <a href="" className="btnDetailCourse">Xem chi tiết</a>
                    </div>
                    <div class="col-sm">
                        <img src={featuredCourse3} alt="" />
                        <h4 className="nameFeaturedCourse">Khóa học SQL testing (Basic)</h4>
                        <hr style={{margin: '0'}}/>
                        <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                        <p className="lessonFeaturedCourse">20 buổi học</p>
                        <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                        <a href="" className="btnDetailCourse">Xem chi tiết</a>
                    </div>
                    <div class="col-sm">
                        <img src={featuredCourse4} alt="" />
                        <h4 className="nameFeaturedCourse">Khóa học ISTQB Foundation</h4>
                        <hr style={{margin: '0'}}/>
                        <p className="priceFeaturedCourse">2.400.000 VNĐ</p>
                        <p className="lessonFeaturedCourse">20 buổi học</p>
                        <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                        <a href="" className="btnDetailCourse">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourseComponent;
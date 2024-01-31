import React from 'react';
import './CoursePage.css';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAngleDown, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import featuredCourse1 from '../../assets/images/featuredCourse1.jpg'
import featuredCourse2 from '../../assets/images/featuredCourse2.jpg'
import featuredCourse3 from '../../assets/images/featuredCourse3.jpg'
import featuredCourse4 from '../../assets/images/featuredCourse4.jpg'
import FooterComponent from '../../components/FooterComponent/FooterComponent';

const CoursePage = () => {
    return (
        <>
            <HeaderComponent />
            <div className='coursePage'>
                <div class="container toolBar">
                    <div class="row">
                        <div class="col" style={{ textAlign: 'left' }}>
                            <div className="filter">
                                <FontAwesomeIcon icon={faFilter} />
                                <p className='filterBox'>Filter</p>
                                <p className="filterNumber">3</p>
                            </div>
                            <div className="search">
                                <FontAwesomeIcon className='iconSearchCoursePage' icon={faSearch} />
                                <input type="text" className="searchBox" placeholder='Fresher tester ' />
                            </div>
                        </div>
                        <div class="col" style={{ textAlign: 'right' }}>
                            <div className="menuSearch">
                                <form>
                                    <label>Sort by:</label>
                                    <div className="inputList">
                                        <input style={{ padding: '16px 12px', border: '1px solid #E9EAF0' }} list='filterMenu' placeholder='Trending' />
                                        <FontAwesomeIcon className='iconDown' icon={faAngleDown} />
                                    </div>
                                    <datalist id='filterMenu'>
                                        <option>Trending</option>
                                        <option>Trending</option>
                                        <option>Trending</option>
                                        <option>Trending</option>
                                    </datalist>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{marginTop: '40px'}}>
                    <div class="row">
                        <div class="col-sm">
                            <img src={featuredCourse1} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học automation testing (Basic)</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">4.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">40 buổi học</p>
                            <p className="timeFeaturedCourse">5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse2} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học fresher Python</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse3} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học SQL testing (Basic)</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse4} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học ISTQB Foundation</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.400.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm">
                            <img src={featuredCourse1} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học automation testing (Basic)</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">4.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">40 buổi học</p>
                            <p className="timeFeaturedCourse">5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse2} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học fresher Python</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse3} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học SQL testing (Basic)</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.000.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                        <div class="col-sm">
                            <img src={featuredCourse4} alt="" />
                            <h4 className="nameFeaturedCourse">Khóa học ISTQB Foundation</h4>
                            <hr style={{ margin: '0' }} />
                            <p className="priceFeaturedCourse">2.400.000 VNĐ</p>
                            <p className="lessonFeaturedCourse">20 buổi học</p>
                            <p className="timeFeaturedCourse">2.5 tháng (1 tuần/2 buổi)</p>
                            <a href="" className="btnDetailCourse">Xem chi tiết</a>
                        </div>
                    </div>
                <ul className="pagination">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
                </div>

            </div>
            <FooterComponent />
        </>
    );
};

export default CoursePage;
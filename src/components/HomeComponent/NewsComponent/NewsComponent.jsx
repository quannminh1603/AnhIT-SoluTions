import React from 'react';
import './NewsComponent.css'
import news1 from '../../../assets/images/news1.jpg'
import news2 from '../../../assets/images/news2.jpg'
import news3 from '../../../assets/images/news3.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const NewsComponent = () => {
    return (
        <div className='NewsComponent'>
            <div class="container">
                <div className="title">
                    <h2>Tin tức mới nhất</h2>
                    <Link href="">Xem thêm</Link>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={news1} alt="" />
                        <p className="timeNews">Hanahley Le • 1/1/2024</p>
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <span className='nameNews'>Bill Walsh leadership lessons</span>
                            </div>
                            <div class="gridCol2 iconNews">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                        <p className="descNews">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    </div>
                    <div class="col-sm">
                        <img src={news2} alt="" />
                        <p className="timeNews">Thúy Anh • 3/1/2024</p>
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <span className='nameNews'>PM mental models</span>
                            </div>
                            <div class="gridCol2 iconNews">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                        <p className="descNews">Mental models are simple expressions of complex processes or relationships.</p>
                    </div>
                    <div class="col-sm">
                        <img src={news3} alt="" />
                        <p className="timeNews">Minh Quân • 4/1/2024</p>
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <span className='nameNews'>What is Wireframing?</span>
                            </div>
                            <div class="gridCol2 iconNews">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                        <p className="descNews">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                    </div>
                    <div class="col-sm">
                        <img src={news3} alt="" />
                        <p className="timeNews">Minh Quân • 4/1/2024</p>
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <span className='nameNews'>What is Wireframing?</span>
                            </div>
                            <div class="gridCol2 iconNews">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                        <p className="descNews">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsComponent;
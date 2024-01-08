import React from 'react';
import './ReviewCourseComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import avatarReviewCourse from '../../../assets/images/avatarReviewCourse.jpg'

const ReviewCourseComponent = () => {
    return (
        <div className='reviewCourseComponent'>
            <div class="container">
                <div class="row">
                    <h2>Cảm nhận học viên về khóa học</h2>
                    <div class="col">
                        <div className="gridTemplateCol2">
                            <div className="gridCol2"><img src={avatarReviewCourse} alt="" /></div>
                            <div className="gridCol2" style={{display: 'flex', alignItems: 'center'}}>
                                <p className="nameReviewCourse">Ronald Richards</p>
                            </div>
                        </div>
                        <p className="contentReviewCourse">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.     
                        </p>
                        <div className="starReviewCourse">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div class="col">
                        <div className="gridTemplateCol2">
                            <div className="gridCol2"><img src={avatarReviewCourse} alt="" /></div>
                            <div className="gridCol2" style={{display: 'flex', alignItems: 'center'}}>
                                <p className="nameReviewCourse">Ronald Richards</p>
                            </div>
                        </div>
                        <p className="contentReviewCourse">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.     
                        </p>
                        <div className="starReviewCourse">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div class="col">
                        <div className="gridTemplateCol2">
                            <div className="gridCol2"><img src={avatarReviewCourse} alt="" /></div>
                            <div className="gridCol2" style={{display: 'flex', alignItems: 'center'}}>
                                <p className="nameReviewCourse">Ronald Richards</p>
                            </div>
                        </div>
                        <p className="contentReviewCourse">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.     
                        </p>
                        <div className="starReviewCourse">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCourseComponent;
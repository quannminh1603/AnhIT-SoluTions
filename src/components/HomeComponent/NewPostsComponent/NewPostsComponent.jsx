import React from 'react';
import './NewPostsComponent.css';
import newPosts1 from '../../../assets/images/newPosts1.jpg'
import newPosts2 from '../../../assets/images/newPosts2.jpg'
import newPosts3 from '../../../assets/images/newPosts3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const NewPostsComponent = () => {
    return (
        <div className='newPostsComponent'>
            <div class="container">
                <div class="row borderRow">
                    <h2>Bài viết mới nhất</h2>
                    <div class="col">
                        <img src={newPosts1} alt="" />
                        <p className="timeNewPosts">Olivia Rhye • 20 Jan 2022</p>
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <span className='nameNewPosts'>UX review presentations</span>
                            </div>
                            <div class="gridCol2 iconNewPosts">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                        <p className="descNewPosts">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    </div>
                    <div class="col colRight">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <img src={newPosts2} alt="" />
                                </div>
                                <div class="col">
                                <p className="timeNewPosts">Phoenix Baker • 19 Jan 2022</p>
                                    <p className="nameNewPosts">Migrating to Linear 101</p>
                                    <p className="descNewPosts">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <img src={newPosts3} alt="" />
                                </div>
                                <div class="col">
                                <p className="timeNewPosts">Lana Steiner • 18 Jan 2022</p>
                                    <p className="nameNewPosts">Building your API Stack</p>
                                    <p className="descNewPosts">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostsComponent;
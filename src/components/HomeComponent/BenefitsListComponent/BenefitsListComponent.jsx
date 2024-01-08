import React from 'react';
import './BenefitsListComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const HomeBenefitsList = () => {
    return (
        <div className='homeBenefitsList'>
            <h1 style={{textAlign: 'center', marginBottom: '28px'}} className='titleHomeBenefitsList'>Lợi Ích <span style={{ color: '#FAB437' }}>Nổi Bật</span></h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Khóa học online</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Support tận tình</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Giảng viên giàu kinh nghiệm</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Giáo trình cập nhật liên tục</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Đội ngũ support tận tâm</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Review CV sau khóa học</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Bài tập sát với thực tế</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Dịch vụ phát triển phần mềm</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Đội ngũ giàu kinh nghiệm</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Ứng viên freelancer</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Phát triển phần mềm theo dịch vụ</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="col itemBenefitsList">
                        <div class="gridTemplateCol2">
                            <div class="gridCol2">
                                <FontAwesomeIcon icon={faFolderOpen} className='iconBenefitsList' />
                            </div>
                            <div class="gridCol2">
                                <span className='contentBenefitsList'>Cung ứng nguồn nhân lực</span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBenefitsList;
import React from 'react';
import './HeaderComponent.css';
import { NavLink } from 'react-router-dom';
import logoAnhIT from '../../assets/images/logoAnhITSolutions.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const HeaderComponent = () => {
    return (
        <div className='headerComponent'>


            <div className="container text-center">
                <div className="row">
                    <div className="col-3 divImgLogoAnhIT">
                            <img className='' src={logoAnhIT} alt="" />
                        {/* <div className="divImgLogoAnhIT">
                        </div> */}
                    </div>
                    <div className="col-9 align-items-start headerMenu">
                        <ul>
                            <li>
                                <NavLink to='/' activeClassName='active'>Trang Chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to='/course' activeClassName='active'>Khóa Học <FontAwesomeIcon className='iconDownMenu' icon={faChevronDown} /></NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Dịch Vụ <FontAwesomeIcon className='iconDownMenu' icon={faChevronDown} /></NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Tin Tức</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Về Chúng Tôi</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Đăng Nhập</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' activeClassName='active'>Đăng Ký</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderComponent;
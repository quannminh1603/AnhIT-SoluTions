import React from 'react';
import './FooterComponent.css'
import logoAnhIT from '../../assets/images/logoAnhITSolutionsRemove.jpg'

const FooterComponent = () => {
    return (
        <div className='footerComponent'>
            <div class="container">
                <div class="row">
                    <div class="col" style={{marginTop: '-40px', paddingRight: '32px'}}>
                        <img src={logoAnhIT} alt="" />
                        <p className="address">Địa chỉ: 750 NW 20 Street Miami FL 33127 USA</p>
                        <p className="phone">Số điện thoại: +14343730249</p>
                    </div>
                    <div class="col">
                        <p className="title">Khóa học</p>
                        <ul>
                            <li><a href="">Automation Testing (Basic)</a></li>
                            <li><a href="">Automation Testing (Advance) </a></li>
                            <li><a href="">Fresher Python </a></li>
                            <li><a href="">Fresher Tester</a></li>
                            <li><a href="">ISTQB Foundation</a></li>
                            <li><a href="">SQL Testing (Basic)</a></li>
                            <li><a href="">API Testing (Basic)</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <p className="title">Về Anh IT</p>
                        <ul>
                            <li><a href="">Giới thiệu</a></li>
                            <li><a href="">Liên hệ</a></li>
                            <li><a href="">Điều khoản</a></li>
                            <li><a href="">Bảo mật</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <p className="title">Đăng ký nhận tư vấn</p>
                        <form action="">
                            <input type="text" placeholder='Nhập họ và tên'/>
                            <input type="email" placeholder='Nhập email của bạn'/>
                            <input type="number" placeholder='Nhập số điện thoại'/>
                            <button>Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
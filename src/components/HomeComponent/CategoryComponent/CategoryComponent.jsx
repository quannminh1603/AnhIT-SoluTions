import React from 'react';
import './CategoryComponent.css'
import homeCategory1 from '../../../assets/images/homeCategory1.jpg'
import homeCategory2 from '../../../assets/images/homeCategory2.jpg'
import homeCategory3 from '../../../assets/images/homeCategory3.jpg'

const HomeCategoryComponent = () => {
    return (
        <div className='homeCategoryComponent'>
            <h1>Danh Mục</h1>
            <div class="container text-center itemHomeCategory">
                <div class="row">
                    <div class="col-sm">
                        <img src={homeCategory1} alt="" />
                        <h4>Khóa học</h4>  
                    </div>
                    <div class="col-sm">
                        <img src={homeCategory2} alt="" />
                        <h4>Dịch vụ</h4>
                    </div>
                    <div class="col-sm">
                        <img src={homeCategory3} alt="" />
                        <h4>Việc làm</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategoryComponent;
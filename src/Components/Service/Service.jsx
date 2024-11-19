// import React from "react";
import serviceCSS from './../Service/Service.module.css'
import { Tilt } from "react-tilt"

const defaultOptions = {
    max: 10,
    speed: 0.05, 
    scale: 1.0
}

function Service() {
    return (
        <div className={`${serviceCSS.ServiceWrapper} section`} id="service">
            <h2>Thông tin tuyển sinh</h2>
            <p className={serviceCSS.pera}>
               Hồ sơ nhập học của các thí sinh đã trúng tuyển vào học viện gồm các đối tượng: 
               Thí sinh đã trúng tuyển vào đại học hệ chính quy khóa 2024 của Học viện ở các ngành thuộc Nhóm ngành Kỹ thuật, gồm các ngành:
               Công nghệ thông tin, An toàn thông tin, Khoa học máy tính, Kỹ thuật Điện tử viễn thông, Công nghệ kỹ thuật Điện, điện tử,
               Kỹ thuật Điều khiển và tự động hóa, Công nghệ Internet vạn vật (IoT).
            </p>
            <div className={serviceCSS.ServiceCards}>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-code-box-line'></i>
                        <h3>Công nghệ thông tin</h3>
                        <p>Chỉ tiêu tuyển sinh: 180</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-fingerprint-line'></i>
                        <h3>An toàn thông tin</h3>
                        <p>Chỉ tiêu tuyển sinh: 80</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-base-station-line'></i>
                        <h3>Kỹ thuật Điện tử viễn thông</h3>
                        <p>Chỉ tiêu tuyển sinh: 100</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-color-filter-line'></i>
                        <h3>Công nghệ Internet vạn vật IOT</h3>
                        <p>Chỉ tiêu tuyển sinh: 85</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-quill-pen-line'></i>
                        <h3>Công nghệ đa phương tiện</h3>
                        <p>Chỉ tiêu tuyển sinh: 120</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={serviceCSS.ServiceCard}>
                        <i className='ri-cpu-line'></i>
                        <h3>Kỹ thuật Điều khiển và tự động hóa</h3>
                        <p>Chỉ tiêu tuyển sinh: 85</p>
                        <h4>Xem thêm <i className="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Service;
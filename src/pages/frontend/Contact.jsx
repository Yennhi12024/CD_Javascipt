import React from 'react';
import Header from '../../layouts/LayoutAdmin/Header';

const Contact = () => { 
  return (
    <>
      <section className="bg-light">
        <div className="container">
          <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="index.js">Trang chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="text-main">Họ tên</label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="text-main">Điện thoại</label>
                <input type="text" name="phone" id="phone" className="form-control" placeholder="Nhập điện thoại" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-main">Email</label>
                <input type="text" name="email" id="email" className="form-control" placeholder="Nhập email" />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="text-main">Tiêu đề</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Nhập tiêu đề" />
              </div>
              <div className="mb-3">
                <label htmlFor="detail" className="text-main">Nội dung</label>
                <textarea name="detail" id="detail" className="form-control" placeholder="Nhập nội dung liên hệ"></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-main">Gửi liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

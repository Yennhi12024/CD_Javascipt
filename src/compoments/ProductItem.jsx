const Products = () => {
  return (
    <div className="card mb-4">
      <div className="card-image">
        <a href="#" className="card-image__link">
          <img
            src="https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/citizen-nh8350-83a-trang-1-2-org.jpg?v=1705974493770"
            alt=""
            className="card-image__thumb"
          />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Tên sản phẩm</h5>
        <div className="price-box d-flex align-items-center justify-content-between mb-2">
          <span className="price">100.000đ</span>
          <span className="sale-price">
            <del>120.000đ</del>
          </span>
        </div>
        <a href="#" className="btn btn-primary">
          Mua ngay
        </a>
      </div>
    </div>
  );
};

export default Products;

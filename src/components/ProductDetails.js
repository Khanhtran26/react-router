import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    var {match} = this.props;
    console.log(match);
    var name = match.params.name;
    return (
      <div>
          Đây là trang chi tiết sản phẩm {name}
      </div>
    );
  }
}
export default ProductDetails;

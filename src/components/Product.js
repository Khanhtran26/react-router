import React, { Component } from "react";
import { NavLink , Route} from "react-router-dom";
import ProductDetails from "./ProductDetails";

class Product extends Component {
  render() {
      var product = [
        {
          id : 1,
          name : "Iphone 11 Pro",
          slug :"iphone11pro",
          price : 900
        },
        {
          id : 2,
          name : "Iphone 11 Pro Max",
          slug :"iphone11promax",
          price : 1100
        },
        {
          id : 3,
          name : "Iphone 11",
          slug :"iphone11",
          price : 600
        }
      ]

      var {match} = this.props;
      var url =  match.url;

      var result = product.map((pro, index)=>{
          return (
            <NavLink key={index} to={`${url}/${pro.slug}/${pro.id}`}>
              <li className="list-group-item" >{pro.id} - {pro.name} - {pro.price}</li>
            </NavLink>
          )
      });
    return (
      <div>
        <h1>Đây là sản phẩm</h1> 
        <div className="container">
            <div className="row">
                <ul className="list-group">
                    {result}
                </ul>
            </div>
            <div className="row">
                <Route path='/product/:name' component={ProductDetails}></Route>
            </div>
        </div>
      </div>
    );
  }
}
export default Product;

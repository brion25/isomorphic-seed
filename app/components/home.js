import React from "react";
import {Link} from "react-router";

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <h1>This is Home Page </h1>
        <Link to="about"> About </Link>
        <Link to="details"> Details </Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {name: "Dillon"}
  }
  render(){
    return(
      <div>
        <h1>{this.state.name},</h1>
        <Header />
        <Footer />
      </div>
    );
  }
}

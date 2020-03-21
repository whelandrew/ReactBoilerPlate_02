import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ImageSwiper extends React.Component {	
	constructor(props) {
		super(props);	
		
		this.state={}
	}
	
	render() {
		return (<div style="background-color:black;">
		<h1>Hello World</h1>
      </div>);
	}
}

export default ImageSwiper;

const wrapper = document.getElementById("create-template");
wrapper ? ReactDOM.render(<ImageSwiper />, wrapper) : false;
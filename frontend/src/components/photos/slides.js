import React, { Component } from 'react';

	class Slides extends Component {

		constructor(props) {
		  super(props);
		  this.state = {
		    images : this.props.data.content.split(',')
		  }
		  console.log(props);
		}
		  //
		  // state = {
		  //     slides: [
		  //
		  //       {
		  //         clicked: false,
		  //         animated: "animated slideInRight",
		  //       },
		  //
		  //       {
		  //         clicked: false,
		  //         animated: "animated slideInDown",
		  //       },
		  //
		  //       {
		  //         clicked: false,
		  //         animated: "animated jackInTheBox",
		  //       },
		  //
		  //       {
		  //         clicked: false,
		  //         animated: "animated slideInUp",
		  //       },
		  //
		  //      {
		  //         clicked: false,
		  //         animated: "animated slideInLeft",
		  //       }
		  //     ]
		  //
		  //
		  //   };

    clickedItem(e) {
  		console.log(e);
			let slides = [...this.state.images]
  		slides.forEach((slide) =>  {slide.clicked = false});
  		slides[e.target.id].clicked = true;
  	 	this.setState({slides})
	}

	render() {
		return (
			<div className="thumbnails">
			{this.state.images.map((slide, index) =>
			<img className=""  key={index} id={index} onClick = {(e) => this.clickedItem(e)} src={this.state.images[index]} alt="" />)}
						</div>
		)
	}
}

export default Slides;

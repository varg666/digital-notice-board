import React, { Component } from 'react';

	class Slides extends Component {

	state = {
      slides: [

        {
          clicked: false,
          animated: "animated slideInRight",
          size: "115x70",
          src: "https://www.facebook.com/devugees/photos/a.271358913221387.1073741826.134931656864114/593032241054051/?type=3"
        },

        {
          clicked: false,
          animated: "animated slideInDown",
          size: "115x70",
          src: "../img/02.jpg"
        },

        {
          clicked: false,
          animated: "animated jackInTheBox",
          size: "115x70",
          src: "../img/02.jpg"
        },

        {
          clicked: false,
          animated: "animated slideInUp",
          size: "115x70",
          src: "/img/01.jpg"
        },

       {
          clicked: false,
          animated: "animated slideInLeft",
          size: "115x70",
          src: "/img/01.jpg"
        }
      ]


    };

    clickedItem(e) {
  		console.log(e);
  		let slides = [...this.state.slides]
  		slides.forEach((slide) =>  {slide.clicked = false});
  		slides[e.target.id].clicked = true;
  	 	this.setState({slides})
	}

	render() {
		return (
			<div className="thumbnails">
				{this.state.slides.map((slide, index) =>
				<img className={`${this.state.slides[index].animated}  ${this.state.slides[index].clicked  ? 'active' : ''}`}  key={index} id={index} onClick = {(e) => this.clickedItem(e)} src={this.state.slides[index].src} alt="" />)}
			</div>
		)
	}
}

export default Slides;

import React, { Component } from 'react';
import SlideTimeline from '../timeline/SlideTimeline';


class SnippetSlide extends Component {
	constructor(props){
		super(props);
      		this.state={

      	}	
	}

render(){

	return(
	<div>
		<div className="SnippetSlide">
			<img src={this.props.image} />
		</div>
		<aside className="authorData">
			<img src={this.props.profilePic} />
		</aside>
		<SlideTimeline time={30} />

	</div>
		);
	}
}

export default SnippetSlide;
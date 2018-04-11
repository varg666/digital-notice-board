import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
  import "./Announcement.css"; 

class Announcement extends Component {
	render(props) {
		return(
		<div>
        		<CardBody>
		          	<CardTitle className="title">{this.props.data.title}</CardTitle>
		          	<span className="subtitle">{this.props.data.location}</span>
			        <CardText className="text">{this.props.data.description}</CardText>
		        </CardBody>
		</div>
		);
	}
}
export default Announcement;

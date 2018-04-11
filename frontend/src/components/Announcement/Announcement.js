import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
class Announcement extends Component {
	render(props) {
		return(
		<div>
			<Card>
        		<CardBody>
		          	<CardTitle>{this.props.data.title}</CardTitle>
		          	<span>{this.props.data.location}</span>
			    </CardBody>
		
			    <CardBody>
			        <CardText>{this.props.data.description}</CardText>
			        <a target="_blank" href={this.props.data.link}>go to event</a>
		        </CardBody>
      		</Card>
		</div>
		);
	}
}
export default Announcement;

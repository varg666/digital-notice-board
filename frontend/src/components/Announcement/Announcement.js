import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardLocation } from 'reactstrap';
class Announcement extends Component {
	render(props) {
		return(
		<div>
			<Card>
        		<CardBody>
		          	<CardTitle>{this.props.data.title}</CardTitle>
		          	<location>{this.props.data.location}</location>
			    </CardBody>
			       {/* <img  className= "img-fluid mx-3" src="http://co-up.de/photos/coup_3rd_lounge.jpg" />*/}
			    <CardBody>
			        <CardText>{this.props.data.description}</CardText>
			        <CardLink>{this.props.data.link}</CardLink>
		        </CardBody>
      		</Card>
		</div>
		);
	}
}
export default Announcement;
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
class Announcement extends Component {
	render(props) {
		return(
		<div>
			<Card>
        		<CardBody>
		          	<CardTitle>Berlin.JS meetup</CardTitle>
		          	<CardSubtitle>Thursday, April 19, 2018 7:00 PM to 10:00 PM <br />
		          	Berlin Coworking Space - co.up Adalbertstraße 7 - 8, 10999 Berlin.
		          	</CardSubtitle>
			    </CardBody>
			        <img  className= "img-fluid mx-3" src="http://co-up.de/photos/coup_3rd_lounge.jpg" />
			    <CardBody>
			        <CardText>About the meetup: Please check berlinjs.org for up-to-date info about the talks we have scheduled for the upcoming event! If there's an open slot, consider making a pull-request to give a talk yourself, or encourage a friend to do the same. <br /> Please get in touch with any of the organizers with any questions you have. We welcome a diverse range of topics that are related in any way to JavaScript and the community around it. New speakers, experienced speakers, and everyone in between. If you have an idea you aren't sure about, just reach out.
					</CardText>
			        <CardLink href="https://www.meetup.com/Berlin-JS/events/246786779/">Go to meetup</CardLink>
		        </CardBody>
      		</Card>
		</div>
		);
	}
}
export default Announcement;
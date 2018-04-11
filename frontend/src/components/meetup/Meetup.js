	import React, { Component } from 'react';
	import { Card, CardText, CardBody,
  	CardTitle, CardSubtitle} from 'reactstrap';

	class Meetup extends Component {
		constructor(props) {
	    super(props);
	    this.state = {
	      events: {}
	      
	    }
	}
	 componentDidMount() {
	   	fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/How-to-become-a-Web-Developer/events?photo-host=public&page=20&sig_id=206185798&sig=22ed3febfbf5564af76e434947acbd370dd7f051`)
	    .then(resp => resp.json())
	    .then((data) => {
	       console.log(data)
	       this.setState({events:data})
	       
	     });
	    
	}


	render(props) {
		console.log(this.state.events)
	if(this.state.events.length > 0) {
			var content = this.state.events.map((event, i) => 
				<Card key={i}>
				 <CardBody>
          			<CardTitle>{event.name}</CardTitle>
          				<CardSubtitle>{event.local_date}       {event.local_time}</CardSubtitle>
         				<CardText>{event.description}</CardText>
        					<span>{event.venue.address_1}   {event.venue.city}</span>
        		</CardBody>
       		</Card>).splice(0,3);		
	}
		return(
		<div>
		{content}
		</div>
		);
	}
}
export default Meetup;

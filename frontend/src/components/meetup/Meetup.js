import React, { Component } from 'react';

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
if(this.state.events.length > 0) {
		this.state.events.map(event => {
			console.log(event);
		})
}
	
		return(
		<div>
		
		</div>
		);
	}
}
export default Meetup;

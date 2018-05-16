  import React, { Component } from 'react';
  import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

  class Meetup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: {}

      }
  }
   componentDidMount() {
       fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/How-to-become-a-Web-Developer/events?photo-host=public&page=20&sig_id=${process.env.REACT_APP_MEETUPAPIKEY}`)
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
        <Card className="d-inline-block" key={i}>
          <CardBody>
          <img  src={`https://api.mapbox.com/v4/mapbox.outdoors/pin-s-rocket+285A98(${event.venue.lon},${event.venue.lat})/${event.venue.lon},${event.venue.lat},16/300x300@2x.png?access_token=${process.env.REACT_APP_MAPKEY}`} alt="Mapbox Map of -73.7638,42.6564" className="w-50 float-right"/>

            <CardTitle>{event.local_date}       {event.local_time}</CardTitle>
            <CardSubtitle>{event.name}</CardSubtitle>
             <CardText><div dangerouslySetInnerHTML={{ __html: event.description }} /></CardText>
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

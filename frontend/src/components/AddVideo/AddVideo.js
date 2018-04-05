import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';

class AddVideo extends React.Component {

  constructor(props) {
    super(props);

    var props = this.props.data
    props.content = "https://www.youtube.com/watch?v=" + props.content
    this.state = {
      form: props,
      fields: {},
      errors: {}
    }
  }
  //TODO optimize this validation and make it work for the other fields
  //https://waffle.io/devugees/digital-notice-board/cards/5ac2807897f9dd00256b555a
  onChange(field, value) {
    let data = {
      ...this.state.form
    };
    console.log(field);

    if (field === "title") {
      let regExp = /^[a-zA-Z0-9_|]+$/;
      let match = value.match(regExp);
      console.log(match);
      if (match) {
        this.setState({errors: { [field]: "Nice" }, fields: {[field]: false}})
      } else {
        this.setState({errors: { [field]: "No special characters" }, fields: {[field]: true}})
      }
    }

    if (field === "description") {
      let regExp = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
      let match = value.match(regExp);
      console.log(match);
      if (match) {
        this.setState({ errors: { [field]: "Nice Text" }, fields: { [field]: false } })
      } else {
        this.setState({ errors: { [field]: "Please Write A Date" }, fields: { [field]: true } })
      }
    }

   if((field === "displayDate") ||  (field === "expiryDate")){
        var displayDate1 = document.getElementById("displayDate").value;
        var dis = Date.parse(displayDate1);
         var expiryDate1 = document.getElementById("expiryDate").value;
         var exp = Date.parse(expiryDate1)  
        if(dis > exp){
          this.setState({errors: { [field]: "please put a valid date" }, fields: {[field]: true}})
        }else{
          this.setState({errors: { [field]: "right" }, fields: {[field]: false}})
        }


    if (field === "content") {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#\&\?]*).*/;
      var match = value.match(regExp);
      console.log(match);
      if (match && match[2].length === 11) {
        this.setState({errors: { [field]: "Nice" }, fields: {[field]: false}})
      } else {
        this.setState({errors: { [field]: "Doesnt look like a valid youtube link" }, fields: {[field]: true}})
      }
    }
   
    
    data[field] = value
    data[`validation_${field}`] = value
    this.setState({form: data})
    }
  }

  render() {
    var check = undefined
    return (
      <form onSubmit={this.props.sendChildInfo} className="AddVideo">
        <h1>Add Video</h1>

        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="description" invalid={this.state.fields["description"]} valid={!this.state.fields["description"]} value={this.state.form.description}/>
          <FormFeedback>{this.state.errors["description"]}</FormFeedback>
          <FormFeedback valid>{this.state.errors["description"]}</FormFeedback>
        </FormGroup>


        <FormGroup>
          <Label>Description</Label>
          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="description" invalid={this.state.fields["description"]} valid={!this.state.fields["description"]} value={this.state.form.description} className="form-control" type="text" />
          <FormFeedback>{this.state.errors["description"]}</FormFeedback>
          <FormFeedback valid>{this.state.errors["description"]}</FormFeedback>
        </FormGroup>


        <FormGroup>
          <Label>Display Date</Label>
          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} invalid={this.state.fields["displayDate"]} valid={!this.state.fields["displayDate"]} className="form-control" id="displayDate" type="date" value=""/>
          <FormFeedback>{this.state.errors["displayDate"]}</FormFeedback>
          <FormFeedback valid>{this.state.errors["displayDate"]}</FormFeedback>
        </FormGroup>


        <FormGroup>
          <Label>Expiry Date</Label>
          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} invalid={this.state.fields["expiryDate"]} valid={!this.state.fields["expiryDate"]} className="form-control" id="expiryDate" type="date" value=""/>
          <FormFeedback>{this.state.errors["expiryDate"]}</FormFeedback>
          <FormFeedback valid>{this.state.errors["expiryDate"]}</FormFeedback>
        </FormGroup>


        <FormGroup>
          <Label for="examplePassword">Youtube-Link</Label>
          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>
          <FormFeedback>{this.state.errors["content"]}</FormFeedback>
          <FormFeedback valid>{this.state.errors["content"]}</FormFeedback>
        </FormGroup>

        <a href="#">Delete this Video</a>
        <br/>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default AddVideo;

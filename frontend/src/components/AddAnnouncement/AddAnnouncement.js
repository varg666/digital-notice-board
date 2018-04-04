import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';

class AddAnnouncement extends React.Component {
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
		render(){
		return(
			<form onSubmit={this.props.sendChildInfo} className="AddVideo">
        		<h1>Add Announcement</h1>
    			<FormGroup>
		          <Label for="examplePassword">Title</Label>
		          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="title" invalid={this.state.fields["title"]} valid={!this.state.fields["title"]} value={this.state.form.title}/>
		          <FormFeedback>{this.state.errors["title"]}</FormFeedback>
		          <FormFeedback valid>{this.state.errors["title"]}</FormFeedback>
		        </FormGroup>
		        <label>Description</label>
		        <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="description" type="text" value={this.state.form.description}/>
		        <label>Display Date</label>
		        <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="displayDate" type="date" value={this.state.form.displayDate}/>
		        <label>Expiry Date</label>
		        <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="expiryDate" type="date" value={this.state.form.expiryDate}/>
		        <FormGroup>
		          <Label for="examplePassword">Content</Label>
		          <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>
		          <FormFeedback>{this.state.errors["content"]}</FormFeedback>
		          <FormFeedback valid>{this.state.errors["content"]}</FormFeedback>
		        </FormGroup>
		        	<a href="#">Delete this Announcement</a>
		        	<br/>
		        <button type="submit" className="btn btn-primary">Add</button>
		    </form>
		);
	}
}
export default AddAnnouncement;

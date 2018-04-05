import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';
  


class AddPhoto extends React.Component {
        constructor(props) {
            super(props);

            var props = this.props.data
            props.content = props.content
            this.state = {
              form: props,
              fields: {},
              errors: {}
            }
        } 


        render(props){
            return(
                <Form onSubmit={this.props.sendChildInfo}>
                    <h1>Add Photos</h1>
                    
                    <FormGroup >
                        <Label className="col-xs-3" for="exampleText">Title</Label>
                        <Input type="text" onChange={(e) => this.onChange(e.target.id, e.target.value)} id="title" invalid={this.state.fields["title"]} valid={!this.state.fields["title"]} value={this.state.form.title} />
                        <FormFeedback>{this.state.errors["title"]}</FormFeedback>
                        <FormFeedback valid>{this.state.errors["title"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="text" onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="description" type="text" value={this.state.form.description} id="description" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">    
                            <label className="mr-sm-2">Display Date</label>
                            <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="displayDate" type="date" value={this.state.form.displayDate}/>
                    </FormGroup>    
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">    
                            <label className="mr-sm-2">Expiry Date</label>
                            <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="expiryDate" type="date" value={this.state.form.expiryDate}/>
                    </FormGroup>  
                    <FormGroup>
                            <Label for="examplePassword">Photo-Link</Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>
                            <button type="submit" className="btn btn-primary">Add Photo</button>
                            <br />
                            <Label for="examplePassword">Photo-Link</Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>
                            <button type="submit" className="btn btn-primary">Add Photo</button>
                            <br />
                            <Label for="examplePassword">Photo-Link</Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>
                            <button type="submit" className="btn btn-primary">Add Photo</button>

                            <FormFeedback>{this.state.errors["content"]}</FormFeedback>
                            <FormFeedback valid>{this.state.errors["content"]}</FormFeedback>
                    </FormGroup>
                        <button type="submit" className="btn btn-info">Save Changes</button>
                        <a href="#">Delete this Slide</a>
                        <br/>
                </Form>

        
            );
        }
}


export default AddPhoto;


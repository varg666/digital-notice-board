import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';
  


class AddPhoto extends React.Component {
        constructor(props) {
            super(props);
            var props = this.props.data; 
            props.displayDate = props.displayDate ? props.displayDate.slice(0, -14) : props.displayDate; 
            props.expiryDate = props.expiryDate ? props.expiryDate.slice(0, -14) : props.expiryDate;  
            
            props.content = props.content
            this.state = {
              form: props,
              fields: {},
              errors: {},
              
            }
        } 

        onChange(field, value) {
            const data = {...this.state.form};
            data[field] = value;
            this.setState = {form: data};
        }
        
       
        render(props){
            return(
                <Form onSubmit={e => this.props.sendChildInfo(e, this)} > 

                    <h1>Add Photos</h1>
                    
                    <FormGroup >
                        <Label for="exampleText">Title</Label>
                        <Input type="textarea" onChange={(e) => this.onChange(e.target.id, e.target.value)} id="title" invalid={this.state.fields["title"]} valid={!this.state.fields["title"]} value={this.state.form.title} /> 
                        <FormFeedback>{this.state.errors["title"]}</FormFeedback>
                        <FormFeedback valid>{this.state.errors["title"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="description" type="textarea" value={this.state.form.description} id="description" /> 

                    </FormGroup>
                    <FormGroup>    
                            <label>Display Date</label>
                            <Input  
                            className="form-control"  
                            id="displayDate"  
                            type="date"  
                            defaultValue={this.state.form.displayDate}  
                            invalid={this.state.fields["displayDate"]}  
                            valid={!this.state.fields["displayDate"]}  
                            onChange={(e) => this.onChange(e.target.id, e.target.value)}  
                            /> 
                            <FormFeedback>{this.state.errors["displayDate"]}</FormFeedback> 
                            <FormFeedback valid>{this.state.errors["displayDate"]}</FormFeedback> 
                    </FormGroup>    
                    <FormGroup >    
                            <label>Expiry Date</label>
                            <Input  
                            className="form-control"  
                            id="expiryDate"  
                            type="date"  
                            defaultValue={this.state.form.expiryDate}  
                            invalid={this.state.fields["expiryDate"]}  
                            valid={!this.state.fields["expiryDate"]} 
                            onChange={(e) => this.onChange(e.target.id, e.target.value)}  
                            /> 
                            <FormFeedback>{this.state.errors["expiryDate"]}</FormFeedback> 
                            <FormFeedback valid>{this.state.errors["expiryDate"]}</FormFeedback> 

                    </FormGroup>  
                    <FormGroup>
                            <Label for="examplePassword"></Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>  
                            <Label for="examplePassword"></Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>   
                            <Label for="examplePassword"></Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>  
                            <Label for="examplePassword"></Label>
                            <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/>  
                            <FormFeedback>{this.state.errors["content"]}</FormFeedback>
                            <FormFeedback valid>{this.state.errors["content"]}</FormFeedback>
                    </FormGroup>
                    <div class="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">{this.props.data._id ? "Edit" : "Add"}</button> 
                        <a href="#">Delete this Slide</a>
                        
                    </div>    
                </Form>

        
            );
        }
}


export default AddPhoto;


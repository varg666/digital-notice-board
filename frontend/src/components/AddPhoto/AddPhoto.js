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
              errors: {},
              setOfImages : []
            }
        } 

        onChange(field, value) {
            let data = {...this.state.form};
            data[field] = value;
            this.setState = {form: data};
        }
        setOfImages(event){
            event.preventDefault();
            this.setState({
                setOfImages: ["hello", "hi"]  
            })
            
        }
        render(props){
            return(
                <Form onSubmit={this.props.sendChildInfo}>
                    <h1>Add Photos</h1>
                    
                    <FormGroup >
                        <Label for="exampleText">Title</Label>
                        <Input type="text" onChange={(e) => this.onChange(e.target.id, e.target.value)} id="title" invalid={this.state.fields["title"]} valid={!this.state.fields["title"]} value={this.state.form.title} />
                        <FormFeedback>{this.state.errors["title"]}</FormFeedback>
                        <FormFeedback valid>{this.state.errors["title"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="text" onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="description" type="text" value={this.state.form.description} id="description" />
                    </FormGroup>
                    <FormGroup>    
                            <label>Display Date</label>
                            <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="displayDate" type="date" value={this.state.form.displayDate}/>
                    </FormGroup>    
                    <FormGroup >    
                            <label>Expiry Date</label>
                            <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control" id="expiryDate" type="date" value={this.state.form.expiryDate}/>
                    </FormGroup>  
                    <FormGroup>
                            <Label for="examplePassword"></Label>
                            <div>
                                <input type="file" name={this.state.setOfImages} id="image-uploder" className="file-loader" multiple />
                                <button onClick={this.setOfImages.bind(this)}>+</button>
                                <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/> 
                            <button type="submit" className="btn btn-primary">Add Photo</button>
                            </div>
                            <br />
                            <Label for="examplePassword"></Label>
                            <div>
                                <input type="file" name={this.state.setOfImages} id="image-uploder" className="file-loader" multiple />
                                <button onClick={this.setOfImages.bind(this)}>+</button>
                                <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/> 
                            <button type="submit" className="btn btn-primary">Add Photo</button>
                            </div>
                            <br />
                            <Label for="examplePassword"></Label>
                            <div>
                                <input type="file" name={this.state.setOfImages} id="image-uploder" className="file-loader" multiple />
                                <button onClick={this.setOfImages.bind(this)}>+</button>
                                <Input onChange={(e) => this.onChange(e.target.id, e.target.value)} id="content" invalid={this.state.fields["content"]} valid={!this.state.fields["content"]} value={this.state.form.content}/> 
                            <button type="submit" className="btn btn-primary">Add Photo</button>
                            </div>

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


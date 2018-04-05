import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input} from 'reactstrap';


class Search extends Component {

  render() {
    return (
      <Form inline className="mt-4 mx-auto"> 
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label check className="mb-2 mr-sm-2">
            <Input type="checkbox" /> Show also expired sildes
          </Label>
        <Input 
        type="search" 
        name="search" 
        id="exampleSearch" 
        placeholder="" 
        />
        </FormGroup>
          <Button color="primary">Search</Button>
        </Form>
    );   
  }
}

export default Search;

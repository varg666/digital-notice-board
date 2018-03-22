import React, { Component } from 'react';


const style = {
  display: 'inline-block',
  padding: '3px',
  textAlign: 'center',
  margin: '3px',
  border: '1px solid black'
    };

class Search extends Component {

  render() {
   
   
    return (
        <div style={style}>
            <i>X</i>
            <input type="search"/>
            <input type="checkbox" name="checkbox"/> Show also expired sildes

        </div>
     
      )
      
}
}

export default Search;

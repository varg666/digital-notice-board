import React, { Component } from 'react';
// import Option from '../option/Option';



class ModulesSideBar extends Component {
    


  render() {
    let icon = (<p>event icon</p> )
    if(this.props.data.type === 'video'){
      icon =(<p>video picture</p>)
    } else if (this.props.data.type === 'image'){
      icon =(<p>image picture</p>)

    }else if (this.props.data.type === 'code'){
      icon =(<img src="https://media.istockphoto.com/vectors/vector-code-editor-icon-vector-id528678591" />)
    };
   
    return (
      <div className="ModulesSideBar">
    <h4>{this.props.data.title}</h4>
      <p>{this.props.data.description}</p>
      <div className="picture-container">
      {icon}
      </div>
      <div className="date-container">
      <p>start at: {this.props.data.displayDate} </p>
       <p>start at: {this.props.data.expiryDate} </p>
      </div>
      </div>
     
    );
  }
}

export default ModulesSideBar;

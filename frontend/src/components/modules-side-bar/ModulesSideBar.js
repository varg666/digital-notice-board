import React, { Component } from 'react';
// import Option from '../option/Option';
import getIcons from '../../constants/icons.js';





class ModulesSideBar extends Component {
    


  render(props) {
    let icon = (<p>event icon</p> )
    if(this.props.data.type === 'video'){
      icon =(<p>video picture</p>)
    } else if (this.props.data.type === 'image'){
      icon =(<p>image picture</p>)
    }
   
    return (
      <div className="ModulesSideBar" onClick={this.props.onclick}>
        <h4 onClick={this.props.onclick}>{this.props.data.title}</h4>
        <p onClick={this.props.onclick}>{this.props.data.description}</p>
        <img onClick={this.props.onclick} src={getIcons(this.props.data.type)} />
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

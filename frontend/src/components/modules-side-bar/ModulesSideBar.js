import React, { Component } from 'react';
// import Option from '../option/Option';
import getIcons from '../../constants/icons.js';

class ModulesSideBar extends Component {

  render(props) {
    let icon;
    if(this.props.data.type === 'video'){
      icon =(<p>video picture</p>)
    } else if (this.props.data.type === 'image'){
      icon =(<p>image picture</p>)
    }
   
    return (
      <div className={ `card p-3 mb-3${this.props.current._id === this.props.data._id ? " slide-selected" : ""}`} onClick={(e)=>this.props.handleToggleClick(this)}>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.description}</p>
        <img src={getIcons(this.props.data.type)} />
        </div>
     
    );
  }
}

export default ModulesSideBar;

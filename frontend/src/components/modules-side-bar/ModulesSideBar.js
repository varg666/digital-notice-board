import React, { Component } from 'react';
// import Option from '../option/Option';
import getIcons from '../../constants/icons.js';

class ModulesSideBar extends Component {
     constructor(props){
      super(props);
      this.state = {
         moduleData: {
            "id": '',
            "type": '',
            "title": '',
            "description": '',
            "expiryDate": '',
            "displayDate": '',
            "content": []

       } 

}

}
 
  render(props) {
    let icon;
    if(this.props.data.type === 'video'){
      icon =(<p>video picture</p>)
    } else if (this.props.data.type === 'image'){
      icon =(<p>image picture</p>)
    }
   
    return (
      <div className="ModulesSideBar slide-selected" onClick={(e)=>this.props.handleToggleClick(this)}>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.description}</p>
        <img src={getIcons(this.props.data.type)} />
        <h4  className='slide-text'>{this.props.data.title}</h4>
        <p className='slide-desc'>{this.props.data.description}</p>
        <div className="date-container slide-text small">
        <p className='slide-text small'>start at: {this.props.data.displayDate} </p>
         <p className='slide-text small'>start at: {this.props.data.expiryDate} </p>
        </div>
        </div>
     
    );
  }
}

export default ModulesSideBar;

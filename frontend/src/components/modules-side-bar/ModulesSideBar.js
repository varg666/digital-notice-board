import React, { Component } from 'react';
import getIcons from '../../constants/icons.js';
import { ListGroup, ListGroupItem} from 'reactstrap';

class ModulesSideBar extends Component {

  render() {
    const iconType = getIcons(this.props.data.type);

    // the active indicator for the current sidebar module slide
    var classes = (this.props.current && this.props.current._id === this.props.data._id ) ? " slide-selected" : ""
    return (
      <ListGroup>
        <ListGroupItem className={ `type_${this.props.data.type.toLowerCase()} card p-3 mb-3 ${classes}`} onClick={(e)=>this.props.handleToggleClick(this)}>
          <div action className="d-flex flex-column flex-md-row align-items-center">
            <div className="mr-md-3">
              <i className={`fa fa-3x ${iconType}`}></i>
            </div>
            <div className="text ">
              <h4>{this.props.data.title}</h4>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default ModulesSideBar;

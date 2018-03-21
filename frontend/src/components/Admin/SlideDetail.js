import React, { Component, PropTypes } from 'react';


 const style = {
  display: 'inline-block',
  padding: '10rem',
  textAlign: 'center',
  margin: '3px',
  border: '1px solid black',
  position:"absolute",
  right:"1.2rem",
  top:"1.2rem"

    };

  const style2={
    border:'1px solid black'
  };

  const style3={
   position:"absolute",
   right:"0",
   top:"0"
  }


class SildeDetail extends Component {

    render(props) {
        return (

          <div>
          <a style={style3} href="#" >Logout</a>


            <div style={style}>
              <p>Silde Details</p><br/>

              <p><strong>Title</strong></p>
              <p style={style2}>{this.props.type} sdsd</p>

              <p><strong>Description</strong></p>
              <p style={style2}>{this.props.description} Hello Description</p>

              <p><strong>DisplayDate</strong></p>
              <p style={style2}>{this.props.displayDate}</p>

              <p><strong>ExpiryDate</strong></p>
              <p style={style2}>{this.props.expiryDate}</p>


              <p><strong>YoutubeCode</strong></p>
              <p style={style2}>{this.props.youtubeCode} Hello YoutubeCode</p>

              <a href="#"> Delete this Silde</a><br/>

              <button> save changeas</button>


            </div>
          </div>
            
        );
    }
}


export default SildeDetail;

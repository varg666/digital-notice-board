import React from 'react';
import Spinner from '../spinner/Spinner';
import './style.css';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
const moment = require('moment');

class Github extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commits: {},
      issues: {},
      loading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/repos/${this.props.data.title}/commits`).then(resp => resp.json()).then((commits) => {
      console.log(commits[0])
      commits = commits.filter(f => !f.commit.message.includes("Merge"))
      fetch(`https://api.github.com/repos/${this.props.data.title}/issues`).then(resp => resp.json()).then((issues) => {
        console.log(issues[0])
        this.setState({commits: commits, issues: issues, loading: false})
      })
      .catch(err => {
        console.log("Error: ", err)
      });
    })
    .catch(err => {
      console.log("Error: ", err)
    });
  }

  render() {
  var commits = ""
  var issues = ""
    if (this.state.commits.length > 0) {
      commits = this.state.commits.map((item, value) => (  
        <ListGroupItem className="repo d-flex justify-content-between" color={item.state === "closed" ? "success" : ""}>
          <span>{item.commit.message} - </span>
          <span>{moment( item.commit.author.date , "YYYYMMDD").fromNow()}
            <small className="text-muted"> - { item.author.login }</small>
          </span>
        </ListGroupItem>  
      ))
    }
    if (this.state.issues.length > 0) {
      issues = this.state.issues.map((item, value) => (  
        <ListGroupItem className="repo d-flex justify-content-between" color={item.state === "closed" ? "success" : ""}>
          <span>{item.title} - </span>
          <span>{moment( item.created_atdate , "YYYYMMDD").fromNow()}
            <small className="text-muted"> - { item.assignees.map(a => a.login) }
          </small>
        </span>
      </ListGroupItem>  
      ))
    }
    return (
      <div className="d-flex">
        {this.state.loading 
          ? <Spinner />
           : <div>
               <ListGroup >
                <h2>Commits:</h2>
                {commits}
              </ListGroup>
              <ListGroup >
                <h2>Issues:</h2>
                {issues}
              </ListGroup>
            </div>
        }
      </div>
    );
  }

}

export default Github;

import React from 'react';
import {Button} from 'reactstrap';
import {Progress} from 'reactstrap';

import './SlideTimeline.css';
class SlideTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      time: props.time
    }

    this.progressTimer = this.progressTimer.bind(this);
  };

  componentWillReceiveProps() {
    clearInterval(this.interval)
    this.interval = setInterval(this.progressTimer, this.calculateSeconds(this.state.time));
    this.setState({progress: 0});

  }
  calculateSeconds(time) {
    return (time / 100) * (1000)
  }
  componentDidMount() {
    this.interval = setInterval(this.progressTimer, this.calculateSeconds(this.state.time));
  }

  progressTimer() {
    this.setState(prevState => {
      return {
        progress: prevState.progress + 1
      }
    })
  }

  render() {
    if (this.state.progress >= 100) {
      clearInterval(this.interval)
    }
    return (
      <div>
        <div className="text-center">{this.state.progress}%</div>
        <Progress value={this.state.progress}/>
      </div>
    );
  }
}

export default SlideTimeline;

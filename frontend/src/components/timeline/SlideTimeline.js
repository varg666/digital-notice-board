import React from 'react';
import { PROGRESS_BAR_SPEED } from '../../constants/misc.js'
import { Button } from 'reactstrap';
import { Progress } from 'reactstrap';

class SlideTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress:0,
            time:props.time     
        }  

        this.progressTimer = this.progressTimer.bind(this); 
    };

    calculateSeconds(time){
        return (time / 100) * (1000)
    }
    componentDidMount() {
        this.interval = setInterval(this.progressTimer, this.calculateSeconds(this.state.time));
    } 
    
    progressTimer () {
        this.setState(prevState => {
            return { progress:prevState.progress + 1 }
        })
    } 

    render() {
        if(this.state.progress === 100){
                clearInterval(this.interval)
        }
            return(
                <div>
                    <div className="text-center">{this.state.progress}%</div>
                    <Progress value={this.state.progress} />
                </div>    
            );
    }    
}




export default SlideTimeline;
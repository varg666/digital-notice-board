import React from 'react';
import { Button } from 'reactstrap';
import { Progress } from 'reactstrap';

class SlideTimeline extends React.Component {
    constructor(props) {
        super(props);
    }



        render() {
            return(
                <div>
                    <div className="text-center">25%</div>
                    <Progress value="25" />
                </div>    
            );
        }    
}




export default SlideTimeline;
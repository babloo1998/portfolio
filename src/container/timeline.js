import React from 'react';
import { timelineData } from '../data/data';
import TimelineItem from '../components/timeline';

const Timeline = () =>
class Timeline extends React.Component{
    render(){
        return(
            <div>
                {
                    timelineData.length > 0 && (
                        <div className="timeline-container">
                            {timelineData.map((data, idx) => {       
                                return (
                                    <TimelineItem data={data} key={idx} />
                                )
                                 }
                            )}
                            
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Timeline();

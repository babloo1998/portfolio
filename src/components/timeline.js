import React from 'react';

class TimelineItem extends React.Component {
    render(){
        const data = this.props.data;
        {console.log("@@@@@@",this.props)}
        return(
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag" style={{ background: this.props.data.category.color }}>
                        {data.category.tag}
                    </span>
                    <time>{data.date}</time>
                    <p>{data.text}</p>
                    {data.link && (
                        <a
                            href={data.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.link.text}
                        </a>
                    )}
                    <span className="circle" />
                </div>
            </div>
        );
    }
}

export default TimelineItem;
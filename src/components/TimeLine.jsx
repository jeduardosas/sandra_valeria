import React from 'react'
import { dataXV } from '../../data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'


const {time_line} = dataXV
const TimeLine = () => {
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={`${time_line.settings.lineColor}`}
      >
        {
          time_line.protocol.map(item=>(
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${item.color}`, 
                              color:`${item.textColor}`,
                              marginRight:'10px' }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}`}}
              date={`${item.time}`}
              dateClassName='custom-date-color'
              iconStyle={{background: `${item.color}`, 
                          fill: '#fff', 
                          boxShadow:`0 0 0 4px ${item.color}`}} 
              icon={<img src={`/img/icons/${item.icon}.svg`} alt={`ico-${item.icon}`} className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine
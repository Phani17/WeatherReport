import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function average(data){
  console.log('data--',data.length);
  return _.round(_.sum(data)/data.length)
}

export default (props)=>{
  return (
    <div>
        <Sparklines data={props.data} svgWidth={180} svgHeight={120}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
    </div>
  )
}

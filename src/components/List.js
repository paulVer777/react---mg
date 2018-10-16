import React from 'react'
import Item from './Item'

const List = (props) => {

    return (
        <div>
          {props.data.map((value,index) => <Item obj={value} key={value.id} removeItem={props.removeItem}/>)}   
        </div>
    )
 }

 export default List
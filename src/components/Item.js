import React from 'react'

const Item = (props) => {
    return (
        <div>
          <p>{props.obj.title}</p>
          <button onClick={ () => props.removeItem(props.obj.id)}>Remove</button>
        </div>
    )
}

export default Item
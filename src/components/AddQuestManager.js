import React from 'react'

export default class AddQuestManager extends React.Component {

    state = {
        error: undefined
    }

   getText = (event) =>{
     
     event.preventDefault()
     const text=event.target.elements.quest.value
     const error = this.props.addTodo(text)
     
     this.setState((prevState) => ({error}))
     event.target.elements.quest.value=''
   }

    render (){
        return (
            <div>
           {this.state.error&&<p>{this.state.error}</p>}
            <form onSubmit={this.getText}>
            <input type='text' name='quest'/>
            <button>Add</button>
            </form>
            </div>
        )
    }
  }
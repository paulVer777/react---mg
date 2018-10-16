import React from 'react'
import Header from './Header'
import uuidv4 from 'uuid/v4'
import List from './List'
import AddQuestManager from './AddQuestManager'

 export default class Todo extends React.Component {

    state = {
        todos:[]
    }
    removeItem = (id) => {

        this.setState((prevState)=>({todos:prevState.todos.filter((value,index) => value.id !== id )}))
    }

    addTodo = (text) => {
       
         if(!text){
             return 'Please provide correct task name'
         }
       else if( !this.state.todos.every((value,index) => value.title !== text )){
           return 'Task name already exists'
       }

        this.setState((prevState)=>({todos:prevState.todos.concat({
         title:text,
         id:uuidv4()
        })}),()=>console.log(this.state.todos))
    }

    render(){

      return (
          <div>
          <Header title='Todos app'/>
          <AddQuestManager addTodo={this.addTodo}/>
          <List data={this.state.todos}
          removeItem={this.removeItem}
          />
          </div>
      )
    }
    componentDidUpdate(){
        localStorage.setItem('Todos',JSON.stringify(this.state.todos))
    }
    componentDidMount(){
       
        const todos = localStorage.getItem('Todos')
        
        try {
           console.log(todos)
           const  parsedTodos = JSON.parse(todos)
            
         this.setState((prevState) => ({todos:parsedTodos}))

        } catch(err){
           
        }
        
    }
}





          
          
          
          
          
         
        



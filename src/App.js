import React from 'react'
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    console.log("Changed", id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      // console.log(prevState.todos)
      // console.log(updatedTodos)
      return {
        item: updatedTodos
      }
    })
  }

  render() {
    const todoItemObj = this.state.todos.map(item =>
      <TodoItem key={item.id} id={item.id} text={item.text} item={item} completed={item.completed} handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        <h1>TODOs LIST</h1>
        {todoItemObj}
        <Footer />
      </div>
    )
  }
}

// function App() {
//   const todoItemObj = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)
// return (
//   <div className="todo-list">
//     <h1>TODOs LIST</h1>
//     {todoItemObj}
//   </div>
// )
// }


export default App;

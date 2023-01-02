
import './App.css';
import { Component } from 'react';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  onInsert = (text) => {
    alert('추가(App)')
    const {todoList}=this.state
    alert(text)
    const id = todoList.length + 1
    const todoObj = { id: id, text: text, checked: false }
    const concatedList = todoList.concat(todoObj)
    this.setState({
      todoList:concatedList
    })
  }

  deleteTodo = (id) => {
    const {todoList}=this.state
    alert('삭제(App)')
    alert(id)//2
    //filter ~
    const filteredList = todoList.filter(
      (data)=>(data.id !== id)
    )
    this.setState({
      todoList:filteredList
    })
  }

  updateTodo = (id, text) => {
    const {todoList}=this.state
    alert("수정(App)")
    alert('id:' + id)
    alert('text:' + text)
    //map, ... , 삼항연산자
    const todoObj = { id: id, text: text, checked: false }
    const updatedList = todoList.map(
      (data)=>(data.id === id)? ({...todoObj}):(data)
    )
    this.setState({
      todoList:updatedList
    })
  }

  checkDone = (id, checked) => {
    alert("수정(App)")
    alert('id:' + id)
    alert('text:' + checked)
    //map, ... , 삼항연산자
    const {todoList} = this.state
    const updatedList = todoList.map(
      (data)=>(data.id === id) ? ({...data,checked:!checked}):(data)
    )
    this.setState({
      todoList:updatedList
    })
  }

  render() {
    const { todoList } = this.state
    
    return (
      <div className='App'>
        <div className='container'>
          <TodoInsert onInsert={this.onInsert} />
          <TodoList todoList={todoList}
                    deleteTodo={this.deleteTodo}
                    updateTodo={this.updateTodo}
                    checkDone={this.checkDone}
          />
        </div>
      </div>
    )
  }
}
export default App;


import '../css/TodoList.css';
import { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  deleteTodo = (id) => {
    alert('삭제(TodoList)')
    alert(id)
    this.props.deleteTodo(id)
    //App의 삭제함수
  }

  updateTodo = (id, text) => {
    alert("수정(TodoList)")
    alert('id:' + id)
    alert('text:' + text)
    this.props.updateTodo(id, text)
    //App의 수정함수
  }

  checkDone = (id,checked) =>{
    alert("체크!(TodoList)")
    alert("id : "+id)
    alert("checked:"+checked)
    this.props.checkDone(id, checked)
  }

    render() {
        const {todoList}=this.props
        const result = todoList.map(
        (data, index)=>(<Todo key={data.id}
            id={data.id} text={data.text}
            checked={data.checked}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
            checkDone={this.checkDone}/>)
        )


    return (
      <div className='todo-list'>
            {result}
      </div>
    )
  }
}
export default TodoList;

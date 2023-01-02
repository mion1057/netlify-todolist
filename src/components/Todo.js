
import '../css/Todo.css';
import { Component } from 'react';

class Todo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
      edit: false
    }
  }

  deleteTodo = () => {
    alert('삭제(Todo)')
    const { id } = this.props
    this.props.deleteTodo(id)
    //TodoList의 삭제함수
  }

  updateTodo = () => {
    alert('수정(Todo)')
    const { id } = this.props
    const { text, edit } = this.state
    if (edit===true) {
      this.props.updateTodo(id, text)
      //TodoList의 수정함수  
    }
    this.setState({
      edit:!edit
    })
  }

  checkDone = () =>{
    const {id} = this.props
    const {checked} = this.props;
    
    this.props.checkDone(id, checked);
  }

  textChange = (e) => {
    console.log(e.target.value)
    this.setState({
      text:e.target.value
    })
  }


    render() {
      const { id, text, checked } = this.props
      const { edit } =this.state
      if (edit === false) {
        return (
          <div className='todo'>
                <div className='todocheck'>
                  <span>
                    <input type="checkbox" onClick={this.checkDone} />
                  </span>
              
                  <span className={checked ? 'done':''}>{text}</span>
                </div>
                <div className='buttonchk'>
                  <button onClick={this.deleteTodo}>삭제</button>
                  <button onClick={this.updateTodo}>수정</button>
                </div>
                
          </div>
        )
      } else if (edit===true) {
        return (
          <div className='todo'>
                <span>
                  <input type="checkbox" onClick={this.checkDone} />
                </span>
                <span>{id}</span>
                <span><input type='text' defaultValue={text}
                        onChange={this.textChange} /></span>
                <button onClick={this.deleteTodo}>삭제</button>
                <button onClick={this.updateTodo}>수정</button>
          </div>
        )
      }
  }
}
export default Todo;

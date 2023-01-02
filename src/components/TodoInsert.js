
import '../css/TodoInsert.css';
import { Component } from 'react';

class TodoInsert extends Component{
  constructor(props) {
    super(props)
    this.state = {
        text:''
    }
  }

  textChange = (e) => {
      console.log(e.target.value)
      this.setState({
          text:e.target.value
      })
  }
    
  onInsert = () => {
    const {text} = this.state
    
    if(text === ''){
      alert('할일을 입력해주세요')
      return
    }
    alert("추가(TodoInsert)")
    alert(text)
    this.props.onInsert(text)
    this.setState({
      text: " "
    })
    this.textReset()
  }
  
  textReset = () =>{
    document.querySelector('input').value = " "
  }
    
  render() {
    
    return (
      <div className='todo-insert'>
          <input type='text' onChange={this.textChange} />
          <button onClick={this.onInsert}>add</button>
      </div>
    )
  }
}
export default TodoInsert;

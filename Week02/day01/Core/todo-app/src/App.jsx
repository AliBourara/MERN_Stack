import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'

function App() {
  const [todoList, setTodoList] = useState([
    {content:"Get the Python Belt",isCompleted:true},
    {content:"Go the MARS",isCompleted:false},
    {content:"Get Married",isCompleted:false}
  ])
  const deleteTodo = (id) => {
    console.log("Deleted Todo",todoList[id] );
    const filteredTodoList = todoList.filter((todo,idx)=> idx != id)
    setTodoList(filteredTodoList)
  }
  return (
    <>
    <h1>Plan Your Day</h1>
    <Form todoList={todoList} setTodoList={setTodoList}/>
    <Todo todoList={todoList} deleteTodo = {deleteTodo} setTodoList={setTodoList}/>
    </>
  )
}

export default App

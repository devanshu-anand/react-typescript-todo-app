import React from 'react'
import { Todo } from '../models/Todo'
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./style.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  const handleDone = (id:number) => {
    setTodos(todos.map((t) => t.id === id ? {...t, isDone: !t.isDone} : t))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }
    return (
    <form className='todos_single'>
        {   
            todo.isDone ? (
                <s className='todos_single_text'>{todo.todo}</s>

            ) : (
                <span className='todos_single_text'>{todo.todo}</span>
                
            )
        }
        <div>
            <span className='icon'>
                <AiFillEdit />
            </span>
            <span className='icon' onClick={(e) => handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
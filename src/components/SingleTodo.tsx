import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models/Todo'
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./style.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((t) => t.id === id ? { ...t, isDone: !t.isDone } : t))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id))
    }

    const handleEdit = (e: React.FormEvent ,todoId: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === todoId ? {...todo, todo: editTodo} : todo)));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit])
    
    return (
        <form className='todos_single' onSubmit={(e) => {handleEdit(e,todo.id)}}>
            {
                edit ? (
                    <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos_single_text' ref={inputRef}/>
                ) :
                    todo.isDone ? (
                        <s className='todos_single_text'>{todo.todo}</s>

                    ) : (
                        <span className='todos_single_text'>{todo.todo}</span>

                    )

            }
            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
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
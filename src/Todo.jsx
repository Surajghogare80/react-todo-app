import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isdone: false }])
    let [newTodo, setNewTodos] = useState("")

    let add = () => {
        setTodos((prevtodos) => {
            return [...prevtodos, { task: newTodo, id: uuidv4(), isdone: false }]
        })
        setNewTodos("")
    }

    let updateTodoValue = (event) => {
        setNewTodos(event.target.value)
    };

    let Delete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    let UpperCaseAll = () => {
        setTodos((prevtodos) => (
            prevtodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }

            }))
        )
    };

    let Markdone = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isdone: true,
                    }
                } else {
                    return todo
                }
            })
        )
    }



    return (
        <div>
            <h2>Todo App</h2>
            <input placeholder="Enter your task" value={newTodo} onChange={updateTodoValue}></input> &nbsp;&nbsp;
            <button onClick={add}>Add Task</button>
            <br></br>
            <h4></h4>
            <p>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>
                            <span style={todo.isdone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={() => Delete(todo.id)}>delete</button>
                            <button onClick={() => Markdone(todo.id)}>Mark done</button>

                        </li>
                    })
                }
            </p>

            <br />
            <button onClick={UpperCaseAll}>UpperCase</button>
            <br />
        </div>
    )
}
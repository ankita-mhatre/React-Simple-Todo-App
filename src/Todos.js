import React from 'react';

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}} >
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : ( 
         <p className="center"> You have no Todo's left, yay!!!</p>
    ) 
return (

    <div className="todo collection">
    {todoList}
    </div>
)
}
export default Todos;
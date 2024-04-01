import React from "react";
import Check from "./Check";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className={cn("flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full", {
                'line-through': todo.isCompleted,
            })}
        >
            <button className="flex items-center" onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={cn({'line-through': todo.isCompleted})}>
                    {todo.title}
                </span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrash size={22} className="text-gray-600 hover:text-pink-400 transition-colors ease-linear duration-300"/>
            </button>
        </div>
    )
}

export default TodoItem;
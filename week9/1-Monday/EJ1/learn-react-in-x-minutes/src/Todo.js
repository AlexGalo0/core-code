import React from 'react'

export default function Todo({todos}) {
    return (
        todos.map(todo => {
            return <Todo todo={todo} /:
        })
    )
}
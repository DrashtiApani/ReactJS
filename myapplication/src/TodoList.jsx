import React from 'react'

function TodoList({ todo }) {
    return (
        <>
            <h1>TodoList</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((i) => {
                            return (
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default TodoList
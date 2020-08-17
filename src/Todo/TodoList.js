import React from 'react';

import TodoItem from './TodoItem'

// styles for component
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

// todos = props
export default function TodoList(props){
    return(
        <ul style={styles.ul}>
            {props.todos.map(todo => {
                return <TodoItem todo={todo} />
            })}

        </ul>
    ); 
}
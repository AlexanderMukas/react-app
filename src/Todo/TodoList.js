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


export default function TodoList(){
    return(
        <ul style={styles.ul}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    ); 
}
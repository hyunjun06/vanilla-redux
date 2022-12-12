import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ todos, addTodo }) {
    const [text, setText] = useState("");

    const onChange = (event) => {
        setText(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(event.target.elements[0].value);
        setText("");
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button type="submit">add</button>
            </form>
            <ul>
                {todos.map((todo) => <Todo text={todo.text} key={todo.id} id={todo.id}/>)}
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
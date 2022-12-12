import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function Todo({ text, onClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onClick}>X</button>
            </Link>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)) 
    }
};

export default connect(null, mapDispatchToProps)(Todo);
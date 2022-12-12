import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
    const { id } = useParams();

    return (
        <>
            <h1>Detail</h1>
            <h2>{toDos.find((todo) => todo.id === parseInt(id))?.text}</h2>
        </>
    );
}

const mapStateToProps = (state) => {
    return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
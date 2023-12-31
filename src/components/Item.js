import React from 'react';
import Container from './Container';

function Item({searchTerm}) {
    return (
        <div>
            <h2>{searchTerm} Picture</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    );
}

export default Item;
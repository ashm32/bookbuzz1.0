import Column from "../Column";
import "./bookcard.css";
import React, { useState } from 'react';

const BookCard = (props) => {
    // Function to open a Google search link for the book or ISBN
    const goShop = (event) => {
        event.preventDefault();
        console.log('props @Google',  props.isbn);
        const searchTerm = props.type === 'OTHER' ? encodeURIComponent(props.title) + ' Book' : encodeURIComponent(props.isbn);
        const url = `https://www.google.com/search?q=${searchTerm}`;
        window.open(url, '_blank');
    };

    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle the visibility of additional text
    const revealText = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Column size="lg-6" id="bookInfo">
            <article className={`bookCard text-center mb-5 ${isVisible ? 'visible' : 'hidden'}`} id={props.id}>
                <div className="summary">
                    <h3>{props.title}</h3>
                    <p className="author">by {props.author}</p>
                    {props.image}
                    <p id="description" className="fst-italic">{props.description}</p>
                    <button className="fixed-bottom" onClick={revealText}>...</button>
                </div>
                <div className="cardfooter fixed-bottom">
                    <small className="fixed-bottom" id="isbn">{props.type === 'OTHER' ? '' : 'ISBN:'} {props.isbn}</small>
                    <button type="button" id="shopButton" onClick={goShop} className="btn outline mb-4 fixed-bottom">SHOP</button>
                </div>
            </article>
        </Column>
    );
}

export default BookCard;

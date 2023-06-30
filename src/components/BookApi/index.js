import React, { useEffect, useState } from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard';
import Row from "./../Row";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children+subject:"; // Base URL for the Google Books API
const NUMBER = "&maxResults=40"; // Maximum number of results to fetch
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE"; // Your Google Books API key

const BookApi = ({ searchQuery, setSubmitError, setDataNull }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Function to fetch book data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}${searchQuery}${NUMBER}${APIKEY}`);
        if (response.data) {
          // Filter the response data for books with required information
          const filteredData = response.data.items.filter(item =>
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.thumbnail &&
            item.volumeInfo.description &&
            item.volumeInfo.maturityRating === 'NOT_MATURE'
          );

          // Function to shuffle the filtered data and select first 10 books
          const shuffleResponse = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }

            const selectedBooks = arr.slice(0, 10);

            // Save selected books to local storage
            localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
            setBooks(selectedBooks);
          };

          shuffleResponse(filteredData);
        }
      } catch (error) {
        console.error(error);
        setSubmitError(true);
      }
    };

    // Fetch data when searchQuery or setSubmitError changes
    fetchData();
  }, [searchQuery, setSubmitError]);

  return (
    <section className="mx-auto mt-4" id="bookResults">
      <h2 className="my-4 mx-auto p-2">Book Search Results:</h2>
      <Row className="bookInfo">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />}
            description={book.volumeInfo.description}
            isbn={book.volumeInfo.industryIdentifiers[0].identifier}
            type={book.volumeInfo.industryIdentifiers[0].type}
          />
        ))}
      </Row>
    </section>
  );
};

export default BookApi;

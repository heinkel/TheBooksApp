import React, { useState, useEffect, useRef } from "react";
import BookcardList from "./BookcardList";
import "./app.css";
import axios from "axios";

function App() {
  const categoryEl = useRef();
  const [bookcards, setBookcards] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
      )
      .then((res) => {
        const categories = new Set();
        res.data.map((e) => {
          e.categories.map((c) => {
            if (c != "") {
              categories.add(c.toLowerCase());
            }
          });
        });
        setCategories(Array.from(categories).sort());
        // collecting all available categories
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
      )
      .then((res) => {
        setBookcards(
          res.data.map((book, index) => {
          
            return {
              id: `${index}-${Date.now()}`,
              image: book.thumbnailUrl,
              longDescription: book.longDescription,
              title: book.title,
              authors: book.authors,
              shortDes: book.shortDescription,
              isbn:book.isbn,
              categories: book.categories,
              pages: book.pageCount,
              status: book.status
            };
          })
        );
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //code logic goes here to prevent a submit in the normal way and force to go through my react code.
  };

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category"> Category </label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}{" "}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <button className="btn">Search</button>
        </div>
      </form>
      <div className="container">
        <BookcardList bookcards={bookcards} />
      </div>
    </>
  );
}

export default App;

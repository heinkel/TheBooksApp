import React, { useState } from "react";

export default function Bookcard({ bookcard }) {
  const [flip, setFlip] = useState(false); 


  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <img
          className="book-cover"
          alt={bookcard.title}
          src={bookcard.image}
        ></img>
        <div className="title">{bookcard.title}</div>
        <div className="card-authors">
          {bookcard.authors.map((a) => {
            return (
              <div className="card-author" key={a}>
                {a}
              </div>
            );
          })}
        </div>
        <div className="description">{bookcard.shortDes}</div>
      </div>
      <div className="back">
          <div> <h2> Full Description:</h2></div>
          <div className="fulldes"> <b> ISBN: </b> {bookcard.isbn}</div>
          <div className="fulldes"> <b>Status:</b> {bookcard.status.toLowerCase()}</div>
          <div className="fulldes "><b>Category : </b> {bookcard.categories} </div>
          <div className="fulldes "><b>Published: </b> {bookcard.publishedDate} </div>
          <div className="fulldes extended"><b></b> {bookcard.longDescription} </div>
          <div className="fulldes "><b>Page count: </b> {bookcard.pages} </div> 
       </div>
      
    </div>
  );
}

//Asining
// when user clicks in a card state change to the other state showing full content or going back o simple

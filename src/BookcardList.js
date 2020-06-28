import React from "react";
import Bookcard from "./Bookcard";

export default function BookcardList({ bookcards }) {
  return (
    <div className="card-grid">
      {bookcards.map((bookcard) => {
        return <Bookcard bookcard={bookcard} key={bookcard.id} />;
      })}
    </div>
  );
}
// I am using a unique key for every passed elements to optimize rendering avoiding rerendering effects.

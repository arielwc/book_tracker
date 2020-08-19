import React from "react";

const SearchResult = (props) => {
<<<<<<< HEAD
    return (
        <div className="searchResultContainer">
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
            </div>
            <button className="addBook" type="submit" onClick="">Add to Book List</button>
        </div>
    );
}
=======
  return (
    <div className="searchResultContainer">
      <div className="description">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>
          Published Date:{" "}
          {props.published === "0000"
            ? "Not available"
            : props.published.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};
>>>>>>> 803426185fc76a9622dbb0d387aa9acbe805df6f

export default SearchResult;

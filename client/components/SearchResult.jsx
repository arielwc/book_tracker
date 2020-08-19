import React from "react";

const SearchResult = (props) => {
  const onSubmit = () => {
    console.log("Submit");
  };
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
        <button type="submit" onClick={onSubmit}>
          Add to List
        </button>
      </div>
    </div>
  );
};

export default SearchResult;

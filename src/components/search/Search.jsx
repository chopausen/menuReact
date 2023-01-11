import { Button } from "@mui/material";
import React from "react";
import "./Search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-div">
        <input
          type="text"
          className="search-bar"
          placeholder="Search your favorites:"
        />{" "}
        <Button type="submit" color="success">
          Search
        </Button>
      </div>
    );
  }
}

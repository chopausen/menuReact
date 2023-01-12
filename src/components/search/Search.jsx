import React from "react";
import './Search.css'

export default class Search extends React.Component {

  render() {
    return (
      <form className="search-input" onKeyUp={this.props.onKeyUp}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search your favorites:"
              onChange={this.props.handleChange}
              />
          </form>
    )
  }
}

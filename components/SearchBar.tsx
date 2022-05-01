import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div><input type='text' name='q' id='search-bar' placeholder='Search School Name' autoComplete='off'/></div>
    )
  }
}
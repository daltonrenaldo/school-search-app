
import React from 'react';
import { eventEmitter } from '../lib/event';

export default class SearchBar extends React.Component {
  queryInput;

  constructor(props) {
    super(props);
    this.queryInput = React.createRef<HTMLInputElement>();
  }

  onSearch = (e) => {
    e.preventDefault();
    const searchQuery = this.queryInput.current.value.trim();
    if (searchQuery.length) {
      eventEmitter.emit('searchChange', searchQuery);
    }
  }

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={this.onSearch}>
          <input className="form-control" ref={this.queryInput} type='text' name='q' id='search-bar' placeholder='Search School Name' autoComplete='off'/>
          <input className="d-none" type="submit" />
        </form>
      </div>
    )
  }
}
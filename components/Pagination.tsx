import React from 'react';
import { eventEmitter } from '../lib/event';
import SchoolCard, { SchoolCardProps } from './SchoolCard';

export interface PaginationProps {
  page: number;
  total: number;
  per_page: number;
}

export default class Pagination extends React.Component<PaginationProps> {
  handlePageChange(e, newPage) {
    e.preventDefault();
    eventEmitter.emit('pageChange', newPage);
  }

  render() {
    const { total, per_page, page } = this.props;
    const numberOfPages = Math.ceil(total / per_page);
    const prevLink = page > 0 ? <li>
      <a onClick={(e) => this.handlePageChange(e, page - 1)}>{`<< Prev`}</a>
    </li> : null;

    const nextLink = page < numberOfPages - 1 ? <li>
      <a onClick={(e) => this.handlePageChange(e, page + 1)}>{`Next >>`}</a>
    </li> : null;

    return (
      <div>
        <ul>
          { prevLink }
          { nextLink }
        </ul>
      </div>
    )
  }
}
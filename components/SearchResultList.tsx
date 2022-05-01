import React from 'react';
import SchoolCard, { SchoolCardProps } from './SchoolCard';

export interface SearchResultListProps {
  schools: SchoolCardProps[]
}

export default class SearchResultList extends React.Component<SearchResultListProps> {
  render() {
    return (
      <div>
        {
          this.props.schools.map(school => (
            <SchoolCard key={school.id} {...school}></SchoolCard>
          ))
        }
      </div>
    )
  }
}
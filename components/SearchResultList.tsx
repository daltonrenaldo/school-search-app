import React from 'react';
import SchoolCard from './SchoolCard';

export default class SearchResultList extends React.Component {
  render() {
    return (
      <div>
        <SchoolCard
          website='https://google.com'
          state='CT' 
          name='Test School' 
          mapUrl='https://maps.googleapis.com/maps/api/staticmap?center=40.747747,-73.983492&zoom=12&size=400x400&key=REPLACE_ME'
          zip='10000'
          city='Somewhere'
        />
        <SchoolCard
          website='https://google.com'
          state='CT'
          name='Test School'
          mapUrl='https://maps.googleapis.com/maps/api/staticmap?center=40.747747,-73.983492&zoom=12&size=400x400&key=REPLACE_ME'
          zip='10000'
          city='Somewhere'
        />
      </div>
    )
  }
}
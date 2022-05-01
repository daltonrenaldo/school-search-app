import React from 'react';

export interface SchoolCardProps {
  name: string;
  mapUrl?: string;
  state: string;
  city: string;
  website: string;
  zip: string;
}

export default class SchoolCard extends React.Component<SchoolCardProps> {

  buildAddress = () => {
    return (
      <address className='card-text'>
        { this.props.city } { this.props.state }, { this.props.zip }
      </address>
    )
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ this.props.mapUrl } className="img-fluid rounded-start" alt="map"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <a href={this.props.website} target="_blank">{this.props.name}</a>
              </h5>
              { this.buildAddress() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
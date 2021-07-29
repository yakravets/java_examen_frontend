import React from 'react';
import { PageHeader } from 'antd';

export default function ListTrips() {
    return (
      <>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Trips"
          subTitle="List all trips"
        />
      </>);
  }
import React from 'react';
import { PageHeader } from 'antd';

export default function ListAirports() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Airports"
        subTitle="List all airports"
      />
    </>);
}
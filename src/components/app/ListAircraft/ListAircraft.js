import React from 'react';
import { PageHeader } from 'antd';

export default function ListAircraft() {
    return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Aircraft"
        subTitle="List all aircrafts"
      />
    </>);
  }
import React from 'react';
import { PageHeader } from 'antd';

export default function About() {
    return (
      <>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="About"
          subTitle="Non comercial project. With love to you."
        />
      </>);
  }
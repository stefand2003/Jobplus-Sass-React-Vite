import React from 'react';
import './container.scss';

export default function container(props) {
  const { children } = props;
  return <div className="container">{children}</div>;
}

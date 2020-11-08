import React from 'react';

export default function Chat({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

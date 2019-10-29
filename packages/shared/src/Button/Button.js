import React from 'react';

import './Button.scss';

export function Button({ children }) {
  return <button className="button">{ children }</button>;
}

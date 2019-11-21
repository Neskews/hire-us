import React  from 'react';
import Header from './Header/Connector';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import "../style/reset.scss";

/**
 * Renders an header and the current process.
 */
export const Base = () => {
  return (
    <div>
      <Header />
      <ErrorBoundary />
    </div>
  );
}
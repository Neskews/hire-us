import React, { Suspense } from 'react';
import { Process } from './Process/Connector';

const Error = React.lazy(
  () => import("./Error/Connector")
);

export const ErrorBoundary = () => {
  return (
    <div>
      <Suspense fallback="">
        <Error />
      </Suspense>
      <Process />
    </div>
  );
}
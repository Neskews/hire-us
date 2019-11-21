import React, { Suspense } from 'react';
import { Layout } from "../../Layout/Layout";
import { Search } from './Search/Connector';
import { PROCESSES } from "../../../api/reducers/process/processes";

const getComponentByProcess = (process) => {
  if (process === PROCESSES.search) return <Search />
  if (process === PROCESSES.bands) {
    const Bands = React.lazy(() => import("./Bands/Connector"));

    return (
      <Suspense fallback="laden">
        <Bands />
      </Suspense>
    )
  }
  if (process === PROCESSES.login) {
    const LoginWrapper = React.lazy(() => import("./Login/LoginWrapper/LoginWrapper"));

    return (
      <Suspense fallback="laden">
        <LoginWrapper />
      </Suspense>
    )
  }
  if (process === PROCESSES.bandArea) {
    const BandArea = React.lazy(() => import("./Login/BandArea/Connector"))
    return (
      <Suspense fallback="laden">
        <BandArea />
      </Suspense>
    );
  }
  if (process === PROCESSES.info) {
    const Info = React.lazy(() => import("./Info/Connector"));

    return (
      <Suspense fallback="laden">
        <Info />
      </Suspense>
    )
  }
  return <div>TODO</div>
}

/**
 * Decides which major process to show.
 */
export const Process = ({ process }) => {
  return (
    <Layout>
      {getComponentByProcess(process)}
    </Layout>
  );
}


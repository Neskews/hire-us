import React, { Suspense } from 'react';
import { Layout } from "../../Layout/Layout";
import { Search } from './Search/Connector';
import { Bands } from "./Bands/Connector";
import { BandArea } from "./Login/BandArea/Connector";
import { PROCESSES } from "../../../api/reducers/process/processes";
import { Info } from "./Info/Connector";

const getComponentByProcess = (process) => {
  if (process === PROCESSES.search) return <Search />
  if (process === PROCESSES.bands) return <Bands />
  if (process === PROCESSES.login) {
    const LoginWrapper = React.lazy(() => import("./Login/LoginWrapper/LoginWrapper"));
    return (
      <Suspense fallback="laden">
        <LoginWrapper />
      </Suspense>
    )
  }
  if (process === PROCESSES.bandArea) return <BandArea />
  if (process === PROCESSES.info) return <Info />
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


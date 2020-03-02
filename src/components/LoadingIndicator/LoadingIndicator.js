import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="loader">
        <Loader type="ThreeDots" color="#2BAD60" />
      </div>
    )
  );
};

export default LoadingIndicator;

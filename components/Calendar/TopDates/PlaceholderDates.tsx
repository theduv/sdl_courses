import { Fragment } from "react";

const classPulsate =
  "animate animate-pulse text-center w-52 font-bold mb-6 text-gray-800 bg-gray-800 text-gray-800 text-opacity-40 p-2 rounded-md border border-gray-600";

const PlaceholderDates = () => {
  return (
    <Fragment>
      <div className={classPulsate}>Lundi 2 Oct.</div>
      <div className={classPulsate}>Lundi 2 Oct.</div>
      <div className={classPulsate}>Lundi 2 Oct.</div>
      <div className={classPulsate}>Lundi 2 Oct.</div>
      <div className={classPulsate}>Lundi 2 Oct.</div>
    </Fragment>
  );
};

export default PlaceholderDates;

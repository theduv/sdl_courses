import { Fragment } from "react";
import SingleDate from "./SingleDate";
import PlaceholderDates from "./placeholderDates";

interface TopDatesProps {
  displayedDates: Array<Date>;
}

const TopDates = (props: TopDatesProps) => {
  return props.displayedDates.length !== 0 ? (
    props.displayedDates.map((date: Date, index: number) => {
      return <SingleDate date={date} index={index} key={`${index}-date`} />;
    })
  ) : (
    <PlaceholderDates />
  );
};

export default TopDates;

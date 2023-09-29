const getLastMonday = (targetDate: Date) => {
  const lastMonday = targetDate;
  lastMonday.setDate(lastMonday.getDate() - ((lastMonday.getDay() + 6) % 7));

  return lastMonday;
};

const getWeekAtDate = (targetDate: Date) => {
  const monday = getLastMonday(targetDate);
  const tuesday = new Date();
  tuesday.setDate(monday.getDate() + 1);
  const wednesday = new Date();
  wednesday.setDate(monday.getDate() + 2);
  const thirsday = new Date();
  thirsday.setDate(monday.getDate() + 3);
  const friday = new Date();
  friday.setDate(monday.getDate() + 4);
  const saturday = new Date();
  saturday.setDate(monday.getDate() + 5);
  const sunday = new Date();
  sunday.setDate(monday.getDate() + 6);

  return [monday, tuesday, wednesday, thirsday, friday, saturday, sunday];
};

const arrayMonths = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const arrayHours = [
  "08-09",
  "09-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "15-17",
  "17-18",
  "18-19",
];

export { getWeekAtDate, arrayHours, arrayMonths };

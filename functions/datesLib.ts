const getLastMonday = (targetDate: Date) => {
  const lastMonday = targetDate;
  lastMonday.setDate(lastMonday.getDate() - ((lastMonday.getDay() + 6) % 7));
  lastMonday.setHours(0, 0, 0, 0);

  return lastMonday;
};

const getWeekAtDate = (targetDate: Date) => {
  const monday = getLastMonday(targetDate);
  const tuesday = new Date(monday);
  tuesday.setDate(monday.getDate() + 1);
  const wednesday = new Date(monday);
  wednesday.setDate(monday.getDate() + 2);
  const thirsday = new Date(monday);
  thirsday.setDate(monday.getDate() + 3);
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);

  return [monday, tuesday, wednesday, thirsday, friday];
};

const getCustomDateFromDate = (targetDate: Date) => {
  return {
    date: targetDate.getDate(),
    month: targetDate.getMonth(),
    year: targetDate.getFullYear(),
    hour: targetDate.getHours(),
  };
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
  "08h - 09h",
  "09h - 10h",
  "10h - 11h",
  "11h - 12h",
  "12h - 13h",
  "13h - 14h",
  "14h - 15h",
  "15h - 16h",
  "15h - 17h",
  "17h - 18h",
  "18h - 19h",
];

const arrayDays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export {
  getWeekAtDate,
  arrayHours,
  arrayMonths,
  arrayDays,
  getCustomDateFromDate,
};

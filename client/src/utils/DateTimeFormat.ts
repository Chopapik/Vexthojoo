const DateTimeFormat = (date: string | Date) => {
  date = new Date(date);

  if (date) {
    const formattedDate = date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${formattedDate} ${formattedTime}`;
  } else {
    return "n/a";
  }
};

export default DateTimeFormat;

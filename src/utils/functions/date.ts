export const parseDate = (dateString: string) => {
  // Convert string to Date object
  const date = new Date(dateString);

  // Format the date
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

type countdownType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const countdown = (endDate: number) => {
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (endDate > 0) {
    timeLeft = {
      days: Math.floor(endDate / (1000 * 60 * 60 * 24)),
      hours: Math.floor((endDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((endDate % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((endDate % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

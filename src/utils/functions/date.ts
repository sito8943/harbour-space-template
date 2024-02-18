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

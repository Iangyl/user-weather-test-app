export function findTodayDateIndex(dateArray) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < dateArray.length; i++) {
      const givenDate = new Date(dateArray[i]);
      givenDate.setHours(0, 0, 0, 0);

      if (today.getTime() === givenDate.getTime()) {
        return i;
      }
    }

    return -1;
  } catch (error) {
    return -1;
  }
}

export function getDayNameFromDate(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}


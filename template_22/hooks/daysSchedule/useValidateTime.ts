export const useValidateTime = (startTime: string, endTime: string) => {
  const [startHours, startMinutes] = startTime.split(':');
  const [endHours, endMinutes] = endTime.split(':');

  if (startHours && endHours && startMinutes && endMinutes) {
    const parsedStartHours = parseInt(startHours, 10);
    const parsedStartMinutes = parseInt(startMinutes, 10);
    const parsedEndHours = parseInt(endHours, 10);
    const parsedEndMinutes = parseInt(endMinutes, 10);

    const isValidStartHours =
      !isNaN(parsedStartHours) &&
      parsedStartHours >= 0 &&
      parsedStartHours <= 23;
    const isValidStartMinutes =
      !isNaN(parsedStartMinutes) &&
      parsedStartMinutes >= 0 &&
      parsedStartMinutes <= 59;
    const isValidEndHours =
      !isNaN(parsedEndHours) && parsedEndHours >= 0 && parsedEndHours <= 23;
    const isValidEndMinutes =
      !isNaN(parsedEndMinutes) &&
      parsedEndMinutes >= 0 &&
      parsedEndMinutes <= 59;

    const isStartTimeValid = isValidStartHours && isValidStartMinutes;
    const isEndTimeValid = isValidEndHours && isValidEndMinutes;

    const isStartTimeBeforeEndTime =
      parsedStartHours < parsedEndHours ||
      (parsedStartHours === parsedEndHours &&
        parsedStartMinutes < parsedEndMinutes);

    return isStartTimeValid && isEndTimeValid && isStartTimeBeforeEndTime;
  }
  return false;
};

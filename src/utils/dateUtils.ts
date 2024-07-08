export const formatDateToISO = (
  dateString: string | undefined
): string | undefined => {
  if (!dateString) {
    return undefined;
  }

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
    return date.toISOString().split("T")[0];
  } catch (error) {
    console.error("Error formatting date:", error);
    return undefined;
  }
};

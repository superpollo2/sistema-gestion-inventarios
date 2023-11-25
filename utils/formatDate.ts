export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
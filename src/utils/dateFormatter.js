/**
 * Date Formatter
 * 
 * Formats the current date to be used for
 * the input element of `type="date"` required
 * for the `max` attribute.
 *
 * Accepted Format: yyyy-mm-dd
 * Example: 2000-01-01 (day & month must be in a two digit format)
 *
 * @returns formatted date
 */
export const dateFormatter = () => {
  const date = new Date();
  let day, month, year;

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  // Check to ensure that day & month are in a two digit format, as required
  // for the `max` attribute.
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
};

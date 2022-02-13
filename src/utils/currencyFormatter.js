/**
 * Currency Formatter
 *
 * These options are needed to round to whole numbers:
 * - minimumFractionDigits: 0, (prints 500.10 as £500.1)
 * - maximumFractionDigits: 0, (prints 500.99 as £501)
 *
 */
export const currencyFormatter = new Intl.NumberFormat("en-gb", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default (amount, currency, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount)
}

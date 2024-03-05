export default function formatNumber(number) {
  return new Intl.NumberFormat('en-GB', {}).format(number);
}

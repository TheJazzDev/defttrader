export const formatPostsDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.getDate();
  const suffixes = ['st', 'nd', 'rd'];
  const suffix =
    day % 100 >= 11 && day % 100 <= 13
      ? 'th'
      : suffixes[(day % 10) - 1] || 'th';

  return `${day}${suffix} ${month}, ${year}`;
};

export const formatChartsDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString().slice(2);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();

  return `${day} ${month} '${year}`;
};

export const formatChartsNumber = (number) => {
  return number.toLocaleString();
};

export const convertNum = (number) => {
  const k = 1000;
  const converted =
    Math.abs(number) >= k ? (number / k).toFixed(1) + 'k' : number;
  return converted;
};

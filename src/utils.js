// eslint-disable-next-line import/prefer-default-export
export const getRandomNum = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
};

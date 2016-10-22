export const complete = (percent) => {
  return percent === 100;
}

export const starting = (percent) => {
  return percent < 40;
}

export const inProgress = (percent) => {
  return percent >= 40 && percent < 100;
}

export const distance = (x1, y1, x2, y2) => {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x*x + y*y);
}

export const collide = (x1, y1, x2, y2, radius) => {
  if (distance(x1, y1, x2, y2) <= radius) {
    return true;
  } else {
    return false;
  }
}

export const getBWValue = (red, green, blue, isReversed) => {
  const detect = 2;
  if (!isReversed) {
    return 255 - Math.floor((red + green + blue) / detect);
  } else {
    return Math.floor((red + green + blue) / detect);
  }

}
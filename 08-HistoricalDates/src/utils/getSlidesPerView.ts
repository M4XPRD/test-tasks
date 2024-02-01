const getSlidesPerView = (width: number) => {
  if (width > 2000) {
    return 4;
  } if (width < 450) {
    return 2;
  }
  return 3;
};

export default getSlidesPerView;

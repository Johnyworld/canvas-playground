export const coverSizing = (frameWidth, frameHeight, imageWidth, imageHeight) => {

  // 가로가 세로의 몇 배인지 숫자.
  const frameRatio = frameWidth / frameHeight;
  const imageRatio = imageWidth / imageHeight;

  const newImage = {
    x: 0,
    y: 0,
    width: frameWidth,
    height: frameHeight,
  }

  if (imageRatio > frameRatio) {
    // 프레임보다 이미지가 가로로 넘치기 때문에, 이미지의 가로 크기와 시작 위치를 보정해준다.

    // 위 newImage 를 정의할 때, newImage 의 height는 frame과 100% 로 늘어났거나 줄어들었지만 width의 정확한 크기는 아직 알 수 없다.
    // 따라서 이미지의 height 가 늘어났거나 줄어든 비율 만큼 newImage 의 width를 보정해줘야 한다.
    const heightRatio = frameHeight / imageHeight;
    newImage.width = Math.round(imageWidth * heightRatio);

    // 이미지의 width가 프레임의 width 를 초과한 만큼의 절반 위치를 X- 로 옮겨줘야 이미지가 가운데 위치하게 된다.
    newImage.x = (frameWidth - newImage.width) / 2;

  } else {
    // 프레임보다 이미지가 세로로 넘치기 때문에, 이미지의 세로 크기와 시작 위치를 보정해준다.
    const widthRatio = frameWidth / imageWidth;
    newImage.height = Math.round(imageHeight * widthRatio);
    newImage.y = (frameHeight - newImage.height) / 2;
  }

  return newImage;
}


export const getImageColor = (context, width, height, x, y) => {
  const imgData = context.getImageData(0, 0, width, height);

  const pixelIndex = (x + y * width) * 4;

  return {
    red: imgData.data[pixelIndex],
    green: imgData.data[pixelIndex + 1],
    blue: imgData.data[pixelIndex + 2],
    alpha: imgData.data[pixelIndex + 3],
  }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmothingEnable = true;


class PICalculator {
  percent(number) {
    return Math.PI * (number / 50);
  }

  degree(number) {
    return Math.PI * (number / 180);
  }

  c(number) {
    return Math.PI * number;
  }
}

const PI = new PICalculator();

let rgb = 0xf3316e;
let tempRgb = 0x000000;

ctx.beginPath();
ctx.arc( 200, 200, 100, PI.degree(0), PI.degree(360) );
// x, y, size, start, end


setInterval(() => {
  rgb += (tempRgb - rgb) * 0.12;

  const red = (rgb >> 16) & 0xFF; // 16진수 2자리수당 2진수 8자리다. (>> 16) 연산을 하게 되면서 2진수 기준 16자리, 8진수 기준 4자리수를 줄이면서 최대값 255 가 된다.
  const green = (rgb >> 8) & 0xFF; // 8진수 기준 2자리수만 줄이면서 최대값 255*255 가 된다.
  const blue = (rgb & 0xFF);

  /*
    0xFF 는 255다.
    위 코드에서 비트논리연산자 & 과 함께 0xFF (255) 를 넣어줬는데, 그렇게 되면 수의 합이 255를 절대 넘을 수 없게 된다.

    & 비트연산자 : 두 피연산자의 각 자리 비트의 값이 둘다 1일 경우 해당하는 자리에 1을 반환합니다.
    x & 0xFF(255) 로 연산하게 되면, 255 는 0b11111111 이기 때문에 (비트가 모두 1)
    x 가 255 이하일 경우 반환되는 값이 x 와 같다. ex) 1111 & 1001 = 1001
  */

  console.log(
    {red, green, blue},
    rgb >> 16,
    (rgb >> 16) & 0xFF,
    rgb >> 8,
    (rgb >> 8) & 0xFF
  )
  
  ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;;
  ctx.fill();
}, 100);



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const tension = 2;

const pos = {
  from: {
    x: 500,
    y: 200,
  }, 
  to: {
    x: 500,
    y: 600,
  },
  in: {
    x: 300,
    y: 50,
  }
}

const mid = {
  x: pos.from.x + ((pos.to.x - pos.from.x) / 2),
  y: pos.from.y + ((pos.to.y - pos.from.y) / 2),
}

const vel = {
  x: 0,
  y: 0,
}

let tense = 1;

const str = {
  x: undefined,
  y: undefined,
}

const mouse = {
  x: undefined,
  y: undefined,
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
});

setInterval(() => {
  ctx.clearRect(0, 0, 1024, 960);
  if ( mouse.x !== undefined && mouse.y !== undefined ) {
    ctx.beginPath();
    ctx.moveTo(pos.from.x, pos.from.y);
    if (
      mouse.x > pos.from.x - pos.in.x && 
      mouse.x < pos.from.x + pos.in.x &&
      mouse.y > pos.from.y - pos.in.y &&
      mouse.y < pos.to.y + pos.in.y
    ) {
      vel.x = 120;
      vel.y = 5;
      str.x = mouse.x;
      str.y = mouse.y;
      ctx.quadraticCurveTo(str.x, str.y, pos.to.x, pos.to.y)
    } else {
      if ( str.x > mid.x ) {
        str.x -= vel.x;
        if (vel.x > 0) vel.x -= tense;
      } else {
        str.x += vel.x;
        if (vel.x > 0) vel.x -= tense;
      }
      if ( str.y > mid.y ) {
        str.y -= vel.y;
        if (vel.y > 0) vel.y -= tense/10;
      } else {
        str.y += vel.y;
        if (vel.y > 0) vel.y -= tense/10;
      }
      ctx.quadraticCurveTo(str.x - vel.x / 4 + Math.random() * (vel.x / 2), str.y, pos.to.x, pos.to.y)
    }
    ctx.stroke();
  }
}, 10);
function raindropEffect() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  // Set canvas dimensions to window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Set variables for raindrop properties
  let minDrops = 100;
  let maxDrops = 500;
  let raindrops = [];
  let minSize = 1;
  let maxSize = 6;
  let minSpeed = 2;
  let maxSpeed = 50;

  // Generate raindrops with random properties
  for (
    let i = 0;
    i < Math.floor(Math.random() * (maxDrops - minDrops + 1)) + minDrops;
    i++
  ) {
    let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    let speed =
      Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    raindrops.push({
      size: size,
      speed: speed,
      x: x,
      y: y,
    });
  }

  // Function to draw raindrops on canvas
  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < raindrops.length; i++) {
      ctx.beginPath();
      ctx.arc(
        raindrops[i].x,
        raindrops[i].y,
        raindrops[i].size,
        0,
        6 * Math.PI
      );
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  }

  // Function to update raindrop positions
  function updateRain() {
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].y += raindrops[i].speed;
      if (raindrops[i].y > canvas.height) {
        raindrops[i].y = 0;
      }
    }
  }

  // Run raindrop animation
  setInterval(function () {
    drawRain();
    updateRain();
  }, 50);
}

// Run raindrop effect function on page load
window.onload = raindropEffect;

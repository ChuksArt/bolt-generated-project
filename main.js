const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const ball = {
      x: canvas.width / 2,
      y: 0,
      radius: 10,
      speed: 5,
      gravity: 1,
      dx: 0,
      dy: 0
    };

    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    function updateBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      ball.dy += ball.gravity;

      if (ball.y + ball.radius > canvas.height) {
        ball.dy *= -1;
        ball.y -= ball.radius;
      }

      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
      }
    }

    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowLeft':
          ball.dx = -ball.speed;
          break;
        case 'ArrowRight':
          ball.dx = ball.speed;
          break;
        case 'ArrowUp':
          ball.dy = -ball.speed;
          break;
        case 'ArrowDown':
          ball.dy = ball.speed;
          break;
      }
    }

    function handleKeyUp(event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          ball.dx = 0;
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          ball.dy = 0;
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      updateBall();
      requestAnimationFrame(animate);
    }

    animate();

$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  var vw;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
  });

  // Auto-start the birthday sequence
  function startAutomaticSequence() {
    // Step 1: Turn on lights (after 2 seconds)
    setTimeout(() => {
      turnOnLights();
    }, 2000);

    // Step 2: Play music (after 8 seconds)
    setTimeout(() => {
      playMusic();
    }, 8000);

    // Step 3: Banner coming (after 15 seconds)
    setTimeout(() => {
      bannerComing();
    }, 15000);

    // Step 4: Balloons flying (after 22 seconds)
    setTimeout(() => {
      balloonsFlying();
    }, 22000);

    // Step 5: Cake fade in (after 30 seconds)
    setTimeout(() => {
      cakeFadeIn();
    }, 30000);

    // Step 6: Light candle (after 35 seconds)
    setTimeout(() => {
      lightCandle();
    }, 35000);

    // Step 7: Wish message (after 40 seconds)
    setTimeout(() => {
      wishMessage();
    }, 40000);

    // Step 8: Story message (after 45 seconds)
    setTimeout(() => {
      showStory();
    }, 45000);
  }

  function turnOnLights() {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $("#turn_on").fadeOut("slow");
  }

  function playMusic() {
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $("#play").fadeOut("slow");
  }

  function bannerComing() {
    $(".bannar").addClass("bannar-come");
    $("#bannar_coming").fadeOut("slow");
  }

  function balloonsFlying() {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    $("#balloons_flying").fadeOut("slow");
  }

  function cakeFadeIn() {
    // Don't show cake here - it will be shown at the end of story
    $("#cake_fadein").fadeOut("slow");
  }

  function lightCandle() {
    $(".fuego").fadeIn("slow");
    $("#light_candle").fadeOut("slow");
  }

  function wishMessage() {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $("#wish_message").fadeOut("slow");

    // Start cam tien background when letters appear
    startCamTienBackground();
  }

  // Cam Tien Background Functions
  function createCamTienItem(imageNumber, x, y) {
    const camTienContainer = document.getElementById("cam-tien-container");
    const camTien = document.createElement("div");
    camTien.className = `cam-tien-item cam-tien-${imageNumber}`;

    // Random animation classes - can combine multiple
    const primaryAnimations = [
      "cam-tien-float-1",
      "cam-tien-float-2",
      "cam-tien-float-3",
      "cam-tien-float-4",
      "cam-tien-swing",
      "cam-tien-pulse",
    ];
    const secondaryAnimations = [
      "cam-tien-rotate",
      "cam-tien-bounce",
      "cam-tien-shimmer",
    ];

    // Always add one primary animation
    const randomPrimary =
      primaryAnimations[Math.floor(Math.random() * primaryAnimations.length)];
    camTien.classList.add(randomPrimary);

    // 50% chance to add a secondary animation
    if (Math.random() > 0.5) {
      const randomSecondary =
        secondaryAnimations[
          Math.floor(Math.random() * secondaryAnimations.length)
        ];
      camTien.classList.add(randomSecondary);
    }

    // Use a larger size for better visibility
    const size = 100 + Math.random() * 50; // 100px to 150px
    camTien.style.width = size + "px";
    camTien.style.height = size + "px";

    camTien.style.left = x + "px";
    camTien.style.top = y + "px";

    // Moderate opacity for good visibility
    camTien.style.opacity = 0.5 + Math.random() * 0.3; // 0.5 to 0.8

    // Random border radius for some variety
    if (Math.random() > 0.7) {
      camTien.style.borderRadius = "50%";
    } else if (Math.random() > 0.5) {
      camTien.style.borderRadius = "20px";
    }

    // Add position to tracking array
    const positionData = { x, y, size, element: camTien };
    camTienPositions.push(positionData);

    camTienContainer.appendChild(camTien);

    // Remove after animation cycle - synchronized with set creation
    setTimeout(() => {
      if (camTienContainer.contains(camTien)) {
        camTien.style.transition = "opacity 2s ease";
        camTien.style.opacity = "0";
        setTimeout(() => {
          if (camTienContainer.contains(camTien)) {
            camTienContainer.removeChild(camTien);
            // Remove from position tracking
            camTienPositions = camTienPositions.filter(
              (pos) => pos.element !== camTien
            );
          }
        }, 2000);
      }
    }, 16000); // 16 seconds - leaves 2s gap before next set
  }

  // Array to store positions of existing cam tien items
  let camTienPositions = [];

  // Function to check if new position overlaps with existing ones
  function isPositionValid(x, y, size, minDistance = 150) {
    for (let pos of camTienPositions) {
      const distance = Math.sqrt(
        Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)
      );
      if (distance < minDistance) {
        return false;
      }
    }
    return true;
  }

  // Function to find a valid position around the edges
  function findValidPosition(size, maxAttempts = 10) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      let x, y;

      // Define central area to avoid (where main content is)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const avoidWidth = Math.min(800, window.innerWidth * 0.6);
      const avoidHeight = Math.min(600, window.innerHeight * 0.7);

      // Choose position around the edges (4 zones)
      const zone = Math.floor(Math.random() * 4);

      switch (zone) {
        case 0: // Left edge
          x = Math.random() * (centerX - avoidWidth / 2 - size);
          y = Math.random() * (window.innerHeight - size - 20) + 10;
          break;
        case 1: // Right edge
          x =
            centerX +
            avoidWidth / 2 +
            Math.random() *
              (window.innerWidth - centerX - avoidWidth / 2 - size - 20);
          y = Math.random() * (window.innerHeight - size - 20) + 10;
          break;
        case 2: // Top edge
          x = Math.random() * (window.innerWidth - size - 20) + 10;
          y = Math.random() * (centerY - avoidHeight / 2 - size);
          break;
        case 3: // Bottom edge
          x = Math.random() * (window.innerWidth - size - 20) + 10;
          y =
            centerY +
            avoidHeight / 2 +
            Math.random() *
              (window.innerHeight - centerY - avoidHeight / 2 - size - 20);
          break;
      }

      // Ensure position is within bounds
      x = Math.max(10, Math.min(x, window.innerWidth - size - 10));
      y = Math.max(10, Math.min(y, window.innerHeight - size - 10));

      if (isPositionValid(x, y, size)) {
        return { x, y };
      }
      attempts++;
    }

    // Fallback: random position on edges
    const edge = Math.floor(Math.random() * 4);
    let x, y;
    switch (edge) {
      case 0: // Left
        x = 10;
        y = Math.random() * (window.innerHeight - size - 20) + 10;
        break;
      case 1: // Right
        x = window.innerWidth - size - 10;
        y = Math.random() * (window.innerHeight - size - 20) + 10;
        break;
      case 2: // Top
        x = Math.random() * (window.innerWidth - size - 20) + 10;
        y = 10;
        break;
      case 3: // Bottom
        x = Math.random() * (window.innerWidth - size - 20) + 10;
        y = window.innerHeight - size - 10;
        break;
    }

    return { x, y };
  }

  // Function to create a complete set of 8 unique cam tien images
  function createCompleteCamTienSet() {
    // Clear existing cam tien items
    const camTienContainer = document.getElementById("cam-tien-container");
    camTienContainer.innerHTML = "";
    camTienPositions = [];

    // Create all 8 unique images
    for (let imageNum = 1; imageNum <= 8; imageNum++) {
      setTimeout(() => {
        const size = 100 + Math.random() * 50; // 100px to 150px (larger)
        const position = findValidPosition(size);
        createCamTienItem(imageNum, position.x, position.y);
      }, imageNum * 300); // Stagger creation every 300ms
    }
  }

  function startCamTienBackground() {
    // Create first complete set immediately
    createCompleteCamTienSet();

    // Create new complete sets periodically
    const camTienInterval = setInterval(() => {
      createCompleteCamTienSet();
    }, 18000); // Create new complete set every 18 seconds

    // Store interval globally so it continues forever
    window.camTienInterval = camTienInterval;
  }

  function showStory() {
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");

        var i;
        // Count total number of p elements in .message
        const totalMessages = $(".message p").length;

        function msgLoop(i) {
          $("p:nth-child(" + i + ")")
            .fadeOut("slow")
            .delay(1500)
            .promise()
            .done(function () {
              i = i + 1;
              $("p:nth-child(" + i + ")")
                .fadeIn("slow")
                .delay(2000);
              if (i >= totalMessages) {
                // All messages shown, now show cake and start fireworks
                $("p:nth-child(" + totalMessages + ")")
                  .fadeOut("slow")
                  .promise()
                  .done(function () {
                    $(".cake").fadeIn("fast");
                    // Start fireworks when cake appears at the end
                    setTimeout(() => {
                      startFireworks();
                    }, 500);
                  });
              } else {
                msgLoop(i);
              }
            });
        }
        msgLoop(0);
      });
    $("#story").fadeOut("slow");
  }

  // Add event handler for start button
  $("#start_celebration").click(function () {
    $(this).fadeOut("slow");
    setTimeout(() => {
      startAutomaticSequence();
    }, 500);
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  // Fireworks functions
  function createFirework(x, y, color) {
    const fireworksContainer = document.getElementById("fireworks-container");
    const firework = document.createElement("div");
    firework.className = `firework firework-${color}`;
    firework.style.left = x + "px";
    firework.style.top = y + "px";

    fireworksContainer.appendChild(firework);

    // Animate explosion
    setTimeout(() => {
      firework.classList.add("firework-explode");
      createParticles(x, y, color);
    }, 100);

    // Remove firework after animation
    setTimeout(() => {
      fireworksContainer.removeChild(firework);
    }, 1600);
  }

  function createParticles(x, y, color) {
    const fireworksContainer = document.getElementById("fireworks-container");
    const colors = ["red", "blue", "yellow", "green", "pink", "purple"];
    const particleColor = colors[color - 1] || "red";

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = `firework-particle particle-${particleColor}`;

      const angle = (Math.PI * 2 * i) / 15;
      const velocity = 50 + Math.random() * 100;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;

      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.setProperty("--dx", dx + "px");
      particle.style.setProperty("--dy", dy + "px");

      fireworksContainer.appendChild(particle);

      setTimeout(() => {
        particle.classList.add("firework-particle-animate");
      }, 50);

      setTimeout(() => {
        if (fireworksContainer.contains(particle)) {
          fireworksContainer.removeChild(particle);
        }
      }, 2050);
    }
  }

  function startFireworks() {
    const colors = [1, 2, 3, 4, 5, 6];

    const fireworkInterval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.6) + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];

      createFirework(x, y, color);
    }, 300);

    // Store interval ID globally so it can be stopped if needed
    window.fireworkInterval = fireworkInterval;
  }
});

//alert('hello');

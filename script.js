
document.addEventListener('DOMContentLoaded', function () {
  const draggableElements = document.querySelectorAll('.draggable');

  draggableElements.forEach(element => {
      let isDragging = false;
      let offsetX, offsetY;

      // Start dragging
      element.addEventListener('mousedown', function (e) {
          isDragging = true;
          const rect = element.getBoundingClientRect();
          offsetX = e.clientX - (rect.left + rect.width / 2); // Center horizontally
          offsetY = e.clientY - (rect.top + rect.height / 2); // Center vertically
          element.style.cursor = 'grabbing';
      });

      // Stop dragging
      document.addEventListener('mouseup', function () {
          isDragging = false;
          element.style.cursor = 'grab';
      });

      // Move element while dragging
      document.addEventListener('mousemove', function (e) {
          if (isDragging) {
              let newLeft = e.clientX - offsetX;
              let newTop = e.clientY - offsetY;

              // Ensure the element stays within the viewport
              const maxX = window.innerWidth - element.offsetWidth;
              const maxY = window.innerHeight - element.offsetHeight;

              newLeft = Math.max(0, Math.min(newLeft, maxX));
              newTop = Math.max(0, Math.min(newTop, maxY));

              // Apply new position
              element.style.left = `${newLeft}px`;
              element.style.top = `${newTop}px`;
          }
      });
  });
});



// Music Button
function randomPosition() {
  
  const top = Math.random() * 90; 
  const left = Math.random() * 90; 
  return { top, left };
}

function moveButtons() {
  const playButton = document.querySelector('.play-button');
  const pauseButton = document.querySelector('.pause-button');

 
  const playPosition = randomPosition();
  const pausePosition = randomPosition();


  playButton.style.top = `${playPosition.top}%`;
  playButton.style.left = `${playPosition.left}%`;

  pauseButton.style.top = `${pausePosition.top}%`;
  pauseButton.style.left = `${pausePosition.left}%`;
}


setInterval(moveButtons, 3000);


document.addEventListener('DOMContentLoaded', moveButtons);






document.addEventListener('DOMContentLoaded', function() {
    const fish = document.querySelector('.fish');

    fish.addEventListener('click', function() {
       
        alert('Fish clicked!');
    });
});



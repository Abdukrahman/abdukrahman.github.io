const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closeBtn = document.getElementById('close-btn');


window.onload = function() {
  const contentWidth = popupContent.offsetWidth;
  const contentHeight = popupContent.offsetHeight;

  popup.style.width = contentWidth + 'px'; 

  popup.style.height = contentHeight + 'px'; 

  const popupLeft = (window.innerWidth - popup.offsetWidth) / 2;
  const popupTop = (window.innerHeight - popup.offsetHeight) / 2;

  popup.style.left = popupLeft + 'px';
  popup.style.top = popupTop + 'px';


  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  }); 

  document.body.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  }); 
}; 

//Função para dar zoom nas imagens da galeria
function zoomImage(event) {
    event.preventDefault();
    const clickedImage = event.target;
    const zoomedImageUrl = clickedImage.getAttribute("src");
    
    const zoomedContainer = document.createElement("div");
    zoomedContainer.classList.add("zoomed-container");
    
    const zoomedImage = document.createElement("img");
    zoomedImage.setAttribute("src", zoomedImageUrl);
    zoomedImage.classList.add("zoomed-image");
    
    zoomedContainer.appendChild(zoomedImage);
    

    document.body.appendChild(zoomedContainer);
    
    zoomedContainer.addEventListener("click", function() {
      document.body.removeChild(zoomedContainer);
    });
  }
  

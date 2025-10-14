const divs = document.querySelectorAll(".image");

divs.forEach(div => {
  div.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", div.id);
  });

  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  div.addEventListener("drop", (e) => {
    e.preventDefault();

    const droppedElement = e.target;
    const droppedImage = getComputedStyle(droppedElement).backgroundImage;
    const droppedText = droppedElement.textContent;

    const draggedElement = document.getElementById(e.dataTransfer.getData("text"));
    const draggedImage = getComputedStyle(draggedElement).backgroundImage;
    const draggedText = draggedElement.textContent;

    draggedElement.style.backgroundImage = droppedImage;
    draggedElement.textContent = droppedText;

    droppedElement.style.backgroundImage = draggedImage;
    droppedElement.textContent = draggedText;
  });
});

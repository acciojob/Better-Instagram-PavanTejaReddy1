const divs = document.querySelectorAll(".image");

divs.forEach(div => {
  div.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", div.id);
    div.classList.add("selected");
  });

  div.addEventListener("dragend", () => {
    div.classList.remove("selected");
  });

  div.addEventListener("dragover", e => {
    e.preventDefault(); // Allow drop
  });

  div.addEventListener("drop", e => {
    e.preventDefault();

    const droppedOn = e.target;
    const draggedId = e.dataTransfer.getData("text");
    const dragged = document.getElementById(draggedId);

    // Swap background images
    const draggedBg = getComputedStyle(dragged).backgroundImage;
    const droppedBg = getComputedStyle(droppedOn).backgroundImage;

    dragged.style.backgroundImage = droppedBg;
    droppedOn.style.backgroundImage = draggedBg;

    // Swap text content
    const tempText = dragged.textContent;
    dragged.textContent = droppedOn.textContent;
    droppedOn.textContent = tempText;
  });
});

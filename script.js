const images = document.querySelectorAll("#parent img");

images.forEach(img => {
  img.addEventListener("dragstart", e => {
    e.dataTransfer.setData("src", e.target.src);
    e.target.classList.add("selected");
  });

  img.addEventListener("dragend", e => {
    e.target.classList.remove("selected");
  });

  img.addEventListener("dragover", e => e.preventDefault());

  img.addEventListener("drop", e => {
    e.preventDefault();
    const draggedSrc = e.dataTransfer.getData("src");
    const targetSrc = e.target.src;
    e.target.src = draggedSrc;

    const draggedImg = Array.from(images).find(img => img.src === draggedSrc && img !== e.target);
    if (draggedImg) draggedImg.src = targetSrc;
  });
});

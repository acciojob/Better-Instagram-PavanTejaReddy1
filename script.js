const divs = document.querySelectorAll(".image");

divs.forEach(div => {
	div.addEventListener("dragstart", (e)=>{
		e.dataTransfer.setData("text", div.id);
	})

	div.addEventListener("dragover", (e)=>{
		e.preventDefault();
	})

	div.addEventListener("drop", (e)=>{
		e.preventDefault();

		const dropedElement = e.target;
		const dropedElementImage = getComputedStyle(dropedElement).backgroundImage;
		const dropedElementTxt = dropedElement.textContent;

		const draggedElement = document.getElementById(e.dataTransfer.getData("text"));
		const draggedElementImage = getComputedStyle(draggedElement).backgroundImage;
		const draggedElementTxt = draggedElement.textContent;

		draggedElement.style.backgroundImage = dropedElementImage;
		draggedElement.textContent = dropedElementTxt;

		dropedElement.style.backgroundImage = draggedElementImage;
		dropedElement.textContent = draggedElementTxt;
	})
})
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

addNoteBtn.addEventListener("click", () => {
	if (noteInput.value !== "") {
		const note = document.createElement("div");
		note.classList.add("note");
		const noteText = document.createElement("p");
		noteText.innerText = noteInput.value;
		note.appendChild(noteText);
		notesContainer.appendChild(note);
		noteInput.value = "";
	}
});

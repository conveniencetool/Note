document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText) {
        addNoteToDOM(noteText);
        noteInput.value = ''; // 入力欄をクリア
    } else {
        alert('ノートの内容を入力してください');
    }
});

function addNoteToDOM(noteText) {
    const notesContainer = document.getElementById('notesContainer');

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = '削除';
    deleteBtn.onclick = function() {
        notesContainer.removeChild(noteDiv); // ノートを削除
    };

    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
}

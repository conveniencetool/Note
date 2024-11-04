// ノート追加ボタンのイベントリスナー
document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText) {
        addNoteToDOM(noteText); // DOMにメモを表示
        noteInput.value = ''; // 入力欄をクリア
    } else {
        alert('メモの内容を入力してください');
    }
});

// メモをDOMに追加する関数
function addNoteToDOM(noteText) {
    const notesContainer = document.getElementById('notesContainer');

    // ノート要素を作成
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteText;

    // 削除ボタンの作成
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = '削除';
    deleteBtn.onclick = function() {
        notesContainer.removeChild(noteDiv); // メモを削除
    };

    // メモに削除ボタンを追加し、DOMに挿入
    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv); // メモを追加
}

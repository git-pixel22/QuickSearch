function saveKeyCombination() {
    const keyCombination = document.getElementById('keyCombination').value;
    chrome.storage.sync.set({ 'keyCombination': keyCombination }, function() {
      alert('Key combination saved!');
    });
  }
  
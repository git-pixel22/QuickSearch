let storedKeyCombination;

chrome.storage.sync.get(['keyCombination'], function(result) {
  storedKeyCombination = result.keyCombination;
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'openChatGPT') {
    chrome.tabs.executeScript({
      code: 'window.getSelection().toString();'
    }, function(selection) {
      const selectedText = selection[0];
      if (selectedText) {
        const chatGPTUrl = 'https://chat.openai.com/?query=' + encodeURIComponent(selectedText);
        chrome.tabs.create({ url: chatGPTUrl });
      }
    });
  }
});

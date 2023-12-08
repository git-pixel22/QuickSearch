chrome.commands.onCommand.addListener(function(command) {
    if (command === "open-chatgpt") {
      chrome.tabs.executeScript({
        code: `
          const selectedText = window.getSelection().toString().trim();
          const encodedQuery = encodeURIComponent(selectedText);
          const url = 'https://chat.openai.com?query=' + encodedQuery;
          window.open(url, '_blank');
        `
      });
    }
  });
  
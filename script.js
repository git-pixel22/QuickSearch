chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-chatgpt") {
    chrome.tabs.executeScript({
      code: `
        const selectedText = window.getSelection().toString().trim();
        const url = 'https://chat.openai.com/';

        const newTab = window.open(url, '_blank');

        newTab.onload = function() {
          const elem = newTab.document.querySelector("textarea");
          elem.value = selectedText;
          elem.focus();
        };
      `
    });
  }
});

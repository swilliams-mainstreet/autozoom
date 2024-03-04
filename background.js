chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        function: setZoom
      });
    }
  });
  
  function setZoom() {
    chrome.tabs.setZoom(2.0); // Sets zoom to 200%
  }
  
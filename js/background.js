chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const mirkwood = 'https://mirkwood.cs.edinboro.edu/';

function createFavicon(href) {
  const favicon = document.createElement('link');
  favicon.setAttribute('id', 'mirkwood-reader-favicon');
  favicon.setAttribute('rel', 'icon');
  favicon.setAttribute('type', 'image/x-icon');
  favicon.setAttribute('href', href);
  document.head.appendChild(favicon);
}

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(mirkwood)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files : [ 'js/theme.js' ]
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: createFavicon,
      args: [chrome.runtime.getURL('img/icon.svg')]
    });
  }
});
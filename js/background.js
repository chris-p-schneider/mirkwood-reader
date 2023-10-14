chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const mirkwood = 'https://mirkwood.cs.edinboro.edu/';

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
  }
});
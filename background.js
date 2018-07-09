browser.browserAction.onClicked.addListener((tab) => {
    const outline = "https://outline.com/";
    const gotoURL = outline + tab.url;
    browser.tabs.update({
        url: gotoURL
    });
  });
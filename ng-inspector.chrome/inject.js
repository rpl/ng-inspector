if (window.top === window) {
	
	// Inject the bridge script
	var inspectorScript = document.createElement('script');
	inspectorScript.type = 'text/javascript';
	inspectorScript.src = chrome.extension.getURL('/ng-inspector.js');
	document.head.appendChild(inspectorScript);

  chrome.runtime.onMessage.addListener(function(message, sender) {
    if (message.command && message.command === 'ngi-toggle') {
      window.postMessage(JSON.stringify(message), window.location.origin);
    }
  });

}

// Initialize butotn with users's prefered color
let deleteCartAmazon = document.getElementById("DeleteCartAmazon");
let deleteListAmazon = document.getElementById("DeleteListAmazon");
let deleteCartWholeFoods = document.getElementById("DeleteCartWholeFoods");


deleteCartAmazon.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeAmazonCart,
  });
  window.close();
});

function removeAmazonCart() {
	var query = document.querySelectorAll("#sc-active-cart input[value=Delete]")
	if (query.length) {
		query[0].click();
	}
	if (query.length > 1) {
		setTimeout(removeAmazonCart,200);
	}
	else {
		console.log('Finished');
	}
}

deleteListAmazon.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeAmazonSavedItems,
  });
  window.close();
});

function removeAmazonSavedItems() {
  var query = document.querySelectorAll("#sc-saved-cart input[value=Delete]")
	if (query.length) {
		query[0].click();
	}
	if (query.length > 1) {
		setTimeout(removeAmazonSavedItems,200);
	}
	else {
		console.log('Finished');
	}
}

deleteCartWholeFoods.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeWholeFoodsCart,
  });
  window.close();
});

function removeWholeFoodsCart() {
	var query = document.querySelectorAll("#sc-expanded-cart-localmarket input[value='Delete']")
	if (query.length) {
		query[0].click();
	}
	if (query.length > 1) {
		setTimeout(removeWholeFoodsCart, 200);
	}
	else {
		console.log('Finished');
	}
}



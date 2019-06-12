/* eslint-disable */

const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function() {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

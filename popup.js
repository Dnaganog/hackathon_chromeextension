/* eslint-disable */

// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }

// document.getElementById('changeColor').addEventListener('click', hello);





chrome.tabs.query({currentWindow: true}, function(tabs) {
  tabs.forEach(tab => {
    let li = document.createElement('li');
    li.innerHTML = tab.url;
    document.querySelector('ul').appendChild(li);
  });
});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   document.querySelector('li').innerHTML = tabs[0].url;
// });


// const changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });


// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id, {code: 'document.body.style.backgroundColor = "' + color + '";'});

//   });
// };
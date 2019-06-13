/* eslint-disable */

// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }

// document.getElementById('changeColor').addEventListener('click', hello);
let cache = {};
// let test = chrome.storage.sync.get(['BFO'], function(result) {
//   // console.log('Value currently is ' + result.url);
//     if (result === undefined) {
//       cache = ['a'];
//     } else {
//       cache = ['b'];
//     }
//     return 1;

// });

// let smp = document.createElement('h1');
// smp.innerText = JSON.stringify(test);
// document.querySelector('body').appendChild(smp);

chrome.tabs.query({currentWindow: true}, function(tabs) {
  let key = Math.random();
  const wrapper = {'BFO': cache};
  wrapper['BFO'][key] = [];
  tabs.forEach(tab => {
    let li = document.createElement('li');
    li.innerText = tab.url;
    document.querySelector('ul').appendChild(li);
    wrapper['BFO'][key].push(tab.url);
    chrome.storage.sync.set(wrapper, function() {
    });
  });
});

let tester = document.createElement('h1');

chrome.storage.sync.get(['BFO'], function(result) {
  // console.log('Value currently is ' + result.url);
  tester.innerText = JSON.stringify(result['BFO']);
  document.querySelector('body').appendChild(tester);
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
/* eslint-disable */

// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }






let cache = {};
// chrome.storage.local.get(['BFO'], function(result) {
//   // console.log('Value currently is ' + result.url);
//   // alert(`local ${JSON.stringify(result.BFO)}`);
//   cache = result.BFO || {};

// });
// alert(`local ${JSON.stringify(cache)}`);

chrome.storage.sync.get(['BFO'], function(result) {



  function openWorkspace(event){
      let finalTab;
      chrome.tabs.query({currentWindow: true}, function(tabs) {

      for (let i = 0; i < tabs.length; i++){
        if (i === 0) finalTab = tabs[i].id;
        else chrome.tabs.remove(tabs[i].id, function() { });
      }

      });

      key = event.target.someParam;

      for (let i = 0; i < cache[key].length; i++){
        chrome.tabs.create({'url' : cache[key][i]}, function() { });
      }
      chrome.tabs.remove(finalTab, function() {})


  }



  // console.log('Value currently is ' + result.url);
  cache = result.BFO || {};


    Object.keys(cache).forEach(key => {

        let ele = document.createElement('li');

        ele.addEventListener('click', openWorkspace );
        ele.someParam = key;

        ele.innerHTML = key;

        // <button id=${key}> Delete</button>`;
        let butt = document.createElement('button');


        document.querySelector('ul').appendChild(ele);


    });

    chrome.storage.sync.set({'BFO' : cache}, function() {
      // alert(`sync ${JSON.stringify(cache)}`);
      // alert(Object.keys(cache));
    });
    // chrome.storage.local.set({'BFO' : cache}, function() {
      //   alert(`local ${JSON.stringify(cache)}`);
      // });

  // function onDelObj(key) {
  //   delete cache.key;
  // }



  function alerter() {

    // store value;

    let key = document.querySelector('input').value || 'blabla'

    // cache['BFO'][key] = tabs;
    // alert(key);
    chrome.tabs.query({currentWindow: true}, function(tabs) {

      const wrapper = {'BFO': cache};
      wrapper['BFO'][key] = [];

      tabs.forEach(tab => {
        let li = document.createElement('li');
        li.innerText = tab.url;
        document.querySelector('ul').appendChild(li);
        wrapper['BFO'][key].push(tab.url);
      });

      chrome.storage.sync.set({'BFO' : cache}, function() {
        // alert(`sync ${JSON.stringify(cache)}`);
        // alert(Object.keys(cache));
      });
      // chrome.storage.local.set({'BFO' : cache}, function() {
        //   alert(`local ${JSON.stringify(cache)}`);
        // });
      });


    }


    document.querySelector('button').addEventListener('click', alerter);
    document.querySelector('input').addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        alerter();
        document.querySelector('input').value = '';
      }
    })

    // alert(`sync ${JSON.stringify(cache)}`);
  });
  // document.getElementById('changeColor').addEventListener('click', hello);
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

// chrome.tabs.query({currentWindow: true}, function(tabs) {
//   let key = Math.random();
//   const wrapper = {'BFO': cache};
//   wrapper['BFO'][key] = [];
//   tabs.forEach(tab => {
//     let li = document.createElement('li');
//     li.innerText = tab.url;
//     document.querySelector('ul').appendChild(li);
//     wrapper['BFO'][key].push(tab.url);
//     chrome.storage.sync.set(wrapper, function() {
//     });
//   });
// });

// let tester = document.createElement('h1');

// chrome.storage.sync.get(['BFO'], function(result) {
//   // console.log('Value currently is ' + result.url);
//   tester.innerText = JSON.stringify(result['BFO']);
//   document.querySelector('body').appendChild(tester);
// });


// function runs(){
//   let testers = document.createElement('h2');
//   testers.innerText = JSON.stringify(result['BFO']);
//   document.querySelector('body').appendChild(testers);
// }

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
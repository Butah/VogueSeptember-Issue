function init() {
  Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/13NVWy6ScSoZWwEqACoWwSYwL5TnHlzsn6l5TXXpl6sQ/pubhtml',
      
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)
   
        var app4 = new Vue({
          el: '#app-4',
          data: {
            list: tabletopData,
          }
        })
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)
var app = new Vue({
    el: '#app',
    data: {
      open: false,
      text: 'Happy Anniversary 2 years & 11 month'
    },
    methods: {
      click: function() {
        this.open = !this.open;
      }
    },
    watch:{
      open: function() {
        if (this.open == true) {
            document.body.className = 'open';
            }
        else {
          document.body.className = '';
        }
      }
    }
  })
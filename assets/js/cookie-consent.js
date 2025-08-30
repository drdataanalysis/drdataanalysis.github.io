/*window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#383b75"
    },
    "button": {
      "background": "#f1d600"
    }
  },
  "content": {
    "href": "https://drdataanalysis.github.io/terms"
  },
   onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAonConsent();
    }
  }
});
*/
/*   window.cookieconsent.initialise({
    container: document.getElementById("content"),
    palette:{
     popup: {background: "#fff"},
     button: {background: "#aa0000"},
    },
    revokable:true,
    onStatusChange: function(status) {
     console.log(this.hasConsented() ?
      'enable cookies' : 'disable cookies');
    },
    law: {
     regionalLaw: false,
    },
    location: true,
    });
*/
window.cookieconsent.initialise({
  container: document.getElementById("content"),
  revokable:true,
  "palette": {
    "popup": {
      "background": "#383b75"
    },
    "button": {
      "background": "#f1d600"
    }
  },
  "content": {
    "href": "https://drdataanalysis.github.io/terms"
  },
   onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAonConsent();
    }
  }
});
(this["webpackJsonptimers-demo"]=this["webpackJsonptimers-demo"]||[]).push([[0],[,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){e.exports=n.p+"static/media/Kepenekian.220aa5a4.png"},function(e,t,n){e.exports=n.p+"static/media/Doucet.921ba2f4.png"},function(e,t,n){e.exports=n.p+"static/media/Marion.bbbfa81a.png"},function(e,t,n){e.exports=n.p+"static/media/Perringilbert.7109e6cb.png"},function(e,t,n){e.exports=n.p+"static/media/Runel.615dd977.png"},function(e,t,n){e.exports=n.p+"static/media/Blanc.8d647d29.png"},function(e,t,n){e.exports=n.p+"static/media/Broliquier.aca51030.png"},function(e,t,n){e.exports=n.p+"static/media/Cucherat.c76114f9.png"},function(e,t,n){e.exports=n.p+"static/media/Logo-Forum.189a24e2.png"},function(e,t,n){e.exports=n.p+"static/media/20_minutes_blanc.69efd5a5.png"},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(8),m=n.n(a),s=n(1),c=n(2),o=n(4),u=n(3),l=n(5),d=(n(6),i.Component,function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"s"===e.key&&n.stopTimer(),"q"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Georges K\xe9p\xe9n\xe9kian"),r.a.createElement("img",{className:"img-profil",src:n(14)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component)),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.handler=function(e){"i"===e.key&&n.stopTimer(),"u"===e.key&&n.startTimer()},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Gre\u0301gory Doucet"),r.a.createElement("img",{className:"img-profil",src:n(15)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer,onKeyPress:this.handleKeyPress},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"f"===e.key&&n.stopTimer(),"d"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Agne\u0300s Marion"),r.a.createElement("img",{className:"img-profil",src:n(16)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"h"===e.key&&n.stopTimer(),"g"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Nathalie Perrin-Gilbert"),r.a.createElement("img",{className:"img-profil",src:n(17)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"k"===e.key&&n.stopTimer(),"j"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Sandrine Runel"),r.a.createElement("img",{className:"img-profil",src:n(18)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"z"===e.key&&n.stopTimer(),"a"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Etienne Blanc"),r.a.createElement("img",{className:"img-profil",src:n(19)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"r"===e.key&&n.stopTimer(),"e"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Denis Broliquier"),r.a.createElement("img",{className:"img-profil",src:n(20)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={timerOn:!1,timerStart:0,timerTime:0},n.handler=function(e){"y"===e.key&&n.stopTimer(),"t"===e.key&&n.startTimer()},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:n.state.timerTime}),n.timer=setInterval((function(){var e=n.state.timerTime-10;e>=0?n.setState({timerTime:e}):(clearInterval(n.timer),n.setState({timerOn:!1}),alert("Countdown ended"))}),10)},n.stopTimer=function(){clearInterval(n.timer),n.setState({timerOn:!1})},n.resetTimer=function(){!1===n.state.timerOn&&n.setState({timerTime:n.state.timerStart})},n.adjustTimer=function(e){var t=n.state,i=t.timerTime;t.timerOn||("incHours"===e&&i+36e5<216e6?n.setState({timerTime:i+36e5}):"decHours"===e&&i-36e5>=0?n.setState({timerTime:i-36e5}):"incMinutes"===e&&i+6e4<216e6?n.setState({timerTime:i+6e4}):"decMinutes"===e&&i-6e4>=0?n.setState({timerTime:i-6e4}):"incSeconds"===e&&i+1e3<216e6?n.setState({timerTime:i+1e3}):"decSeconds"===e&&i-1e3>=0&&n.setState({timerTime:i-1e3}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this,t=this.state,i=t.timerTime,a=t.timerStart,m=t.timerOn,s=("0"+Math.floor(i/1e3%60)%60).slice(-2),c=("0"+Math.floor(i/6e4%60)).slice(-2),o=("0"+Math.floor(i/36e5%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Yann Cucherat"),r.a.createElement("img",{className:"img-profil",src:n(21)}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return e.adjustTimer("incHours")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incMinutes")}},"\u21e7"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("incSeconds")}},"\u21e7"),r.a.createElement("div",{className:"Countdown-time"},o," : ",c," : ",s),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decHours")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decMinutes")}},"\u21e9"),r.a.createElement("button",{onClick:function(){return e.adjustTimer("decSeconds")}},"\u21e9")),!1===m&&(0===a||i===a)&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Start"),!0===m&&i>=1e3&&r.a.createElement("button",{className:"Button-stop",onClick:this.stopTimer},"Stop"),!1===m&&0!==a&&a!==i&&0!==i&&r.a.createElement("button",{className:"Button-start",onClick:this.startTimer},"Resume"),(!1===m||i<1e3)&&a!==i&&a>0&&r.a.createElement("button",{className:"Button-reset",onClick:this.resetTimer},"Reset"))}}]),t}(i.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-title"},r.a.createElement("img",{className:"img-logo",src:n(22)})," Le Grand D\xe9bat des Municipales ",r.a.createElement("img",{className:"img-logo",src:n(23)})),r.a.createElement("div",{className:"Timers"},r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(p,null),r.a.createElement(T,null)),r.a.createElement("div",{className:"Timers"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(S,null),r.a.createElement(h,null)))}}]),t}(i.Component);m.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b049870a.chunk.js.map
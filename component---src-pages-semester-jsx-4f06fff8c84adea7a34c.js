(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2mbF":function(e,t,a){},"3Hlc":function(e){e.exports=JSON.parse('{"work session":"Work Session","catchup lab":"Catchup Lab","none":"No Section"}')},"57SX":function(e,t){e.exports={"semester-start-date":"1/20/2021","semester-end-date":"5/14/2021",active:!0}},CnGb:function(e,t,a){"use strict";a.d(t,"a",(function(){return q}));var n=a("q1tI"),r=a.n(n),l=a("JX7q"),c=a("dI71"),i=a("zM5D"),s=a("AINe"),o=a("dDCJ"),u=(a("2mbF"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={show:!1},a.show=a.show.bind(Object(l.a)(a)),a.hide=a.hide.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.show=function(){this.setState({show:!0})},a.hide=function(){this.setState({show:!1})},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.show,className:"content-modal-button"},r.a.createElement(o.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+this.props.header},"more details")},r.a.createElement("span",{className:"material-icons"},"read_more"))),r.a.createElement(i.a,{show:this.state.show,onHide:this.hide,size:"lg",centered:!0},r.a.createElement(i.a.Header,{className:"content-modal-header"},r.a.createElement(i.a.Title,null,this.props.header),r.a.createElement("div",{className:"label",style:{backgroundColor:this.props.contentColor}},this.props.subheader)),r.a.createElement(i.a.Body,null,this.props.modalContent)))},t}(r.a.Component)),m=a("JdhN"),d=(a("Iiz4"),a("uNkh")),h=a.n(d),f=a("57SX"),v=a.n(f);function p(e,t){return t?t[e]:{}}function E(e){var t=new Date(e),a=t.getDate()-t.getDay();return new Date(t.setDate(a))}var k=a("3Hlc"),b=a("eqPe"),N=a.n(b),g=a("xIhJ"),y=a.n(g),w=(a("q4sD"),N.a["weekly-schedule"]);function q(e,t){console.log(e,t);for(var a,n=h.a[e],l=Object.keys(n),c=[],i=0;i<l.length;i++){var u=l[i],m=n[u];if(0!==m.length)for(var d=y.a[u],f=p(u,t),v=0;v<m.length;v++){var E=m[v],b=f[E];if(void 0===b){if(void 0===(b=k[E]))continue;c.push(r.a.createElement("div",{className:"divider"})),c.push((a=b,r.a.createElement("div",{className:"content-item"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"label",style:{backgroundColor:"#7eb2ff"}},"No Content"),r.a.createElement(o.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+a},a)},r.a.createElement("div",{className:"title"},a))))))}else c.push(r.a.createElement("div",{className:"divider"})),c.push(C(u,E,b,d,t))}}return c}function C(e,t,a,n,l){var c=n.label,i=function(e,t){for(var a=Object.keys(h.a).length,n={},r=1,l=1;l<=a;l++)for(var c=h.a[l][e],i=p(e,t),s=0;s<c.length;s++){var o=c[s];void 0!==i[o]&&void 0===n[o]&&(n[o]=r,r+=1)}return n}(e,l)[t],d=a.title,f=c+" "+i,v=function(e,t){for(var a=[],n=e["displayed-links"],l=0;l<n.length;l++){var c=n[l],i=t[c];if(void 0!==i){var u=e["core-links"][c];a.push((m=u.label,d=i,h=u.icon,null==d?r.a.createElement("span",{className:"material-icons icon-link disabled"},h):r.a.createElement("a",{className:"icon-link",href:d,target:"_blank",rel:"noreferrer"},r.a.createElement(o.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+m},m)},r.a.createElement("span",{className:"material-icons"},h)))))}}var m,d,h;return a}(n,a),E=w[e];return function(e,t,a,n,l){return r.a.createElement("div",{className:"content-item"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"label",style:{backgroundColor:a}},t),r.a.createElement(o.a,{key:"header",placement:"top",overlay:r.a.createElement(s.a,{id:"tooltip-"+e},e)},r.a.createElement("div",{className:"title"},e))),r.a.createElement("div",{className:"links"},n,l))}(d,f,E,v,function(e,t,a,n,l){var c=function(e,t){console.log(e);var a=function(e,t){for(var a=Object.keys(t),n=[],l=0;l<a.length;l++){var c=a[l],i=e[c];if(void 0!==i){var s=t[c],o=s.icon,u=s.label;null===i?n.push(new m.c(o,u)):n.push(new m.a(o,u,i))}}return r.a.createElement("div",{className:"quick-link-bar"},n)}(t,e["core-links"]),n=function(e,t){for(var a=[],n=0;n<t.length;n++){var r=t[n],l=r.label,c=r.key,i=e[c];0!==i.length&&a.push(j(i,l))}return a}(t,e["extra-links"]),l=function(e,t){for(var a=[],n=0;n<t.length;n++){var l=t[n],c=l.key,i=e[c];if(0!==i.length){var s=l.format;a.push(r.a.createElement("div",{className:"modal-section static-content"},r.a.createElement("h4",null,l.label),D(i,s)))}}return r.a.createElement("div",null,a)}(t,e["static-contents"]);return r.a.createElement(r.a.Fragment,null,a,l,n)}(n,l);return r.a.createElement(u,{header:e,subheader:t,modalContent:c,contentColor:a})}(d,f,E,n,a))}function j(e,t){for(var a=[],n=0;n<e.length;n++){var l=e[n];a.push(r.a.createElement("a",{href:l.link,target:"_blank",rel:"noreferrer"},l.title))}return r.a.createElement("div",{className:"modal-section"},r.a.createElement("h4",null,t),r.a.createElement("div",{className:"extra-links"},a))}function D(e,t){var a=[];return"p"===t&&e.forEach((function(e){return a.push(r.a.createElement("p",null,e))})),"ul"===t&&a.push(function e(t){for(var a=[],n=0;n<t.length;n++){var l=t[n];Array.isArray(l)?a.push(e(l)):a.push(r.a.createElement("li",null,l))}return r.a.createElement("ul",null,a)}(e)),"ol"===t&&a.push(function e(t){for(var a=[],n=0;n<t.length;n++){var l=t[n];Array.isArray(l)?a.push(e(l)):a.push(r.a.createElement("li",null,l))}return r.a.createElement("ol",null,a)}(e)),r.a.createElement("div",null,a)}t.b=function(e){if(0!==Object.keys(e).length){var t=(n=E(new Date),l=E(v.a["semester-start-date"]),c=Object.keys(h.a).length,i=(n-l)/864e5,Math.max(1,Math.min(Math.floor(i/7),c))),a=q(t,e);return r.a.createElement("div",{className:"week-content"},r.a.createElement("h5",null,"Week ",t),a)}var n,l,c,i}},Iiz4:function(e,t,a){},JdhN:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=(a("Wh5u"),a("xLLX")),c=a.n(l);function i(e,t,a){return r.a.createElement("a",{href:a,className:"quick-link-anchor",target:"_blank",rel:"noreferrer"},r.a.createElement("div",{className:"quick-link"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function s(e,t,a){return r.a.createElement("a",{onClick:a,className:"quick-link-anchor"},r.a.createElement("div",{className:"quick-link"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function o(e,t,a){return r.a.createElement("a",{href:a,className:"quick-link-anchor"},r.a.createElement("div",{className:"quick-link"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function u(e,t){return r.a.createElement("a",{className:"quick-link-anchor",target:"_blank",rel:"noreferrer"},r.a.createElement("div",{className:"quick-link disabled"},r.a.createElement("span",{className:"material-icons"},e),r.a.createElement("div",{className:"quick-link-label"},t)))}function m(){var e=[];return c.a.forEach((function(t){return e.push(i(t.icon,t.label,t.link))})),r.a.createElement("div",{className:"quick-link-bar"},e)}},L6br:function(e,t,a){},Wh5u:function(e,t,a){},eqPe:function(e,t){e.exports={"weekly-schedule":{lectures:"#0074FD",discussion:"#FF4B4B",labs:"#F3B200",projects:"#38CA05",readings:"#8445C2"}}},q4sD:function(e,t,a){},"t/aD":function(e,t,a){"use strict";a.r(t);var n=a("JX7q"),r=a("dI71"),l=a("q1tI"),c=a.n(l),i=a("a8qA"),s=a("6j4A"),o=a("CnGb"),u=a("qVI6"),m=(a("+5i3"),a("L6br"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={course_data:{}},a.testGetContentSource=a.testGetContentSource.bind(Object(n.a)(a)),a.finishedLoadingData=a.finishedLoadingData.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){for(var e=this,t=Object(u.b)(),a=function(a){var n=t[a],r=e.state.course_data;Object(u.a)(n).then((function(t){return e.setAndReturn(r,n,t)})).then((function(t){return e.setState({course_data:t})}))},n=0;n<t.length;n++)a(n)},a.setAndReturn=function(e,t,a){return e[t]=a,e},a.testGetContentSource=function(){console.log(this.state)},a.finishedLoadingData=function(){return Object.keys(this.state.course_data).length===Object(u.b)().length},a.loadHomeScreen=function(){if(this.finishedLoadingData()){for(var e=[],t=1;t<=15;t++)e.push(c.a.createElement("div",{className:"week-content col-5",style:{marginTop:"40px"}},c.a.createElement("h5",null,"Week ",t),Object(o.a)(t,this.state.course_data)));return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",null,"Semester Calendar"),c.a.createElement("div",{class:"semester-calendar-body"},e))}return c.a.createElement("div",null,"Loading ;_;")},a.render=function(){return c.a.createElement("div",null,c.a.createElement(s.a,null),c.a.createElement(i.a,null),this.loadHomeScreen())},t}(c.a.Component));t.default=m},xLLX:function(e,t){e.exports=[{label:"CS10 Zoom",link:"http://bjc.link/zoomroomsp21",icon:"video_call"},{label:"Gradescope: 6PGKWE",link:"https://www.gradescope.com/courses/224752",icon:"spellcheck"},{label:"Piazza",link:"https://piazza.com/class/kjt2jqnct3u2m",icon:"supervisor_account"}]}}]);
//# sourceMappingURL=component---src-pages-semester-jsx-4f06fff8c84adea7a34c.js.map
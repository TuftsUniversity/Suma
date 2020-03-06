(function(t){function e(e){for(var i,o,c=e[0],r=e[1],u=e[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"558e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SumaClient")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header_content"},[n("button",{staticClass:"headerbuttons leftalign menubutton",attrs:{"aria-label":"toggle menu"},on:{click:function(e){t.menuShown=!t.menuShown}}},[t.menuShown?n("i",{staticClass:"fas fa-times"}):n("i",{staticClass:"fas fa-bars"})]),n("button",{staticClass:"headerbuttons leftalign",attrs:{"aria-label":"Abandon all counts",disabled:t.hasNoCounts},on:{click:function(e){return t.resetCounts()}}},[n("span",{staticClass:"buttontext"},[t._v("Abandon All Counts")]),n("i",{staticClass:"fas fa-trash-alt toolbar-icons"})]),n("button",{staticClass:"headerbuttons leftalign",attrs:{"aria-label":"Undo last count",disabled:""===t.compCounts},on:{click:function(e){return t.undoLastCount()}}},[n("span",{staticClass:"buttontext"},[t._v("Undo Last Count")]),n("i",{staticClass:"fas fa-undo toolbar-icons"})]),t.settings.dateTime&&"hide"!=t.settings.dateTime?n("div",{staticClass:"datetime filler",domProps:{innerHTML:t._s(t.datetime)}}):t._e(),t.settings.dateTime&&"hide"!=t.settings.dateTime?t._e():n("div",{staticClass:"filler"}),n("button",{staticClass:"headerbuttons rightalign",attrs:{"aria-label":"settings"},on:{click:function(e){return t.$modal.show("settings")}}},[n("i",{staticClass:"fas fa-cog"})]),n("button",{staticClass:"headerbuttons rightalign",attrs:{"aria-label":"finish collecting",disabled:t.hasNoCounts},on:{click:function(e){return t.submitCounts()}}},[n("span",{staticClass:"buttontext"},[t._v("Finish collecting")]),n("i",{staticClass:"fas fa-check-circle toolbar-icons"})])]),n("modal",{attrs:{name:"settings"}},[n("i",{staticClass:"fas fa-times closemodal",on:{click:function(e){return t.$modal.hide("settings")}}}),n("h2",{staticClass:"settingsheader",staticStyle:{"text-align":"center"}},[t._v("Settings")]),n("div",{staticClass:"settingslist"},[n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.settings.dateTime,expression:"settings.dateTime"}],attrs:{id:"datetime"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.settings,"dateTime",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",disabled:""}},[t._v("Select Date/Time Option")]),n("option",{attrs:{value:"time"}},[t._v("Time")]),n("option",{attrs:{value:"date"}},[t._v("Date")]),n("option",{attrs:{value:"true"}},[t._v("Date and Time")]),n("option",{attrs:{value:"hide"}},[t._v("Hide")])])]),n("div",[n("label",{attrs:{for:"multiCount"}},[t._v("Show Multi Count")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.settings["multiCount"],expression:"settings['multiCount']",modifiers:{lazy:!0}}],attrs:{type:"checkbox",id:"multiCount"},domProps:{checked:Array.isArray(t.settings["multiCount"])?t._i(t.settings["multiCount"],null)>-1:t.settings["multiCount"]},on:{change:function(e){var n=t.settings["multiCount"],i=e.target,s=!!i.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);i.checked?o<0&&t.$set(t.settings,"multiCount",n.concat([a])):o>-1&&t.$set(t.settings,"multiCount",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.settings,"multiCount",s)}}})]),n("div",[n("label",{attrs:{for:"lastCount"}},[t._v("Show Last Count")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.settings["lastCount"],expression:"settings['lastCount']",modifiers:{lazy:!0}}],attrs:{type:"checkbox",id:"lastCount"},domProps:{checked:Array.isArray(t.settings["lastCount"])?t._i(t.settings["lastCount"],null)>-1:t.settings["lastCount"]},on:{change:function(e){var n=t.settings["lastCount"],i=e.target,s=!!i.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);i.checked?o<0&&t.$set(t.settings,"lastCount",n.concat([a])):o>-1&&t.$set(t.settings,"lastCount",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.settings,"lastCount",s)}}})]),n("div",[n("label",{attrs:{for:"requireLocations"}},[t._v("Require All Locations")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.settings["requireLocations"],expression:"settings['requireLocations']",modifiers:{lazy:!0}}],attrs:{type:"checkbox",id:"requireLocations"},domProps:{checked:Array.isArray(t.settings["requireLocations"])?t._i(t.settings["requireLocations"],null)>-1:t.settings["requireLocations"]},on:{change:function(e){var n=t.settings["requireLocations"],i=e.target,s=!!i.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);i.checked?o<0&&t.$set(t.settings,"requireLocations",n.concat([a])):o>-1&&t.$set(t.settings,"requireLocations",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.settings,"requireLocations",s)}}})])])]),n("transition",{attrs:{name:"sidebar"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuShown,expression:"menuShown"}],staticClass:"selectbuttons"},[n("div",{staticClass:"alldropdowns"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentinit,expression:"currentinit"}],attrs:{disabled:!t.requiredLocationsCheck.passed,"aria-label":"initiative dropdown",id:"initiativeDropdown"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentinit=e.target.multiple?n:n[0]},function(e){return t.updateInit()}]}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Select an initiative")]),t._l(t.initresults,(function(e){return n("option",{key:e.initiativeId,domProps:{value:e.initiativeId,innerHTML:t._s(e.initiativeTitle)}})}))],2),t.children.length>0?n("tree-menu",{key:t.currentinit,attrs:{parentdata:t.$data,nodes:t.children,depth:0},on:{clickLocation:t.clickLocation,addtocounts:function(e){return t.addToCount(0)}}}):t._e()],1)])]),n("div",{class:[t.menuShown?"sidebarcounts":"fullpagecounts"],attrs:{id:"countsform"}},[t.showcounts?n("div",[n("h3",{attrs:{id:"current_loc_label"}},[t.compCounts?n("button",{staticClass:"resetloccounts",on:{click:function(e){return t.resetInitCountsByLocation(t.location)}}},[n("span",{staticClass:"buttontext"},[t._v("Reset location counts")]),n("i",{staticClass:"fas fa-ban toolbar-icons"})]):t._e(),n("span",{domProps:{innerHTML:t._s(t.locationtitle)}}),t.locationDescription?n("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"info",arrow:!0,interactive:!0,placement:"top",trigger:"click"},expression:"{ theme : 'info', arrow: true, interactive : true, placement : 'top', trigger : 'click' }"}],staticClass:"fas fa-info-circle ",attrs:{content:t._f("unescapeFilter")(t.locationDescription)}}):t._e()]),t.settings.lastCount&&t.lastCount?n("div",[t._v("Last count for "),n("span",{domProps:{innerHTML:t._s(t.locationtitle)}}),t._v(" recorded at: "+t._s(t.lastCount))]):t._e(),n("form",{on:{submit:function(e){return e.preventDefault(),t.addToCount(t.countNumber)}}},[Object.keys(t.activities).length>0?n("div",{staticClass:"activities"},t._l(t.activities,(function(e,i){return n("div",{key:i,staticClass:"activityGroup",class:{required:e.required}},[n("h3",{staticClass:"activityTitle"},[n("span",{domProps:{innerHTML:t._s(e.title)}}),e.required?n("span",{staticClass:"requiredicon"},[t._v("*")]):t._e(),e.allowMulti?n("span",{staticClass:"instructions"},[t._v(" (Choose one or more)")]):n("span",{staticClass:"instructions"},[t._v(" (Select one)")]),e.description?n("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"info",arrow:!0,interactive:!0,placement:"top"},expression:"{ theme : 'info', arrow: true, interactive : true, placement : 'top' }"}],staticClass:"fas fa-info-circle ",attrs:{content:t._f("unescapeFilter")(e.description)}}):t._e()]),t._l(e.options,(function(s){return n("div",{key:s.id,attrs:{id:"activityButton"}},[n("label",[e.allowMulti?n("input",{directives:[{name:"model",rawName:"v-model",value:t.activityvaluesmulti,expression:"activityvaluesmulti"}],staticClass:"button",attrs:{type:"checkbox",name:e.id,id:s.id},domProps:{value:s.id,checked:Array.isArray(t.activityvaluesmulti)?t._i(t.activityvaluesmulti,s.id)>-1:t.activityvaluesmulti},on:{click:function(e){return t.requiredFieldsCheck()},change:function(e){var n=t.activityvaluesmulti,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=s.id,c=t._i(n,o);i.checked?c<0&&(t.activityvaluesmulti=n.concat([o])):c>-1&&(t.activityvaluesmulti=n.slice(0,c).concat(n.slice(c+1)))}else t.activityvaluesmulti=a}}}):e.allowMulti?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.activityvalues[i],expression:"activityvalues[key]"}],attrs:{type:"radio",name:e.id,id:s.id},domProps:{value:s.id,checked:t._q(t.activityvalues[i],s.id)},on:{click:function(e){return t.deselect(s.id,i)},change:function(e){return t.$set(t.activityvalues,i,s.id)}}}),n("span",{domProps:{innerHTML:t._s(s.title)}})])])}))],2)})),0):t._e(),t.settings.multiCount?n("input",{directives:[{name:"model",rawName:"v-model",value:t.countNumber,expression:"countNumber"}],attrs:{type:"number",id:"inputCount",value:"1",min:"0"},domProps:{value:t.countNumber},on:{input:function(e){e.target.composing||(t.countNumber=e.target.value)}}}):t._e(),n("button",{staticClass:"countButton",attrs:{type:"submit",disabled:!t.buttonClickable,enabled:t.buttonClickable}},[t._v("Count"+t._s(t.compCounts))])])]):n("div",{staticClass:"noloc"},[t._v(" No current location ")])])],1)},c=[],r=(n("a4d3"),n("e01a"),n("99af"),n("4de4"),n("c740"),n("a630"),n("c975"),n("a15b"),n("d81d"),n("13d5"),n("b0c0"),n("b64b"),n("07ac"),n("ac1f"),n("3ca3"),n("5319"),n("498a"),n("bc3a")),u=n.n(r),l=n("a002"),d=n.n(l),h=n("096e"),v=n.n(h),f=n("3d20"),m=n.n(f),p=n("761a"),g=n.n(p),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tree-menu",class:[{toplevel:0==t.depth},"level-"+t.depth],attrs:{"data-label":t.label}},[t.label?n("li",{class:[{selected:t.selected},{lowestlocation:!t.nodes}],attrs:{id:t.id},on:{click:t.toggleChildren}},[t.nodes?n("span",{staticClass:"toggle",class:[t.showChildren?"toggleup":"toggledown"]}):t._e(),n("span",{domProps:{innerHTML:t._s(t.label)}}),t.currentcount?n("span",[t._v(t._s(t.currentcount))]):t._e()]):t._e(),t._l(t.nodes,(function(e){return n("tree-menu",{directives:[{name:"show",rawName:"v-show",value:t.showChildren||0==t.depth,expression:"showChildren || depth == 0"}],key:e.title,attrs:{nodes:e.children,parentdata:t.parentdata,label:e.title,id:e.id,depth:t.depth+1},on:{addtocounts:function(e){return t.addToCount(0)},clickLocation:t.clickLocation}})}))],2)},b=[],y={getCounts:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i="";if(t){var s=e?t["counts"].filter((function(t){return t.location==e})):t["counts"],a=s.reduce((function(t,e){return 0!=e.number?t["nonzerocounts"].push(e):t["zerocounts"].push(e),t}),{zerocounts:[],nonzerocounts:[]}),o=a["zerocounts"].length,c=a["nonzerocounts"];if(c.length>0){var r=c.reduce((function(t,e){return t+parseInt(e["number"])}),0);i=r}else o>0&&(e?i=0:e||(i=""!=i?i+o:o))}return n&&""!==i?" (".concat(i,") "):i}},w={props:["label","nodes","depth","id","parentdata"],data:function(){return{showChildren:!1,currentcount:"",selected:!1,caretdirection:this.showChildren?"down":"up"}},name:"tree-menu",watch:{"parentdata.counts":{handler:function(t){this.currentcount=y.getCounts(t[this.parentdata.currentinit],this.id)},deep:!0},"parentdata.location":{handler:function(t){this.nodes||(this.selected=this.id==t)},deep:!0}},created:function(){this.currentcount=y.getCounts(this.parentdata.counts[this.parentdata.currentinit],this.id),this.selected=this.id==this.parentdata.location},methods:{addToCount:function(){this.$emit("addtocounts",0)},clickLocation:function(t){this.$emit("clickLocation",t)},toggleChildren:function(){this.showChildren=!this.showChildren,this.$emit("clickLocation",{id:this.id,title:this.label,nodes:this.nodes,index:this.depth}),this.nodes||this.addToCount()}}},_=w,k=(n("ff5d"),n("2877")),T=Object(k["a"])(_,C,b,!1,null,null,null),L=T.exports,x=n("2ef0"),I={name:"SumaClient",components:{treeMenu:L},data:function(){return{initresults:"",currentinit:"",cachedinitdata:{},initurl:initiativeUrl,baseiniturl:baseInitUrl,syncurl:syncUrl,appVersion:"1.1.0",device:"",children:[],activities:{},counts:{},location:"",activityvalues:{},activityvaluesmulti:[],showcounts:!1,locationtitle:"",buttonClickable:!1,menuShown:!0,settings:this.$route.query,countNumber:1,datetime:""}},created:function(){this.getDeviceData(),this.loadLocalForageData(),this.loadInitInfo(),this.loadInitData()},destroyed:function(){clearInterval(this.interval)},watch:{currentinit:function(){d.a.setItem("currentinit",this.currentinit)},children:{handler:function(){d.a.setItem("children",this.children)},deep:!0},cachedinitdata:function(t){d.a.setItem("cachedinitdata",t)},counts:{handler:function(){d.a.setItem("counts",this.counts)},deep:!0},settings:{handler:function(t){var e=this;"hide"!=this.settings.dateTime?this.interval=setInterval((function(){e.datetime=e.getDateTime()}),1e3):clearInterval(this.interval),d.a.setItem("settings",t)},deep:!0}},methods:{clickLocation:function(t){t.nodes||(this.location=t.id,this.showcounts=!0),this.singleLocation(t.nodes),this.resetActivityChecks(),this.createLocationTitle()},getDeviceData:function(){var t=new v.a,e=navigator.userAgent,n=t.parse(e);this.device=n.os.name},requiredFieldsCheck:function(){var t=this;this.$nextTick((function(){var e=document.querySelectorAll("div.activityGroup.required"),n=Array.from(e).map((function(t){return t.querySelectorAll("input:checked").length}));t.buttonClickable=-1==n.indexOf(0)}))},loadLocalForageData:function(){for(var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["counts","settings","currentinit","children"],n=function(){var n=e[i];d.a.getItem(n).then((function(e){return null!=e&&(t[n]=e,!0)})).then((function(e){e&&"counts"==n&&t.submitCounts()})).catch((function(t){console.error("There was an error "+t)}))},i=0;i<e.length;i++)n()},loadInitData:function(){var t=this;d.a.getItem("cachedinitdata").then((function(e){null!=e&&(t.cachedinitdata=x.omitBy(e,(function(t){return Date.now()-t.retrieved>36e5})))}))},loadInitInfo:function(){var t=this;d.a.getItem("initcache").then((function(e){null===e||Date.now()-e.retrieved>36e5?u.a.get(t.baseiniturl).then((function(e){e.data&&(t.initresults=e.data,d.a.setItem("initcache",{retrieved:Date.now(),initresults:e.data}))})).catch((function(t){console.error("There was an error "+t)})):t.initresults=e.initresults}))},updateInit:function(){var t=this;this.children=[],Object.keys(this.cachedinitdata).indexOf(this.currentinit)>-1?this.populateInitData(this.cachedinitdata[this.currentinit]):u.a.get("".concat(this.initurl).concat(this.currentinit)).then((function(e){t.populateInitData(e.data),t.$set(t.cachedinitdata,t.currentinit,x.set(e.data,"retrieved",Date.now()))}))},populateInitData:function(t){var e=this;this.children=t.locations.children;var n=t.activityGroups,i=x.groupBy(t.activities,"groupId");for(var s in this.location="",this.showcounts=!1,this.activities={},i){var a=n.filter((function(t){return t.id==s}))[0];a["options"]=i[s],this.activities[s]=a}this.buttonClickable=-1==Object.keys(this.activities).map((function(t){return e.activities[t].required})).indexOf(!0),this.singleLocation(this.children)},singleLocation:function(t){t&&1==t.length&&this.$nextTick((function(){document.getElementById(t[0].id).click()}))},createLocationTitle:function(){var t=this;this.$nextTick((function(){var e=document.querySelector("ul > .selected"),n={};if(e){var i=parseInt(e.closest("ul").className.replace("tree-menu","").replace("level-","").trim());while(i>0){var s=e.closest("ul.level-".concat(i)).getAttribute("data-label");n[i]=s,i-=1}}t.locationtitle=Object.values(n).join(" | ")}))},resetActivityChecks:function(){this.activityvalues={},this.activityvaluesmulti=[],this.countNumber=1,document.getElementById("countsform").scrollTop=0,this.requiredFieldsCheck()},sendCounts:function(t,e){var n=this;u()({method:"POST",url:this.syncurl,headers:{"content-type":"application/x-www-form-urlencoded"},data:"json=".concat(t)}).then((function(i){if("Transaction Complete"!=i.data)n.syncError();else{var s=JSON.parse(t),a=s.sessions.length,o=x.uniq(x.flatten(e["locations"])).length,c=e["counts"];m.a.fire({title:"Counts submitted!",text:"".concat(c," ").concat(g()("counts",c),' (including "zero" counts) covering ').concat(o," ").concat(g()("locations",o)," in ").concat(a," ").concat(g()("initiatives",a)," has been sent to the server"),icon:"success"}),n.clearCounts(!0)}})).catch((function(t){n.syncError(),console.log(t.response)}))},submitCounts:function(){var t=this;d.a.getItem("queuedcounts").then((function(e){var n=Object.values(t.counts),i=e?e.concat(n):n;d.a.setItem("queuedcounts",i);var s=i.reduce((function(t,e){return t["counts"]+=y.getCounts(e,!1,!1),t["locations"].push(e.counts.map((function(t){return t.location}))),t}),{counts:0,locations:[]}),a=t.requiredLocationsCheck;if(0!==i.length&&0!==s["counts"]&&a.passed){var o=t.syncCountDict(i);t.sendCounts(o,s)}else a.passed||m.a.fire({title:"Missing Locations!",html:"".concat(a.text," is missing a count.\n            Make sure all locations have at least a zero count."),icon:"warning"})})).then((function(){})).catch((function(t){console.error("There was an error "+t)}))},syncError:function(){this.clearCounts(),m.a.fire("Sync error","Error sending data to server. This may be caused by issues including server outages and Wi-Fi             connectivity problems. The data will be retained by the browser. Please contact an administrator if             this doesn't resolve itself soon.","error")},clearCounts:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.counts={},this.loadLocalForageData(["currentinit","children"]),t&&d.a.setItem("queuedcounts",[])},resetCounts:function(){var t=this;m.a.fire({title:"Abandon Session",text:"Are you sure you want to delete the data you've just collected? All data you've collected will be deleted permanently.",confirmButtonText:"DELETE",cancelButtonText:"Keep Collecting",showCancelButton:!0}).then((function(e){1==e.value&&t.clearCounts()})).catch((function(t){console.log(t)}))},cleanEmptyInitCounts:function(){this.counts=x.omitBy(this.counts,(function(t){return 0===t["counts"].length}))},resetInitCountsByLocation:function(t){var e=this;m.a.fire({title:"Reset Locations Counts",text:"Are you sure you want to delete the data you've just collected? All data you've collected for ".concat(this.locationtitle," be deleted permanently."),confirmButtonText:"RESET",showCancelButton:!0}).then((function(n){1==n.value&&(x.remove(e.counts[e.currentinit]["counts"],(function(e){return e.location===t})),e.cleanEmptyInitCounts())})).catch((function(t){console.log(t)}))},undoLastCount:function(){if(this.counts[this.currentinit]&&this.counts[this.currentinit]["counts"].length>0){var t=this.locationCounts(this.location),e=t.pop();if(e&&(this.counts[this.currentinit]["counts"]=x.without(this.counts[this.currentinit]["counts"],e),0===t.length))switch(e.number){case 0:this.cleanEmptyInitCounts();break;case 1:this.addToCount(0);break}}this.resetActivityChecks()},addToCount:function(t){var e=this,n=Math.round(Date.now()/1e3),i=this.activityvaluesmulti.concat(Object.values(this.activityvalues)),s=this.counts[this.currentinit]?this.counts[this.currentinit]:{counts:[],initiativeID:this.currentinit,startTime:n},a=this.location;x.remove(s["counts"],(function(t){return t.location==a&&0==t.number}));var o=0!=t||0==s["counts"].filter((function(t){return t.location==e.location})).length;o&&(s["counts"].push({timestamp:n,location:this.location,activities:i,number:parseInt(t)}),s["endTime"]=n,this.$set(this.counts,this.currentinit,s)),this.resetActivityChecks()},deselect:function(t,e){t==this.activityvalues[e]&&(this.activityvalues[e]=""),this.requiredFieldsCheck()},syncCountDict:function(t){var e=JSON.stringify({version:this.appVersion,device:this.device,sessions:t});return e},getDateTime:function(){var t=Date.now(),e=new Date(t);switch(this.settings.dateTime){case"time":return e.toLocaleTimeString();case"date":return e.toDateString();default:return"".concat(e.toDateString(),"<br>").concat(e.toLocaleTimeString())}},locationCounts:function(){var t=this,e="";return this.counts[this.currentinit]&&this.counts[this.currentinit]["counts"]&&(e=this.counts[this.currentinit]["counts"].filter((function(e){return e.location==t.location}))),e}},computed:{compCounts:function(){return y.getCounts(this.counts[this.currentinit],this.location)},hasNoCounts:function(){return 0===Object.keys(this.counts).length&&this.counts.constructor===Object},lastCount:function(){var t=this.locationCounts(),e="";if(t.length>0){var n=new Date(1e3*t.pop().timestamp);e=n.toLocaleTimeString()}return e},locationDescription:function(){var t,e,n=this;return null===(t=this.children)||void 0===t?void 0:null===(e=t[this.children.findIndex((function(t){return t["id"]==n.location}))])||void 0===e?void 0:e.description},requiredLocationsCheck:function(){if(this.settings.requireLocations){var t=Array.from(document.getElementsByClassName("lowestlocation")),e=t.map((function(t){return parseInt(t.id)})),n=[];this.counts[this.currentinit]&&(n=this.counts[this.currentinit]["counts"].map((function(t){return t.location})));var i=x.difference(e,n);if(0==i.length||i.length==e.length)return{passed:!0};var s=i.map((function(t){return document.getElementById(t).innerText}));return{text:s.join("<br>"),passed:!1}}return{passed:!0}}},filters:{unescapeFilter:function(t){return x.unescape(t)}}},A=I,D=(n("85f9"),Object(k["a"])(A,o,c,!1,null,null,null)),S=D.exports,q={name:"app",components:{SumaClient:S}},O=q,N=(n("034f"),Object(k["a"])(O,s,a,!1,null,null,null)),$=N.exports,j=n("6018"),P=n("8c4f"),E=n("1881"),M=n.n(E);i["a"].use(M.a),i["a"].use(P["a"]),i["a"].config.productionTip=!1,i["a"].use(j["a"]);var B=[{path:"/",component:S,name:"index"}],z=new P["a"]({mode:"history",routes:B});new i["a"]({render:function(t){return t($)},router:z}).$mount("#app")},"85ec":function(t,e,n){},"85f9":function(t,e,n){"use strict";var i=n("558e"),s=n.n(i);s.a},bc6c:function(t,e,n){},ff5d:function(t,e,n){"use strict";var i=n("bc6c"),s=n.n(i);s.a}});
//# sourceMappingURL=app.js.map
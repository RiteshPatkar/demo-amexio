webpackJsonp([5],{"+vNu":function(n,l,a){"use strict";a.d(l,"a",function(){return t});var t=function(){function n(){this.geoChartData=[["Country","Popularity"],["Germany",200],["United States",300],["Brazil",400],["Canada",500],["France",550],["RU",350],["India",700]],this.treeMapData=[["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,0,0],["America","Global",0,0],["Europe","Global",0,0],["Asia","Global",0,0],["Australia","Global",0,0],["Africa","Global",0,0],["Brazil","America",11,10],["USA","America",52,31],["Mexico","America",24,12],["Canada","America",16,-23],["France","Europe",42,-11],["Germany","Europe",31,-2],["Sweden","Europe",22,-13],["Italy","Europe",17,4],["UK","Europe",21,-5],["China","Asia",36,4],["Japan","Asia",20,-12],["India","Asia",40,63],["Laos","Asia",4,34],["Mongolia","Asia",1,-5],["Israel","Asia",12,24],["Iran","Asia",18,13],["Pakistan","Asia",11,-52],["Egypt","Africa",21,0],["S. Africa","Africa",30,43],["Sudan","Africa",12,2],["Congo","Africa",10,12],["Zaire","Africa",8,10]]}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},"7PY5":function(n,l,a){"use strict";function t(n){return r._6(0,[(n()(),r._7(0,null,null,1,"div",[["class","lmask"]],null,null,null,null,null)),(n()(),r._8(null,["\n    "]))],null,null)}function e(n){return r._6(0,[(n()(),r._8(null,["\n    "])),(n()(),r._7(0,null,null,4,"div",[],[[1,"id",0],[4,"width",null],[4,"height",null]],[["window","resize"]],function(n,l,a){var t=!0,e=n.component;if("window:resize"===l){t=!1!==e.onResize(a)&&t}return t},null,null)),(n()(),r._8(null,[" "])),(n()(),r._12(16777216,null,null,1,null,t)),r._9(16384,null,0,u.l,[r.W,r._13],{ngIf:[0,"ngIf"]},null),(n()(),r._8(null,["\n    "])),(n()(),r._8(null,["\n  "]))],function(n,l){n(l,4,0,!l.component.hasLoaded)},function(n,l){var a=l.component;n(l,1,0,a.id,a.width,a.height)})}function o(n){return r._6(0,[(n()(),r._7(0,null,null,2,"amexio-map-treemap",[],null,null,null,e,p)),r._9(1163264,null,1,i.a,[s.a],null,null),r._10(603979776,1,{maptleComp:1})],function(n,l){n(l,1,0)},null)}var r=a("/oeL"),i=a("TdX1"),u=a("qbdv"),s=a("YAkx");a.d(l,"b",function(){return p}),l.a=e;var d=[".lmask[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 9999;\n    opacity: 0.4;\n  }\n  .lmask.fixed[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  .lmask[_ngcontent-%COMP%]:before {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 35px #2187e7;\n    width: 50px;\n    height: 50px;\n    -moz-animation: spinPulse 1s infinite ease-in-out;\n    -webkit-animation: spinPulse 1s infinite linear;\n    margin: -25px 0 0 -25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .lmask[_ngcontent-%COMP%]:after {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 15px #2187e7;\n    width: 30px;\n    height: 30px;\n    -moz-animation: spinoffPulse 1s infinite linear;\n    -webkit-animation: spinoffPulse 1s infinite linear;\n    margin: -15px 0 0 -15px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  @-moz-keyframes spinPulse {\n    0% {\n      -moz-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -moz-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -moz-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-moz-keyframes spinoffPulse {\n    0% {\n      -moz-transform: rotate(0deg);\n    }\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spinPulse {\n    0% {\n      -webkit-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -webkit-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-webkit-keyframes spinoffPulse {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }"],p=r._5({encapsulation:0,styles:d,data:{}});r._11("amexio-map-treemap",i.a,o,{width:"width",height:"height",data:"data",minColor:"minColor",midColor:"midColor",maxColor:"maxColor",showScale:"showScale",maxPostDepth:"maxPostDepth"},{},[])},C0nB:function(n,l,a){"use strict";function t(n){return r._6(0,[(n()(),r._7(0,null,null,1,"div",[["class","lmask"]],null,null,null,null,null)),(n()(),r._8(null,["\n        "]))],null,null)}function e(n){return r._6(0,[(n()(),r._8(null,["\n      "])),(n()(),r._7(0,null,null,4,"div",[],[[1,"id",0],[4,"width",null],[4,"height",null]],null,null,null,null)),(n()(),r._8(null,["\n        "])),(n()(),r._12(16777216,null,null,1,null,t)),r._9(16384,null,0,i.l,[r.W,r._13],{ngIf:[0,"ngIf"]},null),(n()(),r._8(null,["\n      "])),(n()(),r._8(null,["\n  "]))],function(n,l){n(l,4,0,!l.component.hasLoaded)},function(n,l){var a=l.component;n(l,1,0,a.id,a.width,a.height)})}function o(n){return r._6(0,[(n()(),r._7(0,null,null,2,"amexio-chart-geo",[],null,null,null,e,p)),r._9(1163264,null,1,u.a,[s.a],null,null),r._10(603979776,1,{chartAreaComp:1})],function(n,l){n(l,1,0)},null)}var r=a("/oeL"),i=a("qbdv"),u=a("jOjW"),s=a("YAkx");a.d(l,"b",function(){return p}),l.a=e;var d=[".lmask[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 9999;\n    opacity: 0.4;\n  }\n  .lmask.fixed[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  .lmask[_ngcontent-%COMP%]:before {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 35px #2187e7;\n    width: 50px;\n    height: 50px;\n    -moz-animation: spinPulse 1s infinite ease-in-out;\n    -webkit-animation: spinPulse 1s infinite linear;\n    margin: -25px 0 0 -25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .lmask[_ngcontent-%COMP%]:after {\n    content: '';\n    background-color: transparent;\n    border: 5px solid rgba(0, 183, 229, 0.9);\n    opacity: .9;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-radius: 50px;\n    box-shadow: 0 0 15px #2187e7;\n    width: 30px;\n    height: 30px;\n    -moz-animation: spinoffPulse 1s infinite linear;\n    -webkit-animation: spinoffPulse 1s infinite linear;\n    margin: -15px 0 0 -15px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  @-moz-keyframes spinPulse {\n    0% {\n      -moz-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -moz-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -moz-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-moz-keyframes spinoffPulse {\n    0% {\n      -moz-transform: rotate(0deg);\n    }\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spinPulse {\n    0% {\n      -webkit-transform: rotate(160deg);\n      opacity: 0;\n      box-shadow: 0 0 1px #2187e7;\n    }\n    50% {\n      -webkit-transform: rotate(145deg);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: rotate(-320deg);\n      opacity: 0;\n    }\n  }\n  @-webkit-keyframes spinoffPulse {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }"],p=r._5({encapsulation:0,styles:d,data:{}});r._11("amexio-chart-geo",u.a,o,{width:"width",height:"height",data:"data",displayCountryName:"displayCountryName",regionCode:"regionCode",backgroundColor:"backgroundColor",datalessRegionColor:"datalessRegionColor"},{},[])},OYYj:function(n,l,a){"use strict";function t(n){return o._6(0,[(n()(),o._7(0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),o._8(null,["\n  "])),(n()(),o._7(0,null,null,18,"div",[["class","col-lg-12 col-sm-12 col-sx-12 com-md-12"]],null,null,null,null,null)),(n()(),o._8(null,["\n    "])),(n()(),o._7(0,null,null,15,"amexio-card-pane",[],null,null,null,r.a,r.b)),o._9(4308992,null,0,i.a,[],{enableHeader:[0,"enableHeader"],enableFooter:[1,"enableFooter"]},null),(n()(),o._8(null,["\n      "])),(n()(),o._7(0,null,0,2,"amexio-pane-header",[],null,null,null,u.a,u.b)),o._9(114688,null,0,s.a,[],null,null),(n()(),o._8(0,["Region Geo-Charts"])),(n()(),o._8(null,["\n      "])),(n()(),o._7(0,null,1,7,"amexio-pane-body",[],null,null,null,d.a,d.b)),o._9(114688,null,0,p.a,[],null,null),(n()(),o._8(0,["\n        "])),(n()(),o._7(0,null,0,3,"amexio-chart-geo",[],null,null,null,c.a,c.b)),o._9(1163264,null,1,m.a,[f.a],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),o._10(603979776,1,{chartAreaComp:1}),(n()(),o._8(null,["\n        "])),(n()(),o._8(0,["\n      "])),(n()(),o._8(null,["\n    "])),(n()(),o._8(null,["\n  "])),(n()(),o._8(null,["\n"])),(n()(),o._8(null,["\n"])),(n()(),o._7(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._8(null,["\n"])),(n()(),o._7(0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),o._8(null,["\n  "])),(n()(),o._7(0,null,null,18,"div",[["class","col-lg-12 col-sm-12 col-sx-12 com-md-12"]],null,null,null,null,null)),(n()(),o._8(null,["\n    "])),(n()(),o._7(0,null,null,15,"amexio-card-pane",[],null,null,null,r.a,r.b)),o._9(4308992,null,0,i.a,[],{enableHeader:[0,"enableHeader"],enableFooter:[1,"enableFooter"]},null),(n()(),o._8(null,["\n      "])),(n()(),o._7(0,null,0,2,"amexio-pane-header",[],null,null,null,u.a,u.b)),o._9(114688,null,0,s.a,[],null,null),(n()(),o._8(0,["Treemaps"])),(n()(),o._8(null,["\n      "])),(n()(),o._7(0,null,1,7,"amexio-pane-body",[],null,null,null,d.a,d.b)),o._9(114688,null,0,p.a,[],null,null),(n()(),o._8(0,["\n        "])),(n()(),o._7(0,null,0,3,"amexio-map-treemap",[],null,null,null,b.a,b.b)),o._9(1163264,null,1,_.a,[f.a],{width:[0,"width"],height:[1,"height"],data:[2,"data"],minColor:[3,"minColor"],midColor:[4,"midColor"],maxColor:[5,"maxColor"],showScale:[6,"showScale"],maxPostDepth:[7,"maxPostDepth"]},null),o._10(603979776,2,{maptleComp:1}),(n()(),o._8(null,["\n        "])),(n()(),o._8(0,["\n      "])),(n()(),o._8(null,["\n    "])),(n()(),o._8(null,["\n  "])),(n()(),o._8(null,["\n"])),(n()(),o._8(null,["\n"]))],function(n,l){var a=l.component;n(l,5,0,!0,!1),n(l,8,0),n(l,12,0);n(l,15,0,"100%","500px",a.geoChartData);n(l,30,0,!0,!1),n(l,33,0),n(l,37,0);n(l,40,0,"100%","500px",a.treeMapData,"#f00","#ddd","#0d0",!0,2)},null)}function e(n){return o._6(0,[(n()(),o._7(0,null,null,1,"maps",[],null,null,null,t,x)),o._9(114688,null,0,h.a,[],null,null)],function(n,l){n(l,1,0)},null)}var o=a("/oeL"),r=a("I7Rc"),i=a("NWlw"),u=a("ZiT8"),s=a("3H4V"),d=a("kMw+"),p=a("v/yU"),c=a("C0nB"),m=a("jOjW"),f=a("YAkx"),b=a("7PY5"),_=a("TdX1"),h=a("+vNu");a.d(l,"a",function(){return w});var g=[],x=o._5({encapsulation:2,styles:g,data:{}}),w=o._11("maps",h.a,e,{},{},[])},pPYe:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a("/oeL"),e=a("xW8j"),o=a("OYYj"),r=a("qbdv"),i=a("bm2B"),u=a("CPp0"),s=a("BkNc"),d=a("HMiW"),p=a("+vNu");a.d(l,"MapsModuleNgFactory",function(){return c});var c=t.b(e.a,[],function(n){return t.c([t.d(512,t.e,t.f,[[8,[o.a]],[3,t.e],t.g]),t.d(4608,r.a,r.b,[t.h]),t.d(4608,i.a,i.a,[]),t.d(4608,u.a,u.a,[]),t.d(4608,u.b,u.c,[]),t.d(5120,u.d,u.e,[]),t.d(4608,u.f,u.f,[u.a,u.b,u.d]),t.d(4608,u.g,u.h,[]),t.d(5120,u.i,u.j,[u.f,u.g]),t.d(512,r.d,r.d,[]),t.d(512,i.b,i.b,[]),t.d(512,i.c,i.c,[]),t.d(512,s.x,s.x,[[2,s.m],[2,s.c]]),t.d(512,u.k,u.k,[]),t.d(512,d.a,d.a,[]),t.d(512,e.a,e.a,[]),t.d(1024,s.t,function(){return[[{path:"",component:p.a}]]},[])])})},xW8j:function(n,l,a){"use strict";var t=a("+vNu");a.d(l,"a",function(){return e});var e=(t.a,function(){function n(){}return n}())}});
(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),m=a(2),l=a(3),c=a(5),u=a(4),o=(a(13),a(14),a(1)),p=a.n(o),f=(p.a.shape({images:p.a.arrayOf(p.a.string.isRequired),step:p.a.number,frameSize:p.a.number,itemWidth:p.a.number,animationDuration:p.a.number,infinite:p.a.bool}),p.a.shape({prevSlide:p.a.func,nextSlide:p.a.func}),function(e){var t=e.prevSlide,a=e.nextSlide;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",onClick:t},"Prev"),i.a.createElement("button",{type:"button",onClick:a},"Next"))}),g=function(e){var t=e.img,a=e.itemWidth;return i.a.createElement("img",{src:t,style:{width:a},alt:"Smile"})},h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).maxTranslate=function(){var e=n.state,t=e.itemWidth,a=e.images,i=e.frameSize;return t*a.length-t*i},n.prevSlide=function(){var e=n.state,t=e.itemWidth,a=e.translateX,i=e.step;return e.infinite&&a>=0?(n.setState((function(e){return{translateX:-n.maxTranslate()}})),!1):(a>=0&&n.setState((function(e){return{translateX:0}})),n.setState((function(e){return{translateX:Math.min(e.translateX+t*i,0)}})),!0)},n.nextSlide=function(){var e=n.state,t=e.itemWidth,a=e.translateX,i=e.step,r=e.images;if(e.infinite&&Math.abs(a)>=n.maxTranslate())return n.setState((function(e){return{translateX:0}})),!1;Math.abs(a)>=n.maxTranslate()&&n.setState((function(e){return{translateX:-n.maxTranslate()}}));var s=-t*(r.length-i);return n.setState((function(e){return{translateX:Math.max(e.translateX-t*i,s)}})),!0},n.state={images:n.props.images,step:n.props.step,frameSize:n.props.frameSize,itemWidth:n.props.itemWidth,animationDuration:n.props.animationDuration,infinite:n.props.infinite,translateX:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.frameSize,n=e.itemWidth,r=e.animationDuration,s=e.translateX;return i.a.createElement("div",{className:"carousel",style:{width:n*a}},i.a.createElement("ul",{className:"carousel__list",style:{transition:"transform ".concat(r,"ms ease"),transform:"translateX(".concat(s,"px)")}},t.map((function(e){return i.a.createElement("li",{key:e.match(/\d+/)[0]},i.a.createElement(g,{img:e,itemWidth:n}))}))),i.a.createElement(f,{prevSlide:this.prevSlide,nextSlide:this.nextSlide}))}}]),a}(i.a.Component),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.images;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"No Infinite"),i.a.createElement("div",null,i.a.createElement(h,{images:e,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1})),i.a.createElement("h1",null,"Infinite"),i.a.createElement("div",null,i.a.createElement(h,{images:e,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!0})))}}]),a}(i.a.Component);s.a.render(i.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.1d0fd5c6.chunk.js.map
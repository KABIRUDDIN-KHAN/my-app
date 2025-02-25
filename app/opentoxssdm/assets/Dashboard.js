import{u as ct,g as ut,B as W,s as _,o as d,c as m,r as T,m as f,a as Te,b as z,d as q,f as ue,e as dt,h as ge,i as Re,j as ae,R as Le,k as $e,w as de,l as N,n as Q,p as P,q as ye,t as Z,v as ze,x as K,y as ee,F as R,z as pt,A as ie,C as ft,D as I,E as He,G as ht,H as mt,I as A,J as E,K as vt,L as j,M as X,N as bt,O as Y,P as xe,Q as gt,S as Ve,T as te,U as ne,V as M,W as re,Z as Ie,X as se,Y as yt,_ as wt,$ as St,a0 as Ot,a1 as Pe,a2 as It,a3 as me,a4 as xt,a5 as Ct,a6 as we,a7 as le,a8 as je,a9 as kt,aa as De,ab as Tt,ac as Lt}from"./index.js";import{s as We,a as $t}from"./index2.js";function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}function zt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function At(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Vt(o.key),o)}}function Bt(t,e,n){return e&&At(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vt(t){var e=Pt(t,"string");return pe(e)=="symbol"?e:e+""}function Pt(t,e){if(pe(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(pe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Dt=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};zt(this,t),this.element=e,this.listener=n}return Bt(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=ut(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function Se(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ct(t)}var Mt=function(e){var n=e.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},Ft={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},Et=W.extend({name:"tabs",theme:Mt,classes:Ft}),Kt={name:"BaseTabs",extends:_,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Et,provide:function(){return{$pcTabs:this,$parentInstance:this}}},_e={name:"Tabs",extends:Kt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||Se()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||Se()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Nt(t,e,n,o,a,i){return d(),m("div",f({class:t.cx("root")},t.ptmi("root")),[T(t.$slots,"default")],16)}_e.render=Nt;var Ge={name:"ChevronLeftIcon",extends:Te};function Rt(t,e,n,o,a,i){return d(),m("svg",f({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[z("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}Ge.render=Rt;var Ue={name:"ChevronRightIcon",extends:Te};function Ht(t,e,n,o,a,i){return d(),m("svg",f({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[z("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}Ue.render=Ht;var jt={root:"p-tablist",content:function(e){var n=e.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Wt=W.extend({name:"tablist",classes:jt}),_t={name:"BaseTabList",extends:_,props:{},style:Wt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},qe={name:"TabList",extends:_t,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=q(e),o=e.scrollLeft-n;e.scrollLeft=o<=0?0:o},onNextButtonClick:function(){var e=this.$refs.content,n=q(e)-this.getVisibleButtonWidths(),o=e.scrollLeft+n,a=e.scrollWidth-n;e.scrollLeft=o>=a?a:o},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,o=e.inkbar,a=e.tabs,i=ue(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(o.style.height=dt(i)+"px",o.style.top=ge(i).top-ge(a).top+"px"):(o.style.width=Re(i)+"px",o.style.left=ge(i).left-ge(a).left+"px")},updateButtonState:function(){var e=this.$refs,n=e.list,o=e.content,a=o.scrollLeft,i=o.scrollTop,r=o.scrollWidth,l=o.scrollHeight,u=o.offsetWidth,c=o.offsetHeight,s=[q(o),ae(o)],h=s[0],b=s[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=c&&parseInt(i)!==l-b):(this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=n.offsetWidth>=u&&parseInt(a)!==r-h)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevBtn,o=e.nextBtn;return[n,o].reduce(function(a,i){return i?a+q(i):a},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:Ge,ChevronRightIcon:Ue},directives:{ripple:Le}},Gt=["aria-label","tabindex"],Ut=["aria-orientation"],qt=["aria-label","tabindex"];function Yt(t,e,n,o,a,i){var r=$e("ripple");return d(),m("div",f({ref:"list",class:t.cx("root")},t.ptmi("root")),[i.showNavigators&&a.isPrevButtonEnabled?de((d(),m("button",f({key:0,ref:"prevButton",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(d(),N(Q(i.templates.previcon||"ChevronLeftIcon"),f({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Gt)),[[r]]):P("",!0),z("div",f({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},t.ptm("content")),[z("div",f({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[T(t.$slots,"default"),z("span",f({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Ut)],16),i.showNavigators&&a.isNextButtonEnabled?de((d(),m("button",f({key:1,ref:"nextButton",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(d(),N(Q(i.templates.nexticon||"ChevronRightIcon"),f({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,qt)),[[r]]):P("",!0)],16)}qe.render=Yt;var Xt={root:function(e){var n=e.instance,o=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":o.disabled}]}},Zt=W.extend({name:"tab",classes:Xt}),Qt={name:"BaseTab",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Zt,provide:function(){return{$pcTab:this,$parentInstance:this}}},Ye={name:"Tab",extends:Qt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?e:e.nextElementSibling;return o?ye(o,"data-p-disabled")||ye(o,"data-pc-section")==="inkbar"?this.findNextTab(o):ue(o,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?e:e.previousElementSibling;return o?ye(o,"data-p-disabled")||ye(o,"data-pc-section")==="inkbar"?this.findPrevTab(o):ue(o,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){Z(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ze((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tabpanel_").concat(this.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:Le}};function Jt(t,e,n,o,a,i){var r=$e("ripple");return t.asChild?T(t.$slots,"default",{key:1,class:ee(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):de((d(),N(Q(t.as),f({key:0,class:t.cx("root"),onClick:i.onClick},i.attrs),{default:K(function(){return[T(t.$slots,"default")]}),_:3},16,["class","onClick"])),[[r]])}Ye.render=Jt;var en={root:"p-tabpanels"},tn=W.extend({name:"tabpanels",classes:en}),nn={name:"BaseTabPanels",extends:_,props:{},style:tn,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Xe={name:"TabPanels",extends:nn,inheritAttrs:!1};function on(t,e,n,o,a,i){return d(),m("div",f({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[T(t.$slots,"default")],16)}Xe.render=on;var an={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},rn=W.extend({name:"tabpanel",classes:an}),ln={name:"BaseTabPanel",extends:_,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:rn,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Ze={name:"TabPanel",extends:ln,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ze((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tab_").concat(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function sn(t,e,n,o,a,i){var r,l;return i.$pcTabs?(d(),m(R,{key:1},[t.asChild?T(t.$slots,"default",{key:1,class:ee(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(d(),m(R,{key:0},[!((r=i.$pcTabs)!==null&&r!==void 0&&r.lazy)||i.active?de((d(),N(Q(t.as),f({key:0,class:t.cx("root")},i.attrs),{default:K(function(){return[T(t.$slots,"default")]}),_:3},16,["class"])),[[pt,(l=i.$pcTabs)!==null&&l!==void 0&&l.lazy?!0:i.active]]):P("",!0)],64))],64)):T(t.$slots,"default",{key:0})}Ze.render=sn;function Qe(t){return ht()?(mt(t),!0):!1}function Ae(t){return typeof t=="function"?t():I(t)}const cn=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const un=Object.prototype.toString,dn=t=>un.call(t)==="[object Object]",pn=()=>{};function fn(t){return He()}function hn(t,e=!0,n){fn()?ie(t,n):e?t():ft(t)}const Be=cn?window:void 0;function mn(t){var e;const n=Ae(t);return(e=n==null?void 0:n.$el)!=null?e:n}function vn(...t){let e,n,o,a;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,o,a]=t,e=Be):[e,n,o,a]=t,!e)return pn;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const i=[],r=()=>{i.forEach(s=>s()),i.length=0},l=(s,h,b,w)=>(s.addEventListener(h,b,w),()=>s.removeEventListener(h,b,w)),u=E(()=>[mn(e),Ae(a)],([s,h])=>{if(r(),!s)return;const b=dn(h)?{...h}:h;i.push(...n.flatMap(w=>o.map(L=>l(s,w,L,b))))},{immediate:!0,flush:"post"}),c=()=>{u(),r()};return Qe(c),c}function bn(){const t=A(!1),e=He();return e&&ie(()=>{t.value=!0},e),t}function gn(t){const e=bn();return j(()=>(e.value,!!t()))}function yn(t,e={}){const{window:n=Be}=e,o=gn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const i=A(!1),r=c=>{i.value=c.matches},l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",r):a.removeListener(r))},u=vt(()=>{o.value&&(l(),a=n.matchMedia(Ae(t)),"addEventListener"in a?a.addEventListener("change",r):a.addListener(r),i.value=a.matches)});return Qe(()=>{u(),l(),a=void 0}),i}function wn(t={}){const{window:e=Be,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:i=!0,type:r="inner"}=t,l=A(n),u=A(o),c=()=>{e&&(r==="outer"?(l.value=e.outerWidth,u.value=e.outerHeight):i?(l.value=e.innerWidth,u.value=e.innerHeight):(l.value=e.document.documentElement.clientWidth,u.value=e.document.documentElement.clientHeight))};if(c(),hn(c),vn("resize",c,{passive:!0}),a){const s=yn("(orientation: portrait)");E(s,()=>c())}return{width:l,height:u}}function Oe(){const{width:t}=wn(),e=j(()=>{switch(!0){case t.value<500:return"10px";case(t.value>=500&&t.value<600):return"11px";case(t.value>=600&&t.value<750):return"12px";case(t.value>=750&&t.value<960):return"13px";case(t.value>=960&&t.value<1280):return"15px";case(t.value>=1280&&t.value<1920):return"17px";case(t.value>=1920&&t.value<2560):return"18px";default:return"20px"}}),n=j(()=>{switch(!0){case t.value<500:return"110px";case(t.value>=500&&t.value<600):return"120px";case(t.value>=600&&t.value<750):return"170px";case(t.value>=750&&t.value<960):return"190px";case(t.value>=960&&t.value<1280):return"200px";case(t.value>=1280&&t.value<1920):return"220px";case(t.value>=1920&&t.value<2560):return"230px";default:return"230px"}}),o=j(()=>{switch(!0){case t.value<500:return"75px";case(t.value>=500&&t.value<600):return"80px";case(t.value>=600&&t.value<750):return"130px";case(t.value>=750&&t.value<960):return"100px";case(t.value>=960&&t.value<1280):return"120px";case(t.value>=1280&&t.value<1920):return"140px";case(t.value>=1920&&t.value<2560):return"160px";default:return"180px"}});return{buttonFontSize:e,buttonWidth:n,textWidth:o}}const Sn=X(!1),On=X(!1),In=A(),xn=A("");function Je(){return{qsartoggleState:Sn,ssdtoggleState:On,selectedSpecies:In,activeTab:xn}}var Cn=function(e){var n=e.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(n("divider.horizontal.margin"),`;
    padding: `).concat(n("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(n("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(n("divider.vertical.margin"),`;
    padding: `).concat(n("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(n("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(n("divider.content.background"),`;
    color: `).concat(n("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`)},kn={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},Tn={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},Ln=W.extend({name:"divider",theme:Cn,classes:Tn,inlineStyles:kn}),$n={name:"BaseDivider",extends:_,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Ln,provide:function(){return{$pcDivider:this,$parentInstance:this}}},et={name:"Divider",extends:$n,inheritAttrs:!1},zn=["aria-orientation"];function An(t,e,n,o,a,i){return d(),m("div",f({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(d(),m("div",f({key:0,class:t.cx("content")},t.ptm("content")),[T(t.$slots,"default")],16)):P("",!0)],16,zn)}et.render=An;var tt={name:"ChevronDownIcon",extends:Te};function Bn(t,e,n,o,a,i){return d(),m("svg",f({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[z("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}tt.render=Bn;var Vn=function(e){var n=e.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding: `).concat(n("chip.padding.y")," ").concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},Pn={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Dn=W.extend({name:"chip",theme:Vn,classes:Pn}),Mn={name:"BaseChip",extends:_,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Dn,provide:function(){return{$pcChip:this,$parentInstance:this}}},nt={name:"Chip",extends:Mn,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:bt}},Fn=["aria-label"],En=["src"];function Kn(t,e,n,o,a,i){return a.visible?(d(),m("div",f({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root")),[T(t.$slots,"default",{},function(){return[t.image?(d(),m("img",f({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,En)):t.$slots.icon?(d(),N(Q(t.$slots.icon),f({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(d(),m("span",f({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):P("",!0),t.label?(d(),m("div",f({key:3,class:t.cx("label")},t.ptm("label")),Y(t.label),17)):P("",!0)]}),t.removable?T(t.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(d(),N(Q(t.removeIcon?"span":"TimesCircleIcon"),f({tabindex:"0",class:[t.cx("removeIcon"),t.removeIcon],onClick:i.close,onKeydown:i.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):P("",!0)],16,Fn)):P("",!0)}nt.render=Kn;var Nn=function(e){var n=e.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("inputtext.color"),`;
    background: `).concat(n("inputtext.background"),`;
    padding: `).concat(n("inputtext.padding.y")," ").concat(n("inputtext.padding.x"),`;
    border: 1px solid `).concat(n("inputtext.border.color"),`;
    transition: background `).concat(n("inputtext.transition.duration"),", color ").concat(n("inputtext.transition.duration"),", border-color ").concat(n("inputtext.transition.duration"),", outline-color ").concat(n("inputtext.transition.duration"),", box-shadow ").concat(n("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(n("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(n("inputtext.focus.border.color"),`;
    box-shadow: `).concat(n("inputtext.focus.ring.shadow"),`;
    outline: `).concat(n("inputtext.focus.ring.width")," ").concat(n("inputtext.focus.ring.style")," ").concat(n("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(n("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(n("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(n("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    border-color: `).concat(n("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(n("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(n("inputtext.disabled.background"),`;
    color: `).concat(n("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(n("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(n("inputtext.sm.font.size"),`;
    padding: `).concat(n("inputtext.sm.padding.y")," ").concat(n("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(n("inputtext.lg.font.size"),`;
    padding: `).concat(n("inputtext.lg.padding.y")," ").concat(n("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},Rn={root:function(e){var n=e.instance,o=e.props;return["p-inputtext p-component",{"p-filled":n.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-inputtext-fluid":n.hasFluid}]}},Hn=W.extend({name:"inputtext",theme:Nn,classes:Rn}),jn={name:"BaseInputText",extends:_,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Hn,provide:function(){return{$pcInputText:this,$parentInstance:this}}},it={name:"InputText",extends:jn,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return xe(this.fluid)?!!this.$pcFluid:this.fluid}}},Wn=["value","aria-invalid"];function _n(t,e,n,o,a,i){return d(),m("input",f({type:"text",class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,Wn)}it.render=_n;var Gn=gt(),Un=function(e){var n=e.dt;return`
.p-virtualscroller-loader {
    background: `.concat(n("virtualscroller.loader.mask.background"),`;
    color: `).concat(n("virtualscroller.loader.mask.color"),`;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(n("virtualscroller.loader.icon.size"),`;
    width: `).concat(n("virtualscroller.loader.icon.size"),`;
    height: `).concat(n("virtualscroller.loader.icon.size"),`;
}
`)},qn=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Me=W.extend({name:"virtualscroller",css:qn,theme:Un}),Yn={name:"BaseVirtualScroller",extends:_,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:Me,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;Me.loadCSS({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function fe(t){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(t)}function Fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fe(Object(n),!0).forEach(function(o){ot(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function ot(t,e,n){return(e=Xn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xn(t){var e=Zn(t,"string");return fe(e)=="symbol"?e:e+""}function Zn(t,e){if(fe(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(fe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var at={name:"VirtualScroller",extends:Yn,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,n){this.lazy&&e!==n&&e!==this.d_loading&&(this.d_loading=e)},items:function(e,n){(!n||n.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){Ve(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=q(this.element),this.defaultHeight=ae(this.element),this.defaultContentWidth=q(this.content),this.defaultContentHeight=ae(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",a=this.isBoth(),i=this.isHorizontal(),r=a?e.every(function(O){return O>-1}):e>-1;if(r){var l=this.first,u=this.element,c=u.scrollTop,s=c===void 0?0:c,h=u.scrollLeft,b=h===void 0?0:h,w=this.calculateNumItems(),L=w.numToleratedItems,x=this.getContentPosition(),k=this.itemSize,$=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1?arguments[1]:void 0;return B<=V?0:B},y=function(B,V,F){return B*V+F},g=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:B,top:V,behavior:o})},S=a?{rows:0,cols:0}:0,p=!1,v=!1;a?(S={rows:$(e[0],L[0]),cols:$(e[1],L[1])},g(y(S.cols,k[1],x.left),y(S.rows,k[0],x.top)),v=this.lastScrollPos.top!==s||this.lastScrollPos.left!==b,p=S.rows!==l.rows||S.cols!==l.cols):(S=$(e,L),i?g(y(S,k,x.left),s):g(b,y(S,k,x.top)),v=this.lastScrollPos!==(i?b:s),p=S!==l),this.isRangeChanged=p,v&&(this.first=S)}},scrollInView:function(e,n){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(n){var i=this.isBoth(),r=this.isHorizontal(),l=i?e.every(function(k){return k>-1}):e>-1;if(l){var u=this.getRenderedRange(),c=u.first,s=u.viewport,h=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return o.scrollTo({left:$,top:y,behavior:a})},b=n==="to-start",w=n==="to-end";if(b){if(i)s.first.rows-c.rows>e[0]?h(s.first.cols*this.itemSize[1],(s.first.rows-1)*this.itemSize[0]):s.first.cols-c.cols>e[1]&&h((s.first.cols-1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.first-c>e){var L=(s.first-1)*this.itemSize;r?h(L,0):h(0,L)}}else if(w){if(i)s.last.rows-c.rows<=e[0]+1?h(s.first.cols*this.itemSize[1],(s.first.rows+1)*this.itemSize[0]):s.last.cols-c.cols<=e[1]+1&&h((s.first.cols+1)*this.itemSize[1],s.first.rows*this.itemSize[0]);else if(s.last-c<=e+1){var x=(s.first+1)*this.itemSize;r?h(x,0):h(0,x)}}}}else this.scrollToIndex(e,a)},getRenderedRange:function(){var e=function(h,b){return Math.floor(h/(b||h))},n=this.first,o=0;if(this.element){var a=this.isBoth(),i=this.isHorizontal(),r=this.element,l=r.scrollTop,u=r.scrollLeft;if(a)n={rows:e(l,this.itemSize[0]),cols:e(u,this.itemSize[1])},o={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{var c=i?u:l;n=e(c,this.itemSize),o=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:o}}},calculateNumItems:function(){var e=this.isBoth(),n=this.isHorizontal(),o=this.itemSize,a=this.getContentPosition(),i=this.element?this.element.offsetWidth-a.left:0,r=this.element?this.element.offsetHeight-a.top:0,l=function(b,w){return Math.ceil(b/(w||b))},u=function(b){return Math.ceil(b/2)},c=e?{rows:l(r,o[0]),cols:l(i,o[1])}:l(n?i:r,o),s=this.d_numToleratedItems||(e?[u(c.rows),u(c.cols)]:u(c));return{numItemsInViewport:c,numToleratedItems:s}},calculateOptions:function(){var e=this,n=this.isBoth(),o=this.first,a=this.calculateNumItems(),i=a.numItemsInViewport,r=a.numToleratedItems,l=function(s,h,b){var w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(s+h+(s<b?2:3)*b,w)},u=n?{rows:l(o.rows,i.rows,r[0]),cols:l(o.cols,i.cols,r[1],!0)}:l(o,i,r);this.last=u,this.numItemsInViewport=i,this.d_numToleratedItems=r,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=n?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){var c;e.lazyLoadState={first:e.step?n?{rows:0,cols:o.cols}:0:o,last:Math.min(e.step?e.step:u,((c=e.items)===null||c===void 0?void 0:c.length)||0)},e.$emit("lazy-load",e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var n=e.isBoth(),o=e.isHorizontal(),a=e.isVertical();e.content.style.minHeight=e.content.style.minWidth="auto",e.content.style.position="relative",e.element.style.contain="none";var i=[q(e.element),ae(e.element)],r=i[0],l=i[1];(n||o)&&(e.element.style.width=r<e.defaultWidth?r+"px":e.scrollWidth||e.defaultWidth+"px"),(n||a)&&(e.element.style.height=l<e.defaultHeight?l+"px":e.scrollHeight||e.defaultHeight+"px"),e.content.style.minHeight=e.content.style.minWidth="",e.content.style.position="",e.element.style.contain=""}})},getLast:function(){var e,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(a?((e=this.columns||this.items[0])===null||e===void 0?void 0:e.length)||0:((n=this.items)===null||n===void 0?void 0:n.length)||0,o):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),o=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),a=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),i=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:o,top:a,bottom:i,x:n+o,y:a+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var n=this.isBoth(),o=this.isHorizontal(),a=this.element.parentElement,i=this.scrollWidth||"".concat(this.element.offsetWidth||a.offsetWidth,"px"),r=this.scrollHeight||"".concat(this.element.offsetHeight||a.offsetHeight,"px"),l=function(c,s){return e.element.style[c]=s};n||o?(l("height",r),l("width",i)):l("height",r)}},setSpacerSize:function(){var e=this,n=this.items;if(n){var o=this.isBoth(),a=this.isHorizontal(),i=this.getContentPosition(),r=function(u,c,s){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=ce(ce({},e.spacerStyle),ot({},"".concat(u),(c||[]).length*s+h+"px"))};o?(r("height",n,this.itemSize[0],i.y),r("width",this.columns||n[1],this.itemSize[1],i.x)):a?r("width",this.columns||n,this.itemSize,i.x):r("height",n,this.itemSize,i.y)}},setContentPosition:function(e){var n=this;if(this.content&&!this.appendOnly){var o=this.isBoth(),a=this.isHorizontal(),i=e?e.first:this.first,r=function(s,h){return s*h},l=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.contentStyle=ce(ce({},n.contentStyle),{transform:"translate3d(".concat(s,"px, ").concat(h,"px, 0)")})};if(o)l(r(i.cols,this.itemSize[1]),r(i.rows,this.itemSize[0]));else{var u=r(i,this.itemSize);a?l(u,0):l(0,u)}}},onScrollPositionChange:function(e){var n=this,o=e.target,a=this.isBoth(),i=this.isHorizontal(),r=this.getContentPosition(),l=function(C,D){return C?C>D?C-D:C:0},u=function(C,D){return Math.floor(C/(D||C))},c=function(C,D,G,ve,U,J){return C<=U?U:J?G-ve-U:D+U-1},s=function(C,D,G,ve,U,J,be){return C<=J?0:Math.max(0,be?C<D?G:C-J:C>D?G:C-2*J)},h=function(C,D,G,ve,U,J){var be=D+ve+2*U;return C>=U&&(be+=U+1),n.getLast(be,J)},b=l(o.scrollTop,r.top),w=l(o.scrollLeft,r.left),L=a?{rows:0,cols:0}:0,x=this.last,k=!1,$=this.lastScrollPos;if(a){var y=this.lastScrollPos.top<=b,g=this.lastScrollPos.left<=w;if(!this.appendOnly||this.appendOnly&&(y||g)){var S={rows:u(b,this.itemSize[0]),cols:u(w,this.itemSize[1])},p={rows:c(S.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:c(S.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)};L={rows:s(S.rows,p.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:s(S.cols,p.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)},x={rows:h(S.rows,L.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(S.cols,L.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},k=L.rows!==this.first.rows||x.rows!==this.last.rows||L.cols!==this.first.cols||x.cols!==this.last.cols||this.isRangeChanged,$={top:b,left:w}}}else{var v=i?w:b,O=this.lastScrollPos<=v;if(!this.appendOnly||this.appendOnly&&O){var B=u(v,this.itemSize),V=c(B,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O);L=s(B,V,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O),x=h(B,L,this.last,this.numItemsInViewport,this.d_numToleratedItems),k=L!==this.first||x!==this.last||this.isRangeChanged,$=v}}return{first:L,last:x,isRangeChanged:k,scrollPos:$}},onScrollChange:function(e){var n=this.onScrollPositionChange(e),o=n.first,a=n.last,i=n.isRangeChanged,r=n.scrollPos;if(i){var l={first:o,last:a};if(this.setContentPosition(l),this.first=o,this.last=a,this.lastScrollPos=r,this.$emit("scroll-index-change",l),this.lazy&&this.isPageChanged(o)){var u,c,s={first:this.step?Math.min(this.getPageByFirst(o)*this.step,(((u=this.items)===null||u===void 0?void 0:u.length)||0)-this.step):o,last:Math.min(this.step?(this.getPageByFirst(o)+1)*this.step:a,((c=this.items)===null||c===void 0?void 0:c.length)||0)},h=this.lazyLoadState.first!==s.first||this.lazyLoadState.last!==s.last;h&&this.$emit("lazy-load",s),this.lazyLoadState=s}}},onScroll:function(e){var n=this;if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var o=this.onScrollPositionChange(e),a=o.isRangeChanged,i=a||(this.step?this.isPageChanged():!1);i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){n.onScrollChange(e),n.d_loading&&n.showLoader&&(!n.lazy||n.loading===void 0)&&(n.d_loading=!1,n.page=n.getPageByFirst())},this.delay)}}else this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(Ve(e.element)){var n=e.isBoth(),o=e.isVertical(),a=e.isHorizontal(),i=[q(e.element),ae(e.element)],r=i[0],l=i[1],u=r!==e.defaultWidth,c=l!==e.defaultHeight,s=n?u||c:a?u:o?c:!1;s&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=r,e.defaultHeight=l,e.defaultContentWidth=q(e.content),e.defaultContentHeight=ae(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(e){var n=(this.items||[]).length,o=this.isBoth()?this.first.rows+e:this.first+e;return{index:o,count:n,first:o===0,last:o===n-1,even:o%2===0,odd:o%2!==0}},getLoaderOptions:function(e,n){var o=this.loaderArr.length;return ce({index:e,count:o,first:e===0,last:e===o-1,even:e%2===0,odd:e%2!==0},n)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||ue(this.element,'[data-pc-section="content"]')},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(n){return e.columns?n:n.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),n=this.isHorizontal();if(e||n)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:We}},Qn=["tabindex"];function Jn(t,e,n,o,a,i){var r=te("SpinnerIcon");return t.disabled?(d(),m(R,{key:1},[T(t.$slots,"default"),T(t.$slots,"content",{items:t.items,rows:t.items,columns:i.loadedColumns})],64)):(d(),m("div",f({key:0,ref:i.elementRef,class:i.containerClass,tabindex:t.tabindex,style:t.style,onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},t.ptmi("root")),[T(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:a.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:t.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:a.spacerStyle,contentStyle:a.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},function(){return[z("div",f({ref:i.contentRef,class:i.contentClass,style:a.contentStyle},t.ptm("content")),[(d(!0),m(R,null,ne(i.loadedItems,function(l,u){return T(t.$slots,"item",{key:u,item:l,options:i.getOptions(u)})}),128))],16)]}),t.showSpacer?(d(),m("div",f({key:0,class:"p-virtualscroller-spacer",style:a.spacerStyle},t.ptm("spacer")),null,16)):P("",!0),!t.loaderDisabled&&t.showLoader&&a.d_loading?(d(),m("div",f({key:1,class:i.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(d(!0),m(R,{key:0},ne(a.loaderArr,function(l,u){return T(t.$slots,"loader",{key:u,options:i.getLoaderOptions(u,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})}),128)):P("",!0),T(t.$slots,"loadingicon",{},function(){return[M(r,f({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)]})],16)):P("",!0)],16,Qn))}at.render=Jn;var ei=function(e){var n=e.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: `.concat(n("autocomplete.padding.x"),`;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    right: calc(`).concat(n("autocomplete.dropdown.width")," + ").concat(n("autocomplete.padding.x"),`);
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(n("autocomplete.dropdown.width"),`;
    border-top-right-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    border-bottom-right-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-left: 0 none;
    color: `).concat(n("autocomplete.dropdown.color"),`;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.hover.color"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.active.color"),`;
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: `).concat(n("autocomplete.dropdown.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.dropdown.focus.ring.width")," ").concat(n("autocomplete.dropdown.focus.ring.style")," ").concat(n("autocomplete.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.dropdown.focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("autocomplete.overlay.border.radius"),`;
    box-shadow: `).concat(n("autocomplete.overlay.shadow"),`;
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("autocomplete.list.gap"),`;
    padding: `).concat(n("autocomplete.list.padding"),`;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("autocomplete.option.padding"),`;
    border: 0 none;
    color: `).concat(n("autocomplete.option.color"),`;
    background: transparent;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),`;
    border-radius: `).concat(n("autocomplete.option.border.radius"),`;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.option.focus.background"),`;
    color: `).concat(n("autocomplete.option.focus.color"),`;
}

.p-autocomplete-option-selected {
    background: `).concat(n("autocomplete.option.selected.background"),`;
    color: `).concat(n("autocomplete.option.selected.color"),`;
}

.p-autocomplete-option-selected.p-focus {
    background: `).concat(n("autocomplete.option.selected.focus.background"),`;
    color: `).concat(n("autocomplete.option.selected.focus.color"),`;
}

.p-autocomplete-option-group {
    margin: 0;
    padding: `).concat(n("autocomplete.option.group.padding"),`;
    color: `).concat(n("autocomplete.option.group.color"),`;
    background: `).concat(n("autocomplete.option.group.background"),`;
    font-weight: `).concat(n("autocomplete.option.group.font.weight"),`;
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(`).concat(n("autocomplete.padding.y")," / 2) ").concat(n("autocomplete.padding.x"),`;
    gap: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    color: `).concat(n("autocomplete.color"),`;
    background: `).concat(n("autocomplete.background"),`;
    border: 1px solid `).concat(n("autocomplete.border.color"),`;
    border-radius: `).concat(n("autocomplete.border.radius"),`;
    width: 100%;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.focus.border.color"),`;
    box-shadow: `).concat(n("autocomplete.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.focus.ring.width")," ").concat(n("autocomplete.focus.ring.style")," ").concat(n("autocomplete.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.focus.ring.offset"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.background"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.hover.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: `).concat(n("autocomplete.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: `).concat(n("autocomplete.disabled.background"),`;
    color: `).concat(n("autocomplete.disabled.color"),`;
}

.p-autocomplete-chip.p-chip {
    padding-top: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-bottom: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    border-radius: `).concat(n("autocomplete.chip.border.radius"),`;
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-left: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-right: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: `).concat(n("inputchips.chip.focus.background"),`;
    color: `).concat(n("inputchips.chip.focus.color"),`;
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-top: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-bottom: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.placeholder.color"),`;
}

.p-autocomplete-empty-message {
    padding: `).concat(n("autocomplete.empty.message.padding"),`;
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}
`)},ti={root:{position:"relative"}},ni={root:function(e){var n=e.instance,o=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":o.invalid,"p-focus":n.focused,"p-inputwrapper-filled":o.modelValue||re(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.hasFluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){var n=e.props,o=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.variant?n.variant==="filled":o.$primevue.config.inputStyle==="filled"||o.$primevue.config.inputVariant==="filled"}]},chipItem:function(e){var n=e.instance,o=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===o}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,o=e.option,a=e.i,i=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(a,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},ii=W.extend({name:"autocomplete",theme:ei,classes:ni,inlineStyles:ti}),oi={name:"BaseAutoComplete",extends:_,props:{modelValue:null,suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ii,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function Ce(t){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(t)}function Ee(t){return si(t)||li(t)||ri(t)||ai()}function ai(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ri(t,e){if(t){if(typeof t=="string")return ke(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(t,e):void 0}}function li(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function si(t){if(Array.isArray(t))return ke(t)}function ke(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var rt={name:"AutoComplete",extends:oi,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||Se()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1),this.autoUpdateModel()}},mounted:function(){this.id=this.id||Se(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Ie.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?se(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?se(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,a){return this.ptm(a,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?se(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return se(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return se(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&Z(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,o=function(){n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&Z(n.multiple?n.$refs.focusInput:n.$refs.focusInput.$el)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,o,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var a=this.multiple?this.$refs.focusInput.value:this.$refs.focusInput.$el.value,i=this.visibleOptions.find(function(r){return n.isOptionMatched(r,a||"")});i!==void 0&&(o=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}o||(this.multiple?this.$refs.focusInput.value="":this.$refs.focusInput.$el.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&Z(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var o=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;Z(o),n=o.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(Ee(this.modelValue||[]),[a]))):this.updateModel(e,a),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){Gn.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(xe(n.value)&&this.hasSelectedOption?(Z(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.modelValue.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(this.updateModel(e,[].concat(Ee(this.modelValue||[]),[e.target.value])),this.$refs.focusInput.value="")},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(re(this.modelValue)&&!this.$refs.focusInput.value){var n=this.modelValue[this.modelValue.length-1],o=this.modelValue.slice(0,-1);this.$emit("update:modelValue",o),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.modelValue.length-1&&(this.focusedMultipleOptionIndex=-1,Z(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){Ie.set("overlay",e,this.$primevue.config.zIndex.overlay),yt(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){Ie.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?wt(this.overlay,e):(this.overlay.style.minWidth=Re(e)+"px",St(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Dt(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Ot()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var o;return this.isValidOption(e)&&((o=this.getOptionLabel(e))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return re(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return ze(e,n,this.equalityKey)},isSelected:function(e){var n=this,o=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(a){return n.isEquals(a,o)}):this.isEquals(this.modelValue,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return Pe(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return n.isValidOption(a)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?Pe(this.visibleOptions.slice(0,e),function(a){return n.isValidOption(a)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var o=this,a=this.modelValue[n],i=this.modelValue.filter(function(r,l){return l!==n}).map(function(r){return o.getOptionValue(r)});this.updateModel(e,i),this.$emit("item-unselect",{originalEvent:e,value:a}),this.$emit("option-unselect",{originalEvent:e,value:a}),this.dirty=!0,Z(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,a=ue(e.list,'li[id="'.concat(o,'"]'));a?a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,a,i){o.push({optionGroup:a,group:!0,index:i});var r=n.getOptionGroupChildren(a);return r&&r.forEach(function(l){return o.push(l)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(re(this.modelValue))if(Ce(this.modelValue)==="object"){var e=this.getOptionLabel(this.modelValue);return e??this.modelValue}else return this.modelValue;else return""},hasSelectedOption:function(){return re(this.modelValue)},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return re(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.id+"_panel"},hasFluid:function(){return xe(this.fluid)?!!this.$pcFluid:this.fluid}},components:{InputText:it,VirtualScroller:at,Portal:It,ChevronDownIcon:tt,SpinnerIcon:We,Chip:nt},directives:{ripple:Le}};function he(t){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(t)}function Ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function Ne(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(n),!0).forEach(function(o){ci(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function ci(t,e,n){return(e=ui(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ui(t){var e=di(t,"string");return he(e)=="symbol"?e:e+""}function di(t,e){if(he(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(he(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pi=["aria-activedescendant"],fi=["id","aria-label","aria-setsize","aria-posinset"],hi=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],mi=["disabled","aria-expanded","aria-controls"],vi=["id"],bi=["id","aria-label"],gi=["id"],yi=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function wi(t,e,n,o,a,i){var r=te("InputText"),l=te("Chip"),u=te("SpinnerIcon"),c=te("VirtualScroller"),s=te("Portal"),h=$e("ripple");return d(),m("div",f({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.multiple?P("",!0):(d(),N(r,{key:0,ref:"focusInput",id:t.inputId,type:"text",class:ee([t.cx("pcInputText"),t.inputClass]),style:me(t.inputStyle),value:i.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:i.hasFluid,disabled:t.disabled,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":i.panelId,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onInput:i.onInput,onChange:i.onChange,unstyled:t.unstyled,pt:t.ptm("pcInputText")},null,8,["id","class","style","value","placeholder","tabindex","fluid","disabled","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),t.multiple?(d(),m("ul",f({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":a.focused?i.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:e[7]||(e[7]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)})},t.ptm("inputMultiple")),[(d(!0),m(R,null,ne(t.modelValue,function(b,w){return d(),m("li",f({key:"".concat(w,"_").concat(i.getOptionLabel(b)),id:a.id+"_multiple_option_"+w,class:t.cx("chipItem",{i:w}),role:"option","aria-label":i.getOptionLabel(b),"aria-selected":!0,"aria-setsize":t.modelValue.length,"aria-posinset":w+1,ref_for:!0},t.ptm("chipItem")),[T(t.$slots,"chip",f({class:t.cx("pcChip"),value:b,index:w,removeCallback:function(x){return i.removeOption(x,w)},ref_for:!0},t.ptm("pcChip")),function(){return[M(l,{class:ee(t.cx("pcChip")),label:i.getOptionLabel(b),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(x){return i.removeOption(x,w)},pt:t.ptm("pcChip")},{removeicon:K(function(){return[T(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:ee(t.cx("chipIcon")),index:w,removeCallback:function(x){return i.removeOption(x,w)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,fi)}),128)),z("li",f({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[z("input",f({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":a.id+"_list","aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[4]||(e[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},t.ptm("input")),null,16,hi)],16)],16,pi)):P("",!0),a.searching||t.loading?T(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:ee(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(d(),m("i",f({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true"},t.ptm("loader")),null,16)):(d(),N(u,f({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true"},t.ptm("loader")),null,16,["class"]))]}):P("",!0),T(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(w){return i.onDropdownClick(w)}},function(){return[t.dropdown?(d(),m("button",f({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":a.overlayVisible,"aria-controls":i.panelId,onClick:e[8]||(e[8]=function(){return i.onDropdownClick&&i.onDropdownClick.apply(i,arguments)})},t.ptm("dropdown")),[T(t.$slots,"dropdownicon",{class:ee(t.dropdownIcon)},function(){return[(d(),N(Q(t.dropdownIcon?"span":"ChevronDownIcon"),f({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,mi)):P("",!0)]}),z("span",f({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),Y(i.searchResultMessageText),17),M(s,{appendTo:t.appendTo},{default:K(function(){return[M(xt,f({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:K(function(){return[a.overlayVisible?(d(),m("div",f({key:0,ref:i.overlayRef,id:i.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:Ne(Ne({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[T(t.$slots,"header",{value:t.modelValue,suggestions:i.visibleOptions}),z("div",f({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[M(c,f({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Ct({content:K(function(b){var w=b.styleClass,L=b.contentRef,x=b.items,k=b.getItemOptions,$=b.contentStyle,y=b.itemSize;return[z("ul",f({ref:function(S){return i.listRef(S,L)},id:a.id+"_list",class:[t.cx("list"),w],style:$,role:"listbox","aria-label":i.listAriaLabel},t.ptm("list")),[(d(!0),m(R,null,ne(x,function(g,S){return d(),m(R,{key:i.getOptionRenderKey(g,i.getOptionIndex(S,k))},[i.isOptionGroup(g)?(d(),m("li",f({key:0,id:a.id+"_"+i.getOptionIndex(S,k),style:{height:y?y+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[T(t.$slots,"optiongroup",{option:g.optionGroup,index:i.getOptionIndex(S,k)},function(){return[we(Y(i.getOptionGroupLabel(g.optionGroup)),1)]})],16,gi)):de((d(),m("li",f({key:1,id:a.id+"_"+i.getOptionIndex(S,k),style:{height:y?y+"px":void 0},class:t.cx("option",{option:g,i:S,getItemOptions:k}),role:"option","aria-label":i.getOptionLabel(g),"aria-selected":i.isSelected(g),"aria-disabled":i.isOptionDisabled(g),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(S,k)),onClick:function(v){return i.onOptionSelect(v,g)},onMousemove:function(v){return i.onOptionMouseMove(v,i.getOptionIndex(S,k))},"data-p-selected":i.isSelected(g),"data-p-focus":a.focusedOptionIndex===i.getOptionIndex(S,k),"data-p-disabled":i.isOptionDisabled(g),ref_for:!0},i.getPTOptions(g,k,S,"option")),[T(t.$slots,"option",{option:g,index:i.getOptionIndex(S,k)},function(){return[we(Y(i.getOptionLabel(g)),1)]})],16,yi)),[[h]])],64)}),128)),!x||x&&x.length===0?(d(),m("li",f({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[T(t.$slots,"empty",{},function(){return[we(Y(i.searchResultMessageText),1)]})],16)):P("",!0)],16,bi)]}),_:2},[t.$slots.loader?{name:"loader",fn:K(function(b){var w=b.options;return[T(t.$slots,"loader",{options:w})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),T(t.$slots,"footer",{value:t.modelValue,suggestions:i.visibleOptions}),z("span",f({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),Y(i.selectedMessageText),17)],16,vi)):P("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}rt.render=wi;var Si=function(e){var n=e.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(n("floatlabel.font.weight"),`;
    left: `).concat(n("floatlabel.position.x"),`;
    color: `).concat(n("floatlabel.color"),`;
    transition-duration: `).concat(n("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(n("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
     left: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(n("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(n("floatlabel.active.font.size"),`;
    font-weight: `).concat(n("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(n("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label ,
.p-floatlabel:has(.p-inputwrapper-focus) label  {
    color: `).concat(n("floatlabel.focus.color"),`;
}

/*.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: `).concat(n("floatlabel.in.input.padding.top"),`;
    padding-bottom: `).concat(n("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(n("floatlabel.on.border.radius"),`;
    background: `).concat(n("floatlabel.on.active.background"),`;
    padding: `).concat(n("floatlabel.on.active.padding"),`;
}
`)},Oi={root:function(e){e.instance;var n=e.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},Ii=W.extend({name:"floatlabel",theme:Si,classes:Oi}),xi={name:"BaseFloatLabel",extends:_,props:{variant:{type:String,default:"over"}},style:Ii,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},lt={name:"FloatLabel",extends:xi,inheritAttrs:!1};function Ci(t,e,n,o,a,i){return d(),m("span",f({class:t.cx("root")},t.ptmi("root")),[T(t.$slots,"default")],16)}lt.render=Ci;const oe={indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"}},ki={class:"custom-select-button-group"},Ti={__name:"customSelectButton",props:{modelValue:[String,Number],options:{type:Array,required:!0},name:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const{isDarkTheme:n}=je(),{buttonFontSize:o,buttonWidth:a}=Oe(),i=t,r=e,l=X(i.modelValue);return E(()=>i.modelValue,u=>{u!==l.value&&(l.value=u)}),E(()=>l.value,u=>{r("update:modelValue",u)}),(u,c)=>(d(),m("div",ki,[(d(!0),m(R,null,ne(i.options,s=>(d(),m("div",{key:s.value,class:"custom-select-button"},[M(I($t),{inputId:s.value,name:i.name,onLabel:s.label,offLabel:s.label,onChange:h=>l.value=s.value,style:me({width:`calc(${I(a)} * .75)`,height:`calc(${I(a)} / 4.5)`,fontSize:`calc(${I(o)} * 1)`,backgroundColor:l.value===s.value?I(n)?I(oe).indigo[500]:I(oe).indigo[500]:I(n)?"#000000":"#ffffff",color:l.value===s.value?(I(n),"#ffffff"):I(n)?"#ffffff":"#000000",borderColor:l.value===s.value?I(n)?I(oe).indigo[500]:I(oe).indigo[500]:I(n)?I(oe).indigo[500]:I(oe).indigo[500]})},null,8,["inputId","name","onLabel","offLabel","onChange","style"])]))),128))]))}},Li=le(Ti,[["__scopeId","data-v-06fcd3ec"]]);function $i(t){const e=j(()=>t.value.map(i=>i.compound)),n=j(()=>t.value.map(i=>i.x_keys)),o=j(()=>t.value.map(i=>i.x_data)),a=j(()=>t.value.map(i=>i.y_data));return{compounds:e,speciesArray:n,xDataArray:o,yDataArray:a}}function st(){const t=A([]),e=A(null),n=async()=>{try{const a=await fetch("/app/opentoxssdm/data/ssd/ssdpec50_fit.json");t.value=await a.json()}catch(a){console.error("Error loading compounds data:",a)}},o=a=>{const i=[],r=[],l=[];return a.forEach(u=>{const c=t.value.find(s=>s.compoundName===u);c?(i.push(c.compoundName),r.push(c.X),l.push(c.Y)):console.warn(`Compound ${u} not found in the data`)}),{compounds:i,xDataArray:r,yDataArray:l}};return ie(()=>{n()}),{getCompoundData:o,compoundsData:t,filenameFit:e}}function zi(){return{formatString:e=>{const n=e.replace(/X$/,""),o=n.match(/[A-Z][a-z]*/g);return o&&o.length>=2?`${o[0]} (${o[1]})`:n}}}function Ai(){return{formatStringImageName:e=>{const n=e.replace(/X$/,""),o=n.match(/[A-Z][a-z]*/g);return o&&o.length>=2?`${o[0].toLowerCase()}_${o[1].toLowerCase()}`:n}}}function Bi(){return{generateMarkerShapeArray:e=>{const n=["circle","square","star","sparkle","diamond","triangle"],o=[];for(let a=0;a<e;a++)o.push(n[a%n.length]);for(let a=0;a<e;a++)o.push("square");return o}}}var Vi=H(["AutoComplete","Calendar","CascadeSelect","Checkbox","Chips","ColorPicker","DatePicker","Dropdown","Editor","FloatLabel","Fluid","IconField","IftaLabel","InputChips","InputGroup","InputGroupAddon","InputIcon","InputMask","InputNumber","InputOtp","InputSwitch","InputText","Knob","Listbox","MultiSelect","Password","RadioButton","Rating","Select","SelectButton","Slider","Textarea","ToggleButton","ToggleSwitch","TreeSelect"]),Pi=H(["Button","ButtonGroup","SpeedDial","SplitButton"]),Di=H(["Column","Row","ColumnGroup","DataTable","DataView","OrderList","OrganizationChart","Paginator","PickList","Tree","TreeTable","Timeline","VirtualScroller"]),Mi=H(["Accordion","AccordionPanel","AccordionHeader","AccordionContent","AccordionTab","Card","DeferredContent","Divider","Fieldset","Panel","ScrollPanel","Splitter","SplitterPanel","Stepper","StepList","Step","StepItem","StepPanels","StepPanel","TabView","Tabs","TabList","Tab","TabPanels","TabPanel","Toolbar"]),Fi=H([{name:"ConfirmDialog",use:{as:"ConfirmationService"}},{name:"ConfirmPopup",use:{as:"ConfirmationService"}},"Dialog","Drawer",{name:"DynamicDialog",use:{as:"DialogService"}},"OverlayPanel","Popover","Sidebar"]),Ei=H(["FileUpload"]),Ki=H(["Breadcrumb","ContextMenu","Dock","Menu","Menubar","MegaMenu","PanelMenu","Steps","TabMenu","TieredMenu"]),Ni=H(["Chart"]),Ri=H(["Message","InlineMessage",{name:"Toast",use:{as:"ToastService"}}]),Hi=H(["Carousel","Galleria","Image","ImageCompare"]),ji=H(["Avatar","AvatarGroup","Badge","BlockUI","Chip","Inplace","MeterGroup","OverlayBadge","ScrollTop","Skeleton","ProgressBar","ProgressSpinner","Tag","Terminal"]),Wi=[...Vi,...Pi,...Di,...Mi,...Fi,...Ei,...Ki,...Ni,...Ri,...Hi,...ji];H([{name:"usePrimeVue",as:"usePrimeVue",from:"primevue/config"},{name:"useStyle",as:"useStyle",from:"primevue/usestyle"},{name:"useConfirm",as:"useConfirm",from:"primevue/useconfirm"},{name:"useToast",as:"useToast",from:"primevue/usetoast"},{name:"useDialog",as:"useDialog",from:"primevue/usedialog"}]);H([{name:"badge",as:"BadgeDirective",from:"primevue/badgedirective"},{name:"tooltip",as:"Tooltip",from:"primevue/tooltip"},{name:"ripple",as:"Ripple",from:"primevue/ripple"},{name:"styleclass",as:"StyleClass",from:"primevue/styleclass"},{name:"focustrap",as:"FocusTrap",from:"primevue/focustrap"},{name:"animateonscroll",as:"AnimateOnScroll",from:"primevue/animateonscroll"},{name:"keyfilter",as:"KeyFilter",from:"primevue/keyfilter"}]);function H(t){return t==null?void 0:t.map(e=>{var n;const o=typeof e=="string"?{name:e}:e;return o.as??(o.as=o==null?void 0:o.name),o.from??(o.from=`primevue/${(n=o==null?void 0:o.name)==null?void 0:n.toLowerCase()}`),o})}const _i={name:"Chart",methods:{components(){return Wi}},components:{apexcharts:kt},props:{xData:{type:Array,required:!0},yData:{type:Array,required:!0},compoundNames:{type:Array,required:!0},speciesNames:{type:Array,required:!0}},setup(t){const e=A(!1),n=A(),o=A(0),a=A([5,0]),i=A(["circle"]),r=A(!0),{formatString:l}=zi(),{formatStringImageName:u}=Ai(),{getCompoundData:c,compoundsData:s}=st(),{generateMarkerShapeArray:h}=Bi(),b=["Amphibian","Birds","Crustaceans","Fish","Insect","Invertebrates","Mammals","Moluscs","Reptiles","Worms","Algae","Fungi","Moss","Flower"],w=j(()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64">

	<path fill="${A("#cdcdcd").value}" d="M29.1 12.9H19L12.9 19v10.1L43.8 64L64 43.8zm-6.4 9.8c-.9.9-2.4.9-3.4 0c-.9-.9-.9-2.4 0-3.4c.9-.9 2.4-.9 3.4 0c.9 1 .9 2.5 0 3.4" />
	<path fill="#94989b" d="M21.9 20.8c-.3-1.3-.9-2.6-1.6-3.7c-1.7-2.8-4.1-5.1-6.9-6.8C9.6 8.1 5.3 7.1.9 6.7c-.5 0-.9.5-.9.9c0 .5.4.9.9.9c4.7.4 9.5 1.7 13.4 4.5c1.1.8 2.4 2.1 3.3 3.3c.2.2-.1-.2 0 .1c0 .1.1.1.1.2c.1.1.2.3.3.4c.2.3.4.5.5.8c.3.5.5.9.8 1.4c.1.1.1.3.2.4c0 .1.1.1.1.2c.1.2.2.5.2.7c.1.2.1.4.2.6c.3 1.4 2.2.9 1.9-.3" />
	<path fill="#3e4347" d="m15.3 16.6l-.1-.1c-.5-.4-.9-.8-1.3-1.3c-.9-1-1.7-2.3-2.3-3.6C9.9 8.3 9 4.6 8.7 1c-.1-.6-.5-1-1.1-1c-.5 0-1 .4-.9.9c.3 4 1.4 8 3.2 11.6c.7 1.4 1.6 2.8 2.6 4c.4.5.9 1 1.4 1.4z" />
</svg>
  `),L=A(t.xData.flat(2)),x=p=>{const v=p.flat(2).map(Number);return Math.max(...v)*1.2},k=p=>{const v=p.flat(2).map(Number);return Math.min(...v)*.8},$=A({chart:{toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[{icon:w.value,index:4,title:"turn labels on/off",class:"custom-icon",click:function(p,v,O){e.value=!e.value}}]}},zoom:{enabled:!0,type:"xy",autoScaleYaxis:!0,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#2dbaa8",opacity:.4,width:1}}},id:"chart",redrawOnParentResize:!0},theme:{palette:"palette8"},dataLabels:{enabled:!1,textAnchor:"middle",distributed:!1,offsetX:0,offsetY:-10,style:{fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"400",colors:["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD","#7B1FA2","#43A047","#FFC107","#FF5722","#795548","#9E9E9E","#607D8B"]},formatter:function(p,{seriesIndex:v,dataPointIndex:O,w:B}){if(t.speciesNames&&t.speciesNames[v]&&t.speciesNames[v][O])return l(t.speciesNames[v][O])+" : ("+B.globals.seriesX[v][O]+","+p+")"},background:{enabled:!1}},title:{text:"Response - Cumulative Probability",align:"center",style:{fontSize:"16px",fontWeight:"bold",color:"#263238"}},markers:{size:a,strokeWidth:0,fillOpacity:1,shape:i,offsetX:0,offsetY:0},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{show:!0,position:"top",formatter:function(p,v){return v.w.config.series[v.seriesIndex].type==="scatter"?p:p+" - Trendline"},marker:{customHTML:function(p,v){return v.w.config.series[v.seriesIndex].type==="line"?'<span class="custom-marker-line"></span>':'<span class="custom-marker"><i class="fas fa-chart-pie"></i></span>'}}},xaxis:{type:"numeric",min:k(t.xData),max:x(t.xData),tickAmount:5,tickPlacement:"on",decimalsInFloat:3,labels:{style:{fontSize:"14px",fontWeight:"400",colors:"grey"}},title:{text:"Response",offsetY:0,style:{fontSize:"16px",fontWeight:600}},crosshairs:{show:!0,position:"back",stroke:{color:"#b6b6b6",width:1,dashArray:5}},tooltip:{enabled:!0,offsetX:0}},yaxis:{type:"numeric",decimalsInFloat:2,tickAmount:5,labels:{style:{fontSize:"14px",fontWeight:"400",colors:"grey"}},title:{text:"Cumulative Probability",offsetY:40,style:{fontSize:"16px",fontWeight:600}},crosshairs:{show:!0,position:"back",stroke:{color:"#b6b6b6",width:1,dashArray:5}},tooltip:{enabled:!0,offsetX:-25}},stroke:{show:!0,curve:"smooth",width:1.5},tooltip:{enabled:!0,shared:!0,followCursor:!1,intersect:!1,marker:{show:!0},style:{fontSize:"10px"},y:{formatter:p=>`f(X): ${p}`},x:{formatter:p=>`Response: ${p}`},custom:function({seriesIndex:p,dataPointIndex:v,w:O}){const B=`/app/opentoxssdm/images/ssd/${u(t.speciesNames[p][v])}.jpg`;let V="",F=!1;V+='<div style="display: flex; align-items: flex-start; margin-bottom: 8px;"><span style="min-width: 150px; font-weight: bold;">Species :</span><div style="display: flex; flex-direction: column; padding-left: 2px;">';for(let C=v;C<O.globals.series[p].length;C++){let D=O.globals.series[p][C];if(D<=.02)F=!0,V+='<span style="color: #0a5f98; font-weight: bold; padding-left: 2px;">'+b[C]+"</span>";else if(D>.01&&!F){V+='<span style="color: #0a5f98; font-weight: bold; padding-left: 2px;">'+l(t.speciesNames[p][v])+"</span>";break}}return V+="</div></div>",V+='<div style="display: flex; align-items: flex-start; margin-bottom: 8px;"><span style="min-width: 150px;">CID Number :</span><span style="color: #0a5f98; font-weight: bold; padding-left: 2px;">'+O.config.series[p].name+"</span></div>",V+='<div style="display: flex; align-items: flex-start; margin-bottom: 8px;"><span style="min-width: 150px;">Toxicity :</span><span style="color: #0a5f98; font-weight: bold; padding-left: 2px;">'+O.globals.seriesX[p][v]+"&nbsp;mol/L</span></div>",V+='<div style="display: flex; align-items: flex-start; margin-bottom: 8px;"><span style="min-width: 150px;">Probability Distribution :</span><span style="color: #0a5f98; font-weight: bold; padding-left: 2px;">'+O.globals.series[p][v]+"</span></div>",V+='<br/><img src="'+B+'" alt="Image" style="width: 100%; height: auto; object-fit: cover; max-height: 200px;" /></div>',V}}}),y=(p,v,O,B)=>{const V=[];return v.forEach((F,C)=>{F.length>0&&O[C].length>0&&V.push({name:p[C],type:"scatter",data:F.map((D,G)=>[Number(D),Number(O[C][G])])})}),B&&B.xDataArray.length>0&&B.xDataArray.forEach((F,C)=>{F.length>0&&B.yDataArray[C].length>0&&V.push({name:B.compounds[C],type:"line",showInLegend:!1,data:F.map((D,G)=>[Number(D),Number(B.yDataArray[C][G])])})}),V},g=A(y(t.compoundNames,t.xData,t.yData,n.value));n.value=c(t.compoundNames),E(()=>t.compoundNames,p=>{g.value=y(p,t.xData,t.yData,n.value),o.value++;const v=p.length;a.value=Array(v).fill(5).concat(Array(v).fill(0)),i.value=h(v)},{deep:!0}),E(()=>e.value,p=>{De.exec("chart","updateOptions",{dataLabels:{enabled:p}})}),E(()=>t.xData,p=>{g.value=y(t.compoundNames,p,t.yData,n.value),S()},{deep:!0}),E(()=>s.value,p=>{p.length>0&&(n.value=c(t.compoundNames),g.value=y(t.compoundNames,t.xData,t.yData,n.value),r.value=!1)},{immediate:!0}),E(()=>t.yData,p=>{g.value=y(t.compoundNames,t.xData,p,n.value),S()},{deep:!0}),E([()=>s.value,()=>t.compoundNames],([p,v])=>{p.length>0&&(n.value=c(v),g.value=y(v,t.xData,t.yData,n.value))},{immediate:!0,deep:!0});const S=()=>{const p=k(t.xData),v=x(t.xData),O=k(t.yData),B=x(t.yData);De.exec("chart","updateOptions",{xaxis:{min:p,max:v},yaxis:{min:O,max:B}})};return ie(()=>{S()}),{chartOptions:$,series:g,flattened_value:L,dataLabelSwitch:e,compoundData:n,componentKey:o,loading:r}}},Gi={key:0,class:"spinner-container"};function Ui(t,e,n,o,a,i){const r=te("apexcharts");return d(),m(R,null,[o.loading?(d(),m("div",Gi,e[0]||(e[0]=[z("span",{class:"spinner"},null,-1)]))):P("",!0),o.loading?P("",!0):(d(),m("div",{class:"example",key:o.componentKey},[M(r,{width:"600",height:"600",type:"line",options:o.chartOptions,series:o.series},null,8,["options","series"])]))],64)}const qi=le(_i,[["render",Ui],["__scopeId","data-v-fac4e213"]]),Yi={class:"custom-width"},Xi=Tt({__name:"ssdOptions",props:{filename:{}},setup(t){const{buttonFontSize:e,buttonWidth:n}=Oe(),{filenameFit:o}=st(),a=t;o.value=a.filename;const i=A([]),r=A([]),l=A(!1),u=A([]);async function c(){try{const $=await fetch(`/app/opentoxssdm/data/ssd/${a.filename}.json`);if(!$.ok)throw l.value=!0,new Error(`HTTP error! Status: ${$.status}`);const y=await $.json();i.value=y,r.value=y.map(g=>g.compoundName),l.value=!1}catch($){console.error($),l.value=!0,i.value=[],r.value=[]}}const s=j(()=>{const $=[];return u.value.forEach(y=>{const g=i.value.find(O=>O.compoundName===y);if(!g)return;const S=[],p=[],v=[];for(const O in g)O.endsWith("X")?(v.push(O),S.push(g[O])):O.endsWith("Y")&&p.push(g[O]);$.push({compound:y,x_keys:v,x_data:S,y_data:p})}),$}),h=A([]);function b($){const y=$.query.toLowerCase();h.value=i.value.filter(g=>g.compoundName.toLowerCase().startsWith(y)).map(g=>g.compoundName)}const{compounds:w,speciesArray:L,xDataArray:x,yDataArray:k}=$i(s);return ie(()=>{c()}),E(()=>a.filename,$=>{$&&(o.value=$,u.value=[],c())}),($,y)=>(d(),m(R,null,[z("div",Yi,[M(I(lt),null,{default:K(()=>[M(I(rt),{id:"compounds",modelValue:u.value,"onUpdate:modelValue":y[0]||(y[0]=g=>u.value=g),suggestions:h.value,multiple:"",placeholder:"Please Select CID",onComplete:b,dropdown:"",style:me({width:`calc(${I(n)} * 1.6)`,maxHeight:"70px"})},null,8,["modelValue","suggestions","style"]),y[1]||(y[1]=z("label",{for:"compounds"},Y("Compound"),-1))]),_:1})]),z("div",null,[y[2]||(y[2]=z("br",null,null,-1)),y[3]||(y[3]=z("br",null,null,-1)),I(w).length&&I(L).length&&I(x).length&&I(k).length?(d(),N(qi,{key:0,compoundNames:I(w),speciesNames:I(L),xData:I(x),yData:I(k)},null,8,["compoundNames","speciesNames","xData","yData"])):P("",!0)])],64))}}),Zi=le(Xi,[["__scopeId","data-v-4296f2bb"]]),Qi={class:"card"},Ji={class:"flex flex-col md:flex-row"},eo={class:"w-full md:w-1/4 flex flex-col items-center justify-center py-5 gap-4"},to={class:"divider md:w-1/6"},no={class:"w-full md:w-5/6 flex-col items-center justify-center gap-4 py-5"},io={class:"flex flex-col gap-2 w-full"},oo={__name:"Cyanides",setup(t){const{selectedSpecies:e,activeTab:n}=Je(),o=X([]);e.value="Fish_Acute";async function a(l){try{const u=await fetch(`/app/opentoxssdm/parameters/cyanides/${l}.json`);if(!u.ok)throw new Error("Failed to load data for "+l);const c=await u.json();o.value=c,console.log("Loaded data:",c)}catch(u){console.error(u)}}ie(()=>{a(e.value)}),E(e,l=>{a(l)});const i=[{label:"SSD-pEC50",value:"ssdpec50"},{label:"SSD-pLC50",value:"ssdplc50"},{label:"SSD-pNOEC",value:"ssdpnoec"},{label:"SSD-pLOEC",value:"ssdploec"}],r=X("ssdpec50");return(l,u)=>{const c=et;return d(),m("div",Qi,[z("div",Ji,[z("div",eo,[M(Li,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=s=>r.value=s),options:i,name:"cyanideOptions"},null,8,["modelValue"])]),z("div",to,[M(c,{layout:"vertical",class:"vertical-divider"}),M(c,{layout:"horizontal",class:"horizontal-divider"})]),z("div",no,[z("div",io,[M(Zi,{filename:r.value},null,8,["filename"])])])])])}}},ao=le(oo,[["__scopeId","data-v-060f7946"]]),ro={class:"card"},lo={key:1},so={__name:"Thecomponenttabs",setup(t){const{buttonFontSize:e}=Oe(),{activeTab:n}=Je(),o=A([{title:"SSD",content:ao,value:"0"}]);return n.value="0",j(()=>{const a=o.value.find(i=>i.value===n.value);return a?a.title:""}),(a,i)=>(d(),m("div",ro,[M(I(_e),{value:I(n),"onUpdate:value":i[0]||(i[0]=r=>Lt(n)?n.value=r:null),style:me({fontSize:`calc(${I(e)} + 4px)`})},{default:K(()=>[M(I(qe),null,{default:K(()=>[(d(!0),m(R,null,ne(o.value,r=>(d(),N(I(Ye),{key:r.title,value:r.value,disabled:typeof r.content!="object"},{default:K(()=>[we(Y(r.title),1)]),_:2},1032,["value","disabled"]))),128))]),_:1}),M(I(Xe),null,{default:K(()=>[(d(!0),m(R,null,ne(o.value,r=>(d(),N(I(Ze),{key:r.content,value:r.value},{default:K(()=>[typeof r.content=="object"?(d(),N(Q(r.content),{key:0})):(d(),m("p",lo,Y(r.content),1))]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value","style"])]))}},co=le(so,[["__scopeId","data-v-6c5937c7"]]),uo={class:"grid grid-cols-12 gap-8"},po={class:"col-span-12 xl:col-span-12"},fo={class:"card"},ho={__name:"Dashboard",setup(t){const{buttonFontSize:e}=Oe(),{getPrimary:n,getSurface:o,isDarkTheme:a}=je();X(null);const i=X(null),r=X(null);X([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-trash"}]),ie(()=>{i.value=l(),r.value=u()});function l(){const c=getComputedStyle(document.documentElement);return{labels:["Q1","Q2","Q3","Q4"],datasets:[{type:"bar",label:"Subscriptions",backgroundColor:c.getPropertyValue("--p-primary-400"),data:[4e3,1e4,15e3,4e3],barThickness:32},{type:"bar",label:"Advertising",backgroundColor:c.getPropertyValue("--p-primary-300"),data:[2100,8400,2400,7500],barThickness:32},{type:"bar",label:"Affiliate",backgroundColor:c.getPropertyValue("--p-primary-200"),data:[4100,5200,3400,7400],borderRadius:{topLeft:8,topRight:8},borderSkipped:!0,barThickness:32}]}}function u(){const c=getComputedStyle(document.documentElement),s=c.getPropertyValue("--surface-border"),h=c.getPropertyValue("--text-color-secondary");return{maintainAspectRatio:!1,aspectRatio:.8,scales:{x:{stacked:!0,ticks:{color:h},grid:{color:"transparent",borderColor:"transparent"}},y:{stacked:!0,ticks:{color:h},grid:{color:s,borderColor:"transparent",drawTicks:!1}}}}}return E([n,o,a],()=>{i.value=l(),r.value=u()}),(c,s)=>(d(),m("div",uo,[z("div",po,[z("div",fo,[z("div",{class:"font-semibold lg:text-xl mb-4",style:me({fontSize:`calc(${I(e)} * 1.25)`})},null,4),M(co)])])]))}},bo=le(ho,[["__scopeId","data-v-02001f9c"]]);export{bo as default};

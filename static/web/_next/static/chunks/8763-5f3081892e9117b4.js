(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8763],{28763:function(e,t,n){"use strict";n.r(t),n.d(t,{ChatContainer:function(){return me}});var s=n(85893),a=n(9764),r=n(67294),o=n(36531),i=n(11622),l=n(13545),c=n.n(l),u=n(14924),d=n(86492),h=n.n(d),m=n(94184),g=n.n(m),p=n(94199),f=n(29158),x=n(4480),_=n(5152),C=n.n(_),v=n(78583),j=n.n(v);function y(e){var t=new Date(e);if(Number.isNaN(t))return"";if(function(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}(e)>=1){var n=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"at ".concat(n," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var N,M,b,w,S,E=n(79010),T=n.n(E),k=function(e){var t=e.badge,n=e.userColor,a="var(--theme-user-colors-".concat(n,")"),r={color:a,borderColor:a};return(0,s.jsx)("span",{style:r,className:T().badge,children:t})},B=n(1899),U=C()((function(){return Promise.all([n.e(8939),n.e(3903),n.e(3698),n.e(3626),n.e(8091),n.e(1300),n.e(7781)]).then(n.bind(n,87781)).then((function(e){return e.ChatModerationActionMenu}))}),{loadableGenerated:{webpack:function(){return[87781]}}}),A=C()((function(){return Promise.resolve().then(n.bind(n,47049)).then((function(e){return e.Highlight}))}),{loadableGenerated:{webpack:function(){return[47049]}}}),D=function(e){var t=e.message,n=e.highlightString,a=e.showModeratorMenu,o=e.sentBySelf,i=e.sameUserAsLast,l=e.isAuthorModerator,c=e.isAuthorAuthenticated,d=t.id,m=t.body,_=t.user,C=t.timestamp,v=_.id,N=_.displayName,M=_.displayColor,b=(0,x.sJ)(B.FI),w="var(--theme-color-users-".concat(M,")"),S="Sent ".concat(y(C)),E=(0,r.useState)(m),T=E[0],D=E[1],O=[];return l&&O.push((0,s.jsx)(k,{badge:"mod",userColor:M},"mod")),c&&O.push((0,s.jsx)(k,{badge:(0,s.jsx)(f.Z,{title:"authenticated"}),userColor:M},"auth")),(0,r.useEffect)((function(){D(h().decode(m))}),[t]),(0,s.jsx)("div",{className:g()(j().messagePadding,i&&j().messagePaddingCollapsed),children:(0,s.jsxs)("div",{className:g()(j().root,(0,u.Z)({},j().ownMessage,o)),style:{borderColor:w},children:[!i&&(0,s.jsx)(p.Z,{title:"user info goes here",placement:"topLeft",mouseEnterDelay:1,children:(0,s.jsxs)("div",{className:j().user,style:{color:w},children:[(0,s.jsx)("span",{className:j().userName,children:N}),(0,s.jsx)("span",{children:O})]})}),(0,s.jsx)(p.Z,{title:S,mouseEnterDelay:1,children:(0,s.jsx)(A,{search:n,children:(0,s.jsx)("div",{className:j().message,dangerouslySetInnerHTML:{__html:T}})})}),a&&(0,s.jsx)("div",{className:j().modMenuWrapper,children:(0,s.jsx)(U,{messageID:d,accessToken:b,userID:v,userDisplayName:N})}),(0,s.jsx)("div",{className:j().background,style:{color:w}})]})})},O=n(26042),I=n(69396),R=n(828),Z=n(93045),L=n(27496),F=n(55241),H=n(77493),P=n(96391),W=n(25882),V=n.n(W),G=C()((function(){return Promise.all([n.e(7741),n.e(786)]).then(n.bind(n,30786)).then((function(e){return e.EmojiPicker}))}),{loadableGenerated:{webpack:function(){return[30786]}}}),Y=function(e){var t=e.attributes,n=e.element,a=e.children,r=(0,P.vt)(),o=(0,P.UE)();return(0,s.jsxs)("span",(0,I.Z)((0,O.Z)({},t),{contentEditable:!1,children:[(0,s.jsx)("img",{alt:n.alt,src:n.src,title:n.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(r&&o?"0 0 0 3px #B4D5FF":"none")}}),a]}))},J=function(e){var t,n;if(H.xv.isText(e))return e.text;0===e.children.length?t=[{text:""}]:t=null===(n=e.children)||void 0===n?void 0:n.map((function(e){return J(e)})).join("");switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},z=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=(0,x.sJ)(B.Gt),o=(0,r.useMemo)((function(){return(0,P.BU)(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e.isInline=function(e){return"image"===e.type},e}((0,H.Jh)()))}),[]),l=function(){if(a){var e=J(o);a.send({type:i.C.CHAT,body:e}),H.YR.delete(o,{at:{anchor:H.ML.start(o,[]),focus:H.ML.end(o,[])}})}else console.log("websocketService is not defined")},c=function(e,t){if(e){var n=o.selection,s=function(e,t,n){return{type:"image",alt:e,src:t,name:n,children:[{text:""}]}}(t,e,t);if(H.YR.insertNodes(o,s,{select:!0}),n){var a,r=(0,R.Z)(H.ML.parent(o,null===(a=n.focus)||void 0===a?void 0:a.path),2),i=r[0],l=r[1];o.isVoid(i)||H.NB.string(i).length?H.YR.insertNodes(o,s,{at:H.y$.next(l),select:!0}):(H.YR.insertNodes(o,s,{at:l,select:!0}),H.ML.normalize(o,{force:!0}))}else H.YR.insertNodes(o,s,{select:!0})}};return(0,s.jsx)("div",{className:V().root,children:(0,s.jsxs)("div",{className:V().inputWrap,children:[(0,s.jsxs)(P.mH,{editor:o,value:[{type:"paragraph",children:[{text:""}]}],children:[(0,s.jsx)(P.CX,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),l())},renderElement:function(e){return"image"===e.element.type?(0,s.jsx)(Y,(0,O.Z)({},e)):(0,s.jsx)("p",(0,O.Z)({},e))},placeholder:"Chat message goes here...",style:{width:"100%"},autoFocus:!0}),(0,s.jsx)(F.Z,{content:(0,s.jsx)(G,{onEmojiSelect:function(e){if(P.F3.focus(o),e.url){var t=e.url;c(t,t)}else{var n=e.emoji;H.YR.insertText(o,n)}},onCustomEmojiSelect:function(e){P.F3.focus(o);var t=e.url;c(t,t)}}),trigger:"click",onVisibleChange:function(e){return n(e)},visible:t})]}),(0,s.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,s.jsx)("button",{type:"button",className:V().emojiButton,title:"Emoji picker button",onClick:function(){return n(!t)},children:(0,s.jsx)(Z.Z,{})}),(0,s.jsx)("button",{type:"button",className:V().emojiButton,title:"Send message Button",onClick:l,children:(0,s.jsx)(L.Z,{})})]})]})})},X=n(93174),q=n.n(X);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},K.apply(this,arguments)}var $=function(e){return r.createElement("svg",K({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg",role:"img"},e),N||(N=r.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},r.createElement("stop",{offset:0,stopColor:"#2087e2"}),r.createElement("stop",{offset:1,stopColor:"#b63fff"}))),M||(M=r.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),b||(b=r.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),w||(w=r.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),S||(S=r.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))},Q=function(){return(0,s.jsxs)("div",{className:q().chatModerationNotification,children:[(0,s.jsx)($,{className:q().icon}),"You are now a moderator."]})},ee=n(47049),te=n(31681),ne=n.n(te),se=function(e){var t=e.message,n=t.body,a=t.user.displayName,r=e.highlightString;return(0,s.jsxs)("div",{className:ne().chatSystemMessage,children:[(0,s.jsx)("div",{className:ne().user,children:(0,s.jsx)("span",{className:ne().userName,children:a})}),(0,s.jsx)(ee.Highlight,{search:r,children:(0,s.jsx)("div",{className:ne().message,dangerouslySetInnerHTML:{__html:n}})})]})},ae=n(55355),re=n(83066),oe=n.n(re),ie=function(e){var t=e.isAuthorModerator,n=e.userColor,a=e.displayName,r="var(--theme-color-users-".concat(n,")");return(0,s.jsxs)("div",{className:oe().root,children:[(0,s.jsxs)("span",{style:{color:r},children:[(0,s.jsx)("span",{style:{padding:"0 10px"},children:(0,s.jsx)(ae.Z,{})}),(0,s.jsx)("span",{style:{fontWeight:"bold"},children:a}),t&&(0,s.jsx)("span",{children:(0,s.jsx)(k,{badge:"mod",userColor:n})})]})," ","joined the chat."]})},le=n(66017),ce=n(71577),ue=function(e){var t=e.chatContainerRef,n=e.messages;return(0,s.jsx)("div",{className:c().toBottomWrap,children:(0,s.jsx)(ce.Z,{type:"default",style:{color:"currentColor"},icon:(0,s.jsx)(le.Z,{}),onClick:function(){return t.current.scrollToIndex({index:n.length-1,behavior:"smooth"})},children:"Go to last message"})})};function de(e,t){if(e.length<2)return!1;var n=e[t],s=n.user.id,a=e[t-1];if((null===a||void 0===a?void 0:a.type)!==i.C.CHAT)return!1;if(!a.timestamp||!n.timestamp)return!1;var r=new Date(a.timestamp).getTime();return!(new Date(n.timestamp).getTime()-r>12e4)&&s===(null===a||void 0===a?void 0:a.user.id)}function he(e){var t=e.user.scopes;return!(!t||0===t.length)&&t.includes("MODERATOR")}var me=function(e){var t=e.messages,n=e.usernameToHighlight,l=e.chatUserId,u=e.isModerator,d=e.showInput,h=e.height,m=(0,r.useState)(!1),g=m[0],p=m[1],f=(0,r.useRef)(null),x=function(e,a){switch(a.type){case i.C.CHAT:var r,d,h;return(0,s.jsx)(D,{message:a,showModeratorMenu:u,highlightString:n,sentBySelf:(null===(r=a.user)||void 0===r?void 0:r.id)===l,sameUserAsLast:de(t,e),isAuthorModerator:null===(d=a.user.scopes)||void 0===d?void 0:d.includes("MODERATOR"),isAuthorAuthenticated:null===(h=a.user)||void 0===h?void 0:h.authenticated},a.id);case i.C.NAME_CHANGE:return function(e){var t=e.oldName,n=e.user,a=n.displayName,r=n.displayColor,i="var(--theme-color-users-".concat(r,")");return(0,s.jsxs)("div",{className:c().nameChangeView,children:[(0,s.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,s.jsx)(o.Z,{})}),(0,s.jsxs)("div",{className:c().nameChangeText,children:[(0,s.jsx)("span",{style:{color:i},children:t}),(0,s.jsx)("span",{className:c().plain,children:" is now known as "}),(0,s.jsx)("span",{style:{color:i},children:a})]})]})}(a);case i.C.CONNECTED_USER_INFO:return function(e){if(!he(e))return(0,s.jsx)("div",{style:{width:"1px",height:"1px"}});return(0,s.jsx)(Q,{})}(a);case i.C.USER_JOINED:return function(e){var t=e.user,n=t.displayName,a=t.displayColor,r=he(e);return(0,s.jsx)(ie,{displayName:n,userColor:a,isAuthorModerator:r})}(a);case i.C.SYSTEM:return(0,s.jsx)(se,{message:a,highlightString:n},a.id);default:return null}},_=(0,r.useMemo)((function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.OO,{style:{height:h},className:c().virtuoso,ref:f,initialTopMostItemIndex:t.length-1,data:t,itemContent:function(e,t){return x(e,t)},followOutput:"auto",alignToBottom:!0,atBottomStateChange:function(e){return p(e)}}),!g&&(0,s.jsx)(ue,{chatContainerRef:f,messages:t})]})}),[t,n,l,u,g]);return(0,s.jsxs)("div",{className:c().chatContainer,children:[_,d&&(0,s.jsx)(z,{})]})};me.defaultProps={showInput:!0,height:"auto"}},13545:function(e){e.exports={chatHeader:"ChatContainer_chatHeader__EJsYI",toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",toBottomBtn:"ChatContainer_toBottomBtn__453AG",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz"}},83066:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa"}},93174:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},31681:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},25882:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",emojiButton:"ChatTextField_emojiButton__ON_Cu"}},79010:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},78583:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);
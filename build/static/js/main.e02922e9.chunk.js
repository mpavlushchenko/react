(window["webpackJsonptest-app"]=window["webpackJsonptest-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Nav_nav__2p4vD",item:"Nav_item__3_xdu",active:"Nav_active__3kHRf"}},,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2Gkkf",items:"Dialogs_items__tXrZS",active:"Dialogs_active__3lrrn",dialog:"Dialogs_dialog__3WNZB",massages:"Dialogs_massages__2cfMf",massage:"Dialogs_massage__2ZVu-","inner-text":"Dialogs_inner-text__1WvjB",btn:"Dialogs_btn__3xYgq"}},,function(e,a,t){e.exports={container:"News_container__2SmA3",item1:"News_item1__2lKDA",item2:"News_item2__ZmcYT",item3:"News_item3__3BDZa",item4:"News_item4__HSVuT",item5:"News_item5__1mavl",item6:"News_item6__26PAV"}},function(e,a,t){e.exports={friends:"Friends_friends__Khiy6",title:"Friends_title__3T3hc",items:"Friends_items__2o9za",friend:"Friends_friend__3iqCj"}},,function(e,a,t){e.exports={about:"ProfileInfo_about__2pGcG",image:"ProfileInfo_image__3Fudz","head-image":"ProfileInfo_head-image__3xowo"}},,function(e,a,t){e.exports={item:"Post_item__ot8XV",avatar:"Post_avatar__3a6PX"}},function(e,a,t){e.exports={comment:"MyPosts_comment__1cDqK",btn:"MyPosts_btn__3hKHa",posts:"MyPosts_posts__2iNw3"}},function(e,a,t){e.exports={home:"Home_home__1JeZt",video:"Home_video__TIwQb",content:"Home_content__2DCEc","ytp-chrome-top":"Home_ytp-chrome-top__38Q6R"}},,,,,,,,,,,function(e,a,t){e.exports={header:"Header_header__1v0yI"}},,,function(e,a,t){e.exports={main:"Content_main__vb7jG"}},function(e,a,t){e.exports={music:"Music_music__OAmaz"}},,,,,,function(e,a,t){e.exports=t(49)},,,,,,function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){"use strict";t.r(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(18),s={dialogs:[{id:1,name:"Maksym"},{id:2,name:"Dastyn"},{id:3,name:"Bob"},{id:4,name:"Karl"},{id:5,name:"Anton"}],messages:[{id:1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:2,message:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "},{id:3,message:"Excepteur sint occaecat cupidatat non proident"},{id:4,message:"Lorem ipsum dolor sit amet"},{id:5,message:"Excepteur sint occaecat cupidatat non proident"}],newMessageBody:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-NEW-MESSAGE-BODY":return e.newMessageBody=a.body,e;case"SEND-MESSAGE":var t=e.newMessageBody;return e.newMessageBody="",e.messages.push({id:6,message:t}),e;default:return e}},r={posts:[{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",likesCount:12},{id:2,text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",likesCount:1},{id:3,text:"Excepteur sint occaecat cupidatat non proident",likesCount:11}],newPostText:"ldldldldldlddl !!!"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t={id:5,text:e.newPostText,likesCount:0};return e.posts.push(t),e.newPostText="",e;case"UPDATE-NEW-POST-TEXT":return e.newPostText=a.newText,e;default:return e}},o=Object(n.a)({profilePage:c,dialogsPage:i}),m=Object(n.b)(o),l=t(0),d=t.n(l),u=t(26),v=t.n(u),_=(t(43),t(44),t(8)),p=t(27),E=t.n(p),g=function(){return d.a.createElement("header",{className:E.a.header})},f=t(4),N=t.n(f),h=t(5),w=t(10),b=t.n(w),x=function(){return d.a.createElement("div",{className:b.a.friends},d.a.createElement("div",{className:b.a.title},"Friends"),d.a.createElement("div",{className:b.a.items},d.a.createElement("div",{className:b.a.friend},d.a.createElement("img",{src:"https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=620,413",alt:""})),d.a.createElement("div",{className:b.a.friend},d.a.createElement("img",{src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_860,w_1529,x_54,y_0/f_auto,q_auto,w_1100/v1554826525/shape/mentalfloss/nedflanders_1692813.jpg",alt:""})),d.a.createElement("div",{className:b.a.friend},d.a.createElement("img",{src:"https://cdn.cnn.com/cnnnext/dam/assets/171114074429-underrepresented-apu-exlarge-16-9.jpg",alt:""}))))},P=function(){return d.a.createElement("div",null,d.a.createElement("nav",{className:N.a.nav},d.a.createElement("div",{className:N.a.item},d.a.createElement(h.b,{to:"/",activeClassName:N.a.active},"Home")),d.a.createElement("div",{className:N.a.item},d.a.createElement(h.b,{to:"/content",activeClassName:N.a.active},"Profile")),d.a.createElement("div",{className:N.a.item},d.a.createElement(h.b,{to:"/dialogs",activeClassName:N.a.active},"Massages")),d.a.createElement("div",{className:N.a.item},d.a.createElement(h.b,{to:"/news",activeClassName:N.a.active},"News")),d.a.createElement("div",{className:N.a.item},d.a.createElement(h.b,{to:"/music",activeClassName:N.a.active},"Music"))),d.a.createElement(x,null))},y=t(30),D=t.n(y),T=t(12),k=t.n(T),M=function(e){return d.a.createElement("div",{className:k.a.comment},d.a.createElement("div",{className:k.a["head-image"]},d.a.createElement("img",{alt:"back-img",src:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg"})),d.a.createElement("div",{className:k.a.about},d.a.createElement("div",{className:k.a.image},d.a.createElement("img",{src:"http://ekladata.com/3ynVnqIJRkaX_fAotZ-UDjGUbIM.gif",alt:"me"})),d.a.createElement("div",{className:k.a.address},d.a.createElement("div",{className:"full-name"},"Max Pavlushchenko"),d.a.createElement("div",{className:"birthday"},"11.06.1995"),d.a.createElement("div",{className:"home-address"},"City: Lviv"))))},S=t(15),C=t.n(S),A=t(14),j=t.n(A),B=function(e){return d.a.createElement("div",null,d.a.createElement("div",{className:j.a.item},d.a.createElement("div",{className:j.a.avatar},d.a.createElement("img",{src:"https://wallpaperbro.com/img/416174.png",alt:"avatar"})),d.a.createElement("div",{className:j.a.text},e.massage)),d.a.createElement("div",{className:j.a.like},"like",d.a.createElement("span",null,e.countLike)))},O=function(e){var a=e.posts.map(function(e){return d.a.createElement(B,{massage:e.text,countLike:e.likesCount})}),t=d.a.createRef();return d.a.createElement("div",null,d.a.createElement("div",{className:C.a.comment},d.a.createElement("h1",null,"My posts"),d.a.createElement("textarea",{onChange:function(){var a=t.current.value;e.updateNewPostText(a)},ref:t,rows:"10",value:e.newPostText}),d.a.createElement("div",{className:C.a.btn},d.a.createElement("button",{onClick:function(){e.addPost()}},"send"))),d.a.createElement("div",{className:C.a.posts},a))},F=function(e){var a=e.store.getState();return d.a.createElement(O,{updateNewPostText:function(a){var t=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a);e.store.dispatch(t)},addPost:function(){e.store.dispatch({type:"ADD-POST"})},posts:a.profilePage.posts,newPostText:a.profilePage.newPostText})},G=function(e){return d.a.createElement("main",{className:D.a.main},d.a.createElement(M,null),d.a.createElement(F,{store:e.store}))},H=t(9),L=t.n(H),U=function(){return d.a.createElement("div",{className:L.a.container},d.a.createElement("div",{className:L.a.item1},"1"),d.a.createElement("div",{className:L.a.item2},"2"),d.a.createElement("div",{className:L.a.item3},"3"),d.a.createElement("div",{className:L.a.item4},"4"),d.a.createElement("div",{className:L.a.item5},"5"),d.a.createElement("div",{className:L.a.item6},"6"))},I=t(31),W=t.n(I),R=function(){return d.a.createElement("div",{className:W.a.music},"Music")},Z=t(32),q=t(33),X=t(35),K=t(34),V=t(36),Y=t(16),z=t.n(Y),J=function(e){function a(e){var t;return Object(Z.a)(this,a),(t=Object(X.a)(this,Object(K.a)(a).call(this,e))).state={videoURL:"http://thenewcode.com/assets/videos/polina.mp4"},t}return Object(V.a)(a,e),Object(q.a)(a,[{key:"render",value:function(){return d.a.createElement("div",{className:z.a.home},d.a.createElement("video",{className:z.a.video,loop:!0,autoPlay:!0},d.a.createElement("source",{src:this.state.videoURL,type:"video/mp4"}),d.a.createElement("source",{src:this.state.videoURL,type:"video/ogg"}),"Your browser does not support the video tag."),d.a.createElement("div",{className:z.a.content},d.a.createElement("p",null,"peaky blinders")))}}]),a}(l.Component),Q=t(7),$=t.n(Q),ee=function(e){var a=/dialogs/+e.id;return d.a.createElement("div",{className:$.a.dialog},d.a.createElement(h.b,{to:a},e.name))},ae=function(e){return d.a.createElement("div",{className:$.a.massage},e.message)},te=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return d.a.createElement(ee,{name:e.name,id:e.id})}),n=a.messages.map(function(e){return d.a.createElement(ae,{message:e.message,id:e.id})}),s=a.newMessageBody;return d.a.createElement("div",{className:$.a.dialogs},d.a.createElement("div",{className:$.a.items},t),d.a.createElement("div",{className:$.a.massages},n,d.a.createElement("div",{className:$.a["inner-text"]},d.a.createElement("textarea",{value:s,onChange:function(a){var t=a.target.value;e.updateNewMessageBody(t)}}),d.a.createElement("div",{className:$.a.btn},d.a.createElement("button",{onClick:function(){e.sendMessage()}},"send")))))},ne=function(e){var a=e.store.getState().dialogsPage;return d.a.createElement(te,{updateNewMessageBody:function(a){e.store.dispatch(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(a))},sendMessage:function(){e.store.dispatch({type:"SEND-MESSAGE"})},dialogsPage:a})},se=function(e){return d.a.createElement("div",null,d.a.createElement(g,null),d.a.createElement("div",{className:"wrapper"},d.a.createElement(P,null),d.a.createElement("div",{className:"app-wrapper-content"},d.a.createElement(_.a,{exact:!0,path:"/",component:J}),d.a.createElement(_.a,{path:"/content",render:function(){return d.a.createElement(G,{store:e.store})}}),d.a.createElement(_.a,{path:"/dialogs",render:function(){return d.a.createElement(ne,{store:e.store})}}),d.a.createElement(_.a,{path:"/news",render:function(){return d.a.createElement(U,null)}}),d.a.createElement(_.a,{path:"/music",render:function(){return d.a.createElement(R,null)}}))))},ie=function(e){v.a.render(d.a.createElement(h.a,null,d.a.createElement(se,{state:e,dispatch:m.dispatch.bind(m),store:m})),document.getElementById("root"))};ie(m.getState()),m.subscribe(function(){var e=m.getState();ie(e)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[37,1,2]]]);
//# sourceMappingURL=main.e02922e9.chunk.js.map
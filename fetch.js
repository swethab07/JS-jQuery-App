// loadPostJson
  var posturl= "https://jsonplaceholder.typicode.com/posts";
  console.log(posturl)
  var requestpost = new XMLHttpRequest();
  requestpost.open('GET', posturl);
  requestpost.responseType = 'json';
  requestpost.send();
  requestpost.onload = function() {
  localStorage.posts = JSON.stringify(requestpost.response);
  }


// function loadCommentJson(){
  var commenturl= "https://jsonplaceholder.typicode.com/comments";
  console.log(commenturl)
  var requestcmnt = new XMLHttpRequest();
  requestcmnt.open('GET', commenturl);
  requestcmnt.responseType = 'json';
  requestcmnt.send();
  requestcmnt.onload = function() {
  localStorage.comments = JSON.stringify(requestcmnt.response);
  }

//load users from json

var usersurl= "https://jsonplaceholder.typicode.com/comments";
  console.log(usersurl)
  var requestusrs = new XMLHttpRequest();
  requestusrs.open('GET', usersurl);
  requestusrs.responseType = 'json';
  requestusrs.send();
  requestusrs.onload = function() {
  localStorage.users = JSON.stringify(requestusrs.response);
  }

var posts= JSON.parse(localStorage.getItem(posts));
var comments= JSON.parse(localStorage.getItem(comments));
var users= JSON.parse(localStorage.getItem(users));

console.log(posts);
var pstslen= posts.length;
var userlen= users.length;
var cmntslen= comments.length;
console.log(cmntslen);
console.log(userlen); 

//   for(var j=0 ; j<userlen; j++)
//   {
// for(var i=0; i<pstslen; i++){

//   if(users[j].id== posts[i].userId){
//     console.log("hello");
//      var html=`<div id="user_details_${i}" style="border: 1px solid black; padding:10px;">
//       <div>
//         <label style="padding:5px"><b>Name:</b>${users[j].username}</label>
//       </div>
//       <div>
//         <label style="padding:5px"><b>Title:</b>${posts[i].title}</label>
//       </div>
//       <div>
//         <label style="padding:5px"><b>Description:</b>${posts[i].body}</label>
//       </div>
//       <div>
//         <button id="cmnts_details_${i}" style=" border:0px; width: 150px; height: 40px; background-color:blue; color:white">View Comments</button>
//         <button id="remove_${i}" style=" border:0px; width: 150px; height: 40px; background-color:blue; color:white">Remove Post</button>
//       </div>
//       </div>`;
    
// jQuery('#cntr'). after(html);
//   }

// }
// }


// jQuery(document).on('click','button[id^="cmnts_details_"]', function(){  
//   var id = jQuery(this).attr('id');
//   id= id.replace('cmnts', 'user');
//   console.log(id);
//   var commsub= id.substring(13);
//   for(var i=0;i<cmntslen;i++){
//   if(commsub==comments[i].postId){
//     var html=`<ul id="rcmnt_${comments[i].postId}"><li style="border: 1px solid blue">${comments[i].body}
//               <button id="remve_${comments[i].postId}">Remove</button></li></ul>`;
//     console.log(comments[i].body);
//     jQuery('#'+id).after(html);
// }
// }
// });


// jQuery(document).on('click','button[id^="remve_"]',function(){
//   var id=jQuery(this).attr('id');
//   id= id.replace('remve','rcmnt');
//   console.log(id);
//   var commsub= id.substring(6);
  // for(var i=0; i<)
// });

// jQuery(document).on('click','button[id^="remove_"]', function(){
//   if(comments.postId==posts.postId){

// }
// });

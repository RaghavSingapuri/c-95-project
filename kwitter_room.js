function addUser(){
    user_name = document.getElementById("user_name").Value;
      localStorage.setItem("user_name" , user_name);
       window.location = "kwitter_room.html";
}

function .redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
   window.location = "kwitter_room.html";
}


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
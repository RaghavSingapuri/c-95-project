function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name" , room_name);
    window.localStorage = "kwitte_room.html";
}
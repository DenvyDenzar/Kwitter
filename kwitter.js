function AddUser(){
    User_name = document.getElementById("user_name_input").value;
    localStorage.setItem("user_name_input", User_name);
    window.location = "kwitter_room.html";
}
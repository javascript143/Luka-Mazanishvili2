function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:|\.[a-zA-Z]{2,6})+$/;
    const usernameRegex = /^[a-zA-Z\-]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log("user added");

}


function loginFunc(e){
    event.preventDefault()

    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    var user = localStorage.getItem(username)
    var data = JSON.parse(user);
    console.log(data);

    if(username == data.username && pass == data.password){
       window.location.assign("index.html")
}
}

const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
};

const signUp = () =>{
  // preventDefault();
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;
  if(cpass != pass){
    return alert("Password dint match")
  }
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  console.log(`${name} ${email} ${pass}`);
  fetch("/user/signup", {
      method: "POST",
      body: JSON.stringify({ 
        username : name, 
        email : email, 
        password : pass
      }),
      headers: {
          "Content-type": "application/json; charset = utf-8",
      },
  })
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data);
      alert(data.msg)
      window.location.replace("/student/dashboard");
  });
}

const login = () =>{
  var pass = document.getElementById("Spass").value;
  var email = document.getElementById("Semail").value;

  fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({ 
        email : email, 
        password : pass
      }),
      headers: {
          "Content-type": "application/json; charset = utf-8",
      },
  })
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data);
      if(data.error) {
        alert("Enter correct password");
        location.reload();
      }
      else{
        window.location.replace("/student/dashboard");
      }
  });
}
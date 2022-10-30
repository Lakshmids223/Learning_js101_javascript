let database_user = "lakshmi@gmail.com";
let database_pass = "143@abc";

let user = "lakshmi@gmail.com";
let pass = "143@abc";

if (database_user == user) {
  if (database_pass == pass) {
    console.log("Login Successfull");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("Wrong Credentials");
}
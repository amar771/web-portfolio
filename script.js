function lower_menu() {
  let window_size = window.matchMedia("(max-width: 769px");

  if (window_size.matches)
    document.getElementById("toggle").checked = false;

}

function save_contact() {
  // Gets all the data from form
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Creates JSON object that holds all data from the form
  let json_data = {
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
  }

  // Checks if data exists, and then adds it to the json object
  if (name) {
    json_data.name = name;
  }
  if (email) {
    json_data.email = email;
  }
  if (subject) {
    json_data.subject = subject;
  }
  if (message) {
    json_data.message = message;
  }

  console.log(json_data);
}
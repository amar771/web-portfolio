function lower_menu() {
  let window_size = window.matchMedia("(max-width: 769px");

  if (window_size.matches)
    document.getElementById("toggle").checked = false;

}

function save_contact() {
  if (sessionStorage.length > 0) {
    sessionStorage.clear();
  }
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

  sessionStorage.setItem(sessionStorage.length, JSON.stringify(json_data));
  //console.log(JSON.parse(sessionStorage.getItem(0)));
}

$().ready(()=>{
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email_validation: true
      },
      subject: {
        required: true,
        minlength: 5,
        maxlength: 120
      },
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Name is required.",
        minlength: "Minimum length of name is 3 characters."
      },
      email: {
        required: "Email is required.",
      },
      subject: {
        required: "Subject is required.",
        minlength: "Minimum length of subject is 3 characters.",
        maxlength: "Maximum length of subject is 120 characters."
      },
      message: {
        required: "Message is required."
      }
    }
  });

  $.validator.addMethod("email_validation", (value, element)=>{
    return /\\*@\\*.\\*/.test(value);
  }, "Email is not valid.");
})
$(function () {
  var fullNameError,
    emailError,
    ageError,
    phoneError,
    contactError,
    commentError = false;
  $("#success_message").hide();

  // validate Full Name
  $("#namecheck").hide();
  $("#fullName").keyup(function () {
    validateName();
  });
  function validateName() {
    let nameVal = $("#fullName").val();
    if (nameVal.length == "") {
      $("#namecheck").show();
      fullNameError = true;
    } else {
      $("#namecheck").hide();
      fullNameError = false;
    }
  }
  // validate age
  $("#agecheck").hide();
  $("#age").keyup(function () {
    validateAge();
  });
  function validateAge() {
    let ageVal = $("#age").val();
    if (ageVal.length == "") {
      $("#agecheck").show();
      ageError = true;
    } else if (!$.isNumeric(ageVal)) {
      $("#agecheck").html("Your age must be a number!");
      $("#agecheck").show();
      ageError = true;
    } else {
      $("#agecheck").hide();
      ageError = false;
    }
  }

  // validate phone
  $("#phonecheck").hide();
  $("#phone").keyup(function () {
    validatePhone();
  });
  function validatePhone() {
    var phoneVal = $("#phone").val();
    var filter =
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (phoneVal.length == "") {
      $("#phonecheck").show();
      phoneError = true;
    } else if (!filter.test(phoneVal)) {
      $("#phonecheck").html(
        "The number you passed is not a valid US phone number"
      );
      $("#phonecheck").show();
    } else {
      $("#phonecheck").hide();
      phoneError = false;
    }
  }

  // validate email
  $("#emailcheck").hide();
  $("#email").keyup(function () {
    validateEmail();
  });
  function validateEmail() {
    var emailVal = $("#email").val();
    var filter = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (emailVal.length == "") {
      $("#emailcheck").show();
      emailError = true;
    } else if (!filter.test(emailVal)) {
      $("#emailcheck").html("It is not a valid e-mail address");
      $("#emailcheck").show();
    } else {
      $("#emailcheck").hide();
      emailError = false;
    }
  }

  // validate comment
  $("#commentcheck").hide();
  $("#comment").keyup(function () {
    validateComment();
  });
  function validateComment() {
    var commentVal = $("#comment").val();
    if (commentVal.length == "") {
      $("#commentcheck").show();
      commentError = true;
    } else if (commentVal.length < 20) {
      $("#commentcheck").html(
        "Please write your message greater than 20 characters"
      );
      $("#commentcheck").show();
    } else {
      $("#commentcheck").hide();
      commentError = false;
    }
  }
  // validate contact method
  $("#radiocheck").hide();
  function validateContactMethod() {
    var contactVal = $("input[name='contact']:checked").val();
    if (!contactVal) {
      $("#radiocheck").show();
      contactError = true;
    } else {
      $("#radiocheck").hide();
      contactError = false;
    }
  }
  $("#contact-form").click(function () {
    validateName();
    validateAge();
    validatePhone();
    validateEmail();
    validateComment();
    validateContactMethod();
    if (
      fullNameError == false &&
      ageError == false &&
      phoneError == false &&
      emailError == false &&
      commentError == false &&
      contactError == false
    ) {
      $("#contact").trigger("reset");
      $("#success_message").show();
      return;
    }
  });
});

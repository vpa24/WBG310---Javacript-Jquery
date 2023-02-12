$(document).ready(function () {
  $("#contact").validate({
    rules: {
      age: { required: true, number: true, maxlength: 2 },
      email: { required: true, email: true },
      phone: {
        required: true,
        phoneUS: true,
      },
    },
    messages: {
      age: {
        required: "Please enter your age",
        number: "You must type only number",
        maxlength: "Age must less than 100",
      },
      email: {
        required: "Please supply your e-mail address.",
        email: "This is not a valid e-mail address.",
      },
      phone: {
        required: "Please enter your phone number",
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    submitHandler: function (form) {
      // for demo
      alert("Thanks for keep in touch!");
      return false;
    },
  });
  jQuery.validator.addMethod(
    "phoneUS",
    function (phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
      return (
        this.optional(element) ||
        (phone_number.length > 9 &&
          phone_number.match(
            /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/
          ))
      );
    },
    "Please specify a valid phone number"
  );
}); // end ready

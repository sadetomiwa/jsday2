// Exercise 1: Write a function called toCelcius that takes in a number representing 
// temperature in Fahrenheit and converts the number into Celcius.

// Ex 1. toCelcius(32) // 0
// Ex 2. toCelcius(212) // 100
// Ex 3. toCelcius(50) // 10
// */
// console.log('This is the homework!');

function toCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9);
    return celcius;
  }





// /*
// Exercise 2: Create a class for a User that sets username and password property
// on creation. Add a method to change the user's password. The method should take in 
// the old password and new password. If the old password is wrong do not reset the password.
// Create an instance of the new user and then change their password using the method.

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
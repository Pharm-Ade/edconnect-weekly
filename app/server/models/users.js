const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
           this.id = id;
           this.firstname = firstname;
           this.lastname = lastname;
           this.email = email;
           this.password = password;
           this.matricNumber = matricNumber;
           this.program = program;
           this.graduationYear = graduationYear;
    }

    getFullName() {
          return `${this.firstname} ${this.lastname}`
    }
}

class Users extends DataModel {
    authenticate(email, password) {
    let validUser = this.data.find((element) => element.email === email && element.password === passoword)
      return (validUser? true:false); 
    }

    getByEmail(email) {
    let User = this.data.find(user => user.email === email)
    return User? User:null;
    }

    getByMatricNumber(matricNumber) {
        let User = this.data.find(user => user.matricNumber === matricNumber)
        return User? User:null;
    }

    validate(obj) {
        let value = true;
        for(let prop in obj ){
            if(obj[prop] === null){
                value = false;
            }
        }
      let valEmail = this.data.find(ele => ele.email === obj.email)
      let valMatric = this.data.find(ele => ele.matricNumber === obj.matricNumber)
      let valPassword = this.data.find(ele => ele.password.length >= 7? true:false)

      if(valPassword == true && value == true){
          if(valEmail == false || valEmail == undefined){
              if(valMatric == false || valMatric == undefined){
               return true;
              }
          }
          
      }
      else{
          return false;
      }
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};
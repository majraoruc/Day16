const firstName = (firstName) => {
    var uperCase = firstName.toUpperCase();
    return uperCase;
  };
  
  const lastName = (lastName) => {
    var lowerCase = lastName.toLowerCase();
    return lowerCase;
  };
  
  exports.firstName = firstName;
  exports.lastName = lastName;
  
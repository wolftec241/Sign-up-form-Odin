const pw = document.querySelector('#password');
const pwC = document.querySelector('#passwordC');
const email = document.querySelector('#email');
const tel = document.querySelector('#phone-number');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#passwordC-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');

firstname.addEventListener("input", function (event) {
  if (firstname.value === '') {
    firstname.classList.remove("success");
    firstname.classList.add("error");
  } else {
    firstname.classList.remove("error");
    firstname.classList.add("success");
  }
}); 

lastname.addEventListener("input", function (event) {
  if (lastname.value === '') {
    lastname.classList.remove("success");
    lastname.classList.add("error");
  } else {
    lastname.classList.remove("error");
    lastname.classList.add("success");
  }
}); 

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch || email.value === '') {
      email.classList.remove("success");
        email.classList.add("error");
        emailError.textContent = 'Please enter in a valid Email.';
    } else {
        email.classList.remove("error");
        email.classList.add("success");
        emailError.textContent = '';
    }
  }); 

tel.addEventListener("input", function (event) {
    if (tel.validity.patternMismatch || tel.value === '') {
        tel.classList.remove("success");
        tel.classList.add("error");
        telError.textContent = 'Please enter in a valid Phone number.';
    } else {
        tel.classList.remove("error");
        tel.classList.add("success");
        telError.textContent = '';
    }
  }); 


  pw.addEventListener("input", function (event) {
    if (pw.validity.patternMismatch || pw.value === ''){
      const currentValue = pw.value;
      const regExpCap = /[A-Z]/g;
      const regExpLow = /[a-z]/g;
      const regExpDig = /[0-9]/g;
      let result = '';
      if (regExpCap.test(currentValue)){
        result += '';
      } else {
        result += `Missing at least 1 capital letter. `;
        result += '\n';
      }

      if (regExpLow.test(currentValue)){
        result += '';
      } else {
        result += `Missing at least 1 lowercase letter. `;
        result += '\n';
      }
      
      
      if (regExpDig.test(currentValue)){
        result += '';
      } else {
        result += 'Missing at least 1 number. ';
        result += '\n';
      }
      
      if (currentValue.length < 8){
        result += 'Password must be at least 8 characters. '
        result += '\n';
      } else {
        result += '';
      }

      console.log(result);
      pwError.textContent = result;
      pw.classList.remove("success");
      pw.classList.add("error");

    } else {
      pw.classList.remove("error");
      pw.classList.add("success");
      pwError.textContent = '';
    }
  });

  pwC.addEventListener("input", function (event) {
    if (pwC.value !== pw.value || pwC.value === '') {
      pwCError.textContent = 'Passwords do not match';
      pwC.classList.remove("success");
      pwC.classList.add("error");
    } else {
      pwCError.textContent = '';
      pwC.classList.remove("error");
      pwC.classList.add("success");
    }
  }); 
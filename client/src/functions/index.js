export const confirmEmail = (email) =>{
  let permitDomaines = ['@gmail.com','@yandex.ru','@mail.ru' ]
  let isLengthCorrect = email.length>3;
  let currentDomain = email.split('@')[1];
  let isDomainCorrect = permitDomaines.indexOf(currentDomain)!==-1;
  return {isEmailCorrect: isLengthCorrect&& isDomainCorrect}
}

export confirmPassword = (password, confirmedPassword)={
  return password===confirmedPassword;
}

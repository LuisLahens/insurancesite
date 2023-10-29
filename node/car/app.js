const contactForm = document.getElementById('myForm');
let fname = document.getElementById('fname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let insurancesTypes = document.getElementById('insurancesTypes');

contactForm.addEventListener('Submit', (e) => {
  e.preventDefault();
  
  let formData = {
    fname: fname.value,
    email: email.value,
    number: number.value,
    insurancesTypes: insurancesTypes.value
}
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.unload = function(){
    console.log(xhr.responseText);
    if (xhr.responseText == 'success'){
      alert('Email sent');
      fname.value = '';
      email.value = '';
      number.value = '';
      insurancesTypes.value = '';
    }else{
      alert('Something went wrong.')
    }
  }
  xhr.send(JSON.stringify(formData));
})
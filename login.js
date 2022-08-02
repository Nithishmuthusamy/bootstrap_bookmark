var value=document.getElementsByClassName("password")[0].value;
var flag=1;
document.getElementsByClassName("link_to_button2")[0].onclick=()=>{
  document.getElementsByClassName("password")[0].type="text";
  document.getElementsByClassName("link_to_button1")[0].style.display="block";
  document.getElementsByClassName("link_to_button2")[0].style.display="none";
}

document.getElementsByClassName("link_to_button1")[0].onclick=()=>{
  document.getElementsByClassName("password")[0].type="password";
  document.getElementsByClassName("link_to_button2")[0].style.display="block";
  document.getElementsByClassName("link_to_button1")[0].style.display="none";
}

const forms = document.getElementsByClassName('needs-validation')

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  })
})
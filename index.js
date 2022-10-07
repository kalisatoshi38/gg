const scriptURL ='https://script.google.com/macros/s/AKfycbwLzk2YVCJPppTmgl9lhY8XvfhY2PzS_FmUnHS3PThuj5XtamqbsGQqOJ3_DM28q3OQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message Sent Successfully"
      setTimeout(function(){
        msg.innerHTML= ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



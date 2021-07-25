function onSubmit(){
    var subject = document.querySelector('.subject').value
    var message = document.querySelector('.body-msg').value
    window.open(`mailto:liranmag@gmail.com?subject=${subject}&body=${message}`)
}


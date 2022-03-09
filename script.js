const inputs = document.querySelectorAll('input');
//inputs.forEach(a => a.addEventListener('click', e => console.log(e.target.validity))); //Test
inputs.forEach(a => a.addEventListener('change', e => {
    if (e.target.validity.valid) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid')
    }
    else {
        e.target.classList.remove('valid');
        e.target.classList.add('invalid')
    }
    console.log(e.target.classList);
}))
inputs.forEach(a => a.addEventListener('input', e => {
    if (e.target.validity.valid) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid')
    }
}))
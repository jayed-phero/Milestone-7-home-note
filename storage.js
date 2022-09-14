// storage
/*
localStorage.setItem('name', 'shofik khan')
localStorage.getItem(name);
localStorage.setItem('age', 35)
localStorage.removeItem(age)
localStorage.clear();
*/

document.getElementById('add-text').addEventListener('click', function(){
    const nameField = document.getElementById('user-name')
    const nameValue = nameField.value ;

    localStorage.setItem('name', nameValue)
})

document.getElementById('add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;

    localStorage.setItem('age', ageValue);
})

document.getElementById('remove-text').addEventListener('click', function(){
    localStorage.removeItem('name');
})

document.getElementById('remove-age').addEventListener('click', function(){
    localStorage.removeItem('age');
})

document.getElementById('clear-all').addEventListener('click', function(){
    localStorage.clear();
})
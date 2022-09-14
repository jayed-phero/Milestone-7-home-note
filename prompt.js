alert('kikhobor vaiya')

const showAlert = () => {
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        alert('ki khoboi nanu')
    }
    alert('ki khobor vaiya')
}

const askSomething = () => {
    const decision = confirm('are you coming picnic')
    console.log(decision)
    if(decision = true){
        alert("vai taka dee 501")
    }
    else{
        console.log('dim khau 3 ta')
    }
}


const getUserInfo = () => {
     const name = prompt('tell us your name')
     console.log(name)
    if(!!name){
        console.log('wellcome here', name)
    }
}



// cookie

const getCookieNsme = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.split(';  ');
    const cookie = cookieParts.find(c => c.includes(name));
    if(cookie){
        const cookieValue = cookie.slice('=')[1];
        return cookieValue;
    }
}


// storage

localStorage.setItem('name', 'shofik khan')
localStorage.getItem(name);
localStorage.setItem('age', 35)
localStorage.removeItem(age)
localStorage.clear();
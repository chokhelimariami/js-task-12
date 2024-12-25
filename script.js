 const newYear= new Date ('january 1 ,2025 00:00:00')
 function countDown() {
     const presentDay = new Date ();
    const difference = newYear - presentDay;

    const second = 1000;
    const minuts= 60* 1000;
     const hours = 60 * minuts;
     const days = 24* hours;

     const dayNumber = Math.floor( difference/days)
     const hourNumber = Math.floor ((difference % days ) / hours)
     const minutNumber = Math.floor ((difference % hours)  / minuts)
     const secondNumber = Math.floor ((difference % minuts ) /second)

     
     document.querySelector('.days').textContent = `0${dayNumber}`.slice(-2);
     document.querySelector('.hours').textContent = `0${hourNumber}`.slice(-2);
     document.querySelector('.minuts').textContent = `0${minutNumber}`. slice (-2);
     document.querySelector('.seconds').textContent = `0${secondNumber}`.slice(-2);
    
 }
 setInterval(countDown,1000)
 countDown()



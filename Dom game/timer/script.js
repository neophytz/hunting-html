// custom logic for timer clock!!


// setTimeOut
// console.log('hello world.');

// provided by browser.
// setTimeout(
//     () => {
//         console.log('dance');
//     },
//     3000
// );

// console.log('another statement');

// const tanuCookingFood = () => {
//     console.log('Im running');
//     console.log('Im running with you too');
// }

// industry application of setInterval = long pooling
// setInterval(() => tanuCookingFood(), 2000);


// notification service.


/**-------------------------------------------------*/
const _SECOND = 1000;
const _MINUTE = _SECOND * 60;
const _HOUR = _MINUTE * 60;
const _DAY = _HOUR * 24;

const deadline = new Date('july 31, 2022 15:37:25').getTime();

const getRemainingTime = ()=>{
    const current_time = new Date().getTime();
    const remaining = deadline - current_time;
    return {
        days : remaining / _DAY,
        hours : (remaining % _DAY) / _HOUR,
        minutes : (remaining % _HOUR) / _MINUTE,
        seconds : (remaining % _MINUTE) / _SECOND,
    }
}

setInterval(() => {
    updateValuesInUI(getRemainingTime());
}, _SECOND);

const updateValuesInUI = (balanceTime) => {
    // for(const key in balanceTime){
    //     // floor - 2.5 > 2 | 2.9 > 2 | 2.1 > 2;
    //     // Ceil -> 2.5 > 3 | 2.9 > 3 | 2.1 > 3;
    //     document.getElementById(key).innerText = Math.floor(balanceTime[key]);
    // }
    Object.keys(balanceTime).forEach(key => {
        document.getElementById(key).innerText = Math.floor(balanceTime[key]);
    });
}


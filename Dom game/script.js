const els = document.getElementsByTagName('div');
console.log(els);
for(const element of els) {
    element.addEventListener('dblclick', () => {
        console.log('you clicked')
    })
}
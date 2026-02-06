const leftInput = document.getElementById('leftMember');
const rightInput = document.getElementById('rightMember');
const opSelect = document.getElementById('operator');
const btn = document.getElementById('submitBtn');

setInterval(() => {
    alert('Please, use me...');
}, 30000); 

btn.addEventListener('click', () => {
    const leftVal = leftInput.value.trim();
    const rightVal = rightInput.value.trim();
    const operator = opSelect.value;

    if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
        alert('Error :('); 
        return;
    }

    const n1 = parseInt(leftVal, 10);
    const n2 = parseInt(rightVal, 10);
    let result;

    if ((operator === '/' || operator === '%') && n2 === 0) {
        alert("It's over 9000!"); 
        console.log("It's over 9000!"); 
        return;
    }

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n1 / n2; break;
        case '%': result = n1 % n2; break;
    }

    alert(result); 
    console.log(result); 
});
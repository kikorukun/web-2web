document.getElementById('calculate').addEventListener('click', function() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    
    const sum = number1 + number2;
    const difference = number1 - number2;
    const product = number1 * number2;
    const quotient = number2 !== 0 ? number1 / number2 : 'ไม่สามารถหารด้วยศูนย์ได้';

    document.getElementById('result').innerText = `ผลรวม: ${sum}, ผลต่าง: ${difference}, ผลคูณ: ${product}, ผลหาร: ${quotient}`;
});
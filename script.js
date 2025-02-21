document.getElementById('calculate').addEventListener('click', function() {
    const numerator = parseInt(document.getElementById('numerator').value);
    const denominator = parseInt(document.getElementById('denominator').value);
    
    if (denominator === 0) {
        alert('ไม่สามารถหารด้วยศูนย์ได้');
        return;
    }
    
    const result = numerator / denominator;
    document.getElementById('result').innerText = `ผลลัพธ์: ${result}`;
});
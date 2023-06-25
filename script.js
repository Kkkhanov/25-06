let input = document.getElementById('input-1');
let button1 = document.getElementById('but-1');
let out1 = document.getElementById('out-1');
let button2 = document.getElementById('but-2');
let input2 = document.getElementById('input-2');
let out2 = document.getElementById('out-2');

button1.addEventListener('click', function(){
    let string = input.value;
    const stringArr = string.split(' ');
    console.log(stringArr)

    let res1 = stringArr.length;
    console.log(res1);

    let res3 = stringArr.join('');
    console.log(res3)

    let res2 = stringArr.sort((a,b) => b.length - a.length)[0];
    console.log(res2);    

    out1.innerHTML = 'Слов в предложении: ' + res1 + '<br>' + 'Самое длинное слово: ' + res2 + '<br>' + 'Одной строкой: ' + res3;
});

function numToPr(number){
    const
        t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = number.toString(), out = '';

    if(str.length == 1) return o[number-1];

    else if(str.length == 2){
        if(str[0] == 1) out = p[parseInt(str[1])-1];
        
        else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
    }


    let arr = out.split('');
    arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    return out;
}


button2.addEventListener('click', function(){
    let num = input2.value;
    console.log(numToPr(num))
    out2.textContent = numToPr(num)
})
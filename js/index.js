let quize = [
    {
        question: 'Q1 : What is the capital of Bangladesh?',
        a : 'Sylhet',
        b : 'Dhaka',
        c : 'Rajshahi',
        d : 'Feni',
        ans : 'ans2'
    },

    {
        question: 'Q2 : What is the capital of India?',
        a : 'Mumabi',
        b : 'Dhaka',
        c : 'Dilhi',
        d : 'Kashmir',
        ans : 'ans3'
    },

    {
        question: 'Q3 : What is the capital of Nepal?',
        a : 'Sylhet',
        b : 'Dhaka',
        c : 'Rajshahi',
        d : 'Kathmundu',
        ans : 'ans4'
    },

    {
        question: 'Q4 : What is the capital of USA?',
        a : 'New york',
        b : 'Dhaka',
        c : 'Rajshahi',
        d : 'Feni',
        ans : 'ans1'
    },

    {
        question: 'Q5 : Who is the richest person in below?',
        a : 'Mehedi Hassan Rauf',
        b : 'Elon Musk',
        c : 'Mukesh Ambani',
        d : 'Jack Ma',
        ans : 'ans2'
    }
];

//creating variales
let first = document.querySelector('.first');
let start = document.getElementById('start');
let quize1 = document.querySelector('.quize1');
let second = document.getElementById('second');
let question = document.querySelector('.question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let submit = document.getElementById('Submit');
let ans = document.querySelectorAll('.ans');
let result = document.getElementById('result');
let s = 10;
let quescount = 0;
let score = 0;

start.addEventListener('click',function (e) {
    e.preventDefault();
    first.style.display='none';
    quize1.style.display='block';
    process();
});

function color() {
    let s2 = s%2;
    if (s2==0) {
        second.style.backgroundColor='red';
    } else {
        second.style.backgroundColor='green';
    };
};

function process() {
    s--;
    if (s==0) {
        final();
    }
    setTimeout('process()',1000);
    second.innerText=s;
    color();
};

function changequestion() {
    question.innerText = quize[quescount].question;
    opt1.innerText = quize[quescount].a;
    opt2.innerText = quize[quescount].b;
    opt3.innerText = quize[quescount].c;
    opt4.innerText = quize[quescount].d;
    
};
changequestion();

function checkAns() {
    let answer;
    ans.forEach(curans => {
        if (curans.checked) {
            answer = curans.id;
            curans.checked = false;
        };
        
    });
    return answer;
};

function final() {
    let checkans = checkAns();
    if (checkans===quize[quescount].ans) {
        score++;
    };
    s = 10;
    quescount++;

    if (quescount < quize.length) {
        changequestion();
    }else{
        s = '';
        quize1.style.display='none';
        result.innerHTML = `
        <h3> Your score is ${score} out of ${quize.length} </h3> 
        <button class="btn btn-outline-dark" onclick='location.reload()'>Play Again </button>
        `;
        result.classList.remove('result');
    };
}

submit.addEventListener('click',function lala(event) {
    event.preventDefault();
    final();
});




















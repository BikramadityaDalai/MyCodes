let data=[
    {      Q:"Which language is primarily used for web app development?",
           a: "C#",
           b: "Python",
           c: "JavaScript",   
           d: "Swift",
           ans:"JavaScript",
    },
    {
     Q: "Which of the following is a relational database management system?",
     a:"Oracle",b: "Scala", c:"Perl",d: "Java",
     ans: "Oracle"

    },
    {
     Q:"In which language is memory management provided by JVM?",
     a:"Java",b: "C",c: "C++",d: "Python",
     ans: "Java"

    },
    {
      Q:" What does HTML stand for?",
      a:"Hyperlink and Text Markup Language",b: "High Technology Modern Language", 
      c:"Hyper Text Markup Language",d: "Home Tool Markup Language",
      ans: "High Technology Modern Language" 
      
    },
    {
        Q: "Which of the following is not a valid variable name in Python?",
        a:"_myVar", 
        b:"myVar2",
        c:"cccc",
        d: "my_var",
        ans:"2myVar"
    },
    {
        Q: "Which of the following is not an object-oriented programming language?",
        a: "Java",b: "C#",c: "Scala",d: "C",
        ans: "c"
    },
    {
        Q: "Which tool is used to ensure code quality in JavaScript?",
        a:"JSLint",b: "TypeScript",c: "Babel",d:"Webpack",
        ans: "JSLint"
    },
    {
        Q: "In which data structure, elements are added at one end and removed from the other?",
        a:"Array",b:"Stack",c:"Queue",d:"LinkedList",
        ans:  "Queue"
    },
    {
        Q: "What is the primary use of the Git command 'clone'?",
        a:"To stage changes",b: "To copy a repository",c: "To switch to a different branch",d: "To list all the files in a repository",
        ans: "To copy a repository"
    },
    {
        Q: "What does API stand for in the context of programming?",
        a:"Apple Pie Interface",b:"Application Programming Interface",c: "Advanced Peripheral Integration", d:"Application Process Integration",
        ans: "Application Programming Interface"
    }
];


let quest=document.getElementById("qns");
let option1=document.getElementById("opt1");
let option2=document.getElementById("opt2");
let option3=document.getElementById("opt3");
let option4=document.getElementById("opt4");

let qno=0;
let score=0;

quest.innerHTML=data[qno].Q;
option1.innerHTML=data[qno].a;
option2.innerHTML=data[qno].b;
option3.innerHTML=data[qno].c;
option4.innerHTML=data[qno].d;

let next=document.getElementById("next");

next.addEventListener("click",()=>{
    const checkAns=document.querySelector('input[type="radio"]:checked');
    //console.log(checkAns.nextElementSibling.textContent);
    if(checkAns===null){
        alert("please select the answer")
    }else{
        if(checkAns.nextElementSibling.textContent===data[qno].ans){
            score++;
        }

        checkAns.checked = false;
        qno++;
        if(qno<data.length){
            quest.innerHTML=data[qno].Q;
            option1.innerHTML=data[qno].a;
            option2.innerHTML=data[qno].b;
            option3.innerHTML=data[qno].c;
            option4.innerHTML=data[qno].d;
            checkAns.checked=false;
        }else{
            alert("your score is "+score+"out of"+data.length);
            location.reload();
        }
  }
});
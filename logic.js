const themeButton =document.querySelector("#themeBtn");
let err =document.querySelectorAll(".err");
let project = document.querySelector(".stat b");
let dataProject =Number(project.getAttribute("data-target"))
let cups = document.querySelector(".stat #cups");
let datacups =Number(cups.getAttribute("data-target"));
let bugs = document.querySelector(".stat #bugs");
let databugs =Number(bugs.getAttribute("data-target"));
let start = 0;
let startCups = 0;
let startBugs = 0;
const roles = ["a frontend developer", "a curious learner", "a CSS animation fan", "a bug hunter"];
const typed =document.querySelector("#typed");
let wait = 0;
let typing = () => {
  if (wait < 4 ) {
    typed.innerHTML = "";
    typed.textContent =roles[wait];
    wait++;
  } else{
    wait = 0;
  }
}
typing();
setInterval( typing, 1000);
function intervals() {
  
  let projectInterval = setInterval(() => {
    start++;
  project.textContent = start;
  if (start >= dataProject) {
    project.textContent = dataProject;
    clearInterval(projectInterval)
  }
} , 375);
let cupsInterval = setInterval(() => {
  startCups++;
  cups.textContent = startCups;
  if (startCups >= datacups) {
    cups.textContent = datacups;
    clearInterval(cupsInterval)
  }
} , 10);
let bugsInterval = setInterval(() => {
   startBugs++;
   bugs.textContent = startBugs;
   if (startBugs >= databugs) {
     bugs.textContent = databugs;
     clearInterval(bugsInterval)
    }
  }, 30 );
}
intervals();


const skillsNode =document.querySelector(".skills");
const grid = document.querySelector("#grid");
let pink = "#ff8fb8";
let sun = "#ffd23f";
const projects = [
  {
    title: "Weather Buddy",
    kind: "js",
    label: "JavaScript",
    emoji: "⛅",
    color: "#8ecbff",
  },
  {
    title: "Neon Button Lab",
    kind: "css",
    label: "CSS",
    emoji: "✨",
    color: pink,
  },
  {
    title: "Todo Rocket",
    kind: "js",
    label: "JavaScript",
    emoji: "🚀",
    color: sun,
  },
  {
    title: "Loader Pack",
    kind: "css",
    label: "CSS",
    emoji: "🌀",
    color: "#7fe3b5",
  },
  {
    title: "Noodle Recipes",
    kind: "html",
    label: "HTML and CSS",
    emoji: "🍜",
    color: sun,
  },
  {
    title: "Quiz Arena",
    kind: "js",
    label: "JavaScript",
    emoji: "🎯",
    color: pink,
  },
];
const skills = [
  {
    name : "HTML" , 
    level : 90
  } ,
  {
    name : "CSS" , 
    level : 85
  } ,
  {
    name : "JavaScript" , 
    level : 70
  } ,
  {
    name : "DOM and events" , 
    level : 65
  } ,
  {
    name : "Responsive design" , 
    level : 80
  } ,
]
const chip = document.querySelectorAll(".chip");
let activeChip = document.querySelector(".chip");
const clock = document.querySelector("#clock");
const form = document.querySelector("#form");
const regexName = /^[A-Za-z ]{2,50}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexMessage = /^[\s\S]{10,}$/;
const nameMessage = document.querySelector("#name-input-err");
const emailMessage = document.querySelector("#email-err");
const msgMessage = document.querySelector("#msg-err");
const characters = document.querySelector("#count");
const nameValue = document.querySelector("#name-input");
const emailValue = document.querySelector("#email");
const msgValue = document.querySelector("#msg");
function update() {
  const now = new Date();
  let hour = now.getHours();
  const minute = String(now.getMinutes()).padStart("2", "0");
  const second = String(now.getSeconds()).padStart("2", "0");
  if (hour > 12) {
    hour = hour - 12;
    clock.textContent = ` Local time ${hour}:${minute}:${second} PM`;
  } else {
    {
      clock.textContent = ` Local time ${hour}:${minute}:${second} AM`;
    }
  }
}
update();
setInterval(update, 1000);
function showSkills(arr) {
  arr.forEach(element => {
    // Create elements
    const skil =document.createElement("div");
    skil.className = "skill";
const skillTop = document.createElement('div');
skillTop.className = 'skill-top';

const span1 = document.createElement('span');
const span2 = document.createElement('span');
span1.textContent = element.name;
span2.textContent = element.level;
const bar = document.createElement('div');
bar.className = 'bar';

const i = document.createElement('i');
i.style.width = `${element.level}%`;

// Assemble structure
bar.appendChild(i);

skillTop.appendChild(span1);
skillTop.appendChild(span2);
skil.appendChild(skillTop)
skil.appendChild(bar)
skillsNode.appendChild(skil);
  });
}
showSkills(skills);
function showCards(arr) {
  arr.forEach((element) => {
    // 1. Create all elements
    const article = document.createElement("article");
    article.className = "class-slap";
    article.setAttribute("data-kind" , element.kind)

    const card = document.createElement("div");
    card.className = "card";

    const thumb = document.createElement("div");
    thumb.className = "thumb";

    const span = document.createElement("span");
    span.textContent = element.emoji;

    thumb.style.background = element.color;
    const align = document.createElement("div");
    align.className = "align";

    const info = document.createElement("div");
    info.className = "info";

    const h3 = document.createElement("h3");
    h3.textContent = element.title;

    const p = document.createElement("p");
    p.className = "tag";
    p.textContent = element.label;

    const button = document.createElement("button");
    button.className = "like";
    button.textContent = "♡";

    // 2. Nest elements (from inside out)
    thumb.appendChild(span);

    info.appendChild(h3);
    info.appendChild(p);

    align.appendChild(info);
    align.appendChild(button);

    card.appendChild(thumb);
    card.appendChild(align);
    article.appendChild(card);
    grid.appendChild(article);
  });
}
showCards(projects);
activeChip.classList.add("on");
chip.forEach((category)=>{
  category.addEventListener("click" , ()=>{
    grid.innerHTML = "";
    activeChip.classList.remove("on");
    category.classList.add("on");
    activeChip = category;
    let select = category.getAttribute("data-filter");
    
    let filtered = projects.filter((element)=>{
      if (select === "all") return true
      return element.kind.startsWith(select) 
    })
    showCards(filtered)
  })
});
const likedButton =document.querySelectorAll(".like");
const liked = document.querySelector("#liked");
let total = JSON.parse(localStorage.getItem("likes")) || 0;
let inde = JSON.parse(localStorage.getItem("act")) || [];
let findElement =[...likedButton];
inde.forEach((element)=>{
  likedButton[element].classList.add("on");
})
if(total <=0){
  liked.textContent = "Tap a heart to like a project";
}
else if(total >=2){
liked.textContent = `You liked ${total} projects`
} else if (total < 2 ) {
  liked.textContent = `You liked ${total} project`
} 
likedButton.forEach((element,index)=>{
element.addEventListener("click",()=>{
  if (!element.classList.contains("on")) {
    inde.push(index)
    ++total;
    element.classList.add("on");
    localStorage.setItem("act" , JSON.stringify(inde));
  } else{
    
 if (total !== 0) {
      --total;
    }
    element.classList.remove("on");
    let a =findElement.indexOf(element);
    let elementToBeRemoved = inde.indexOf(a);   
    inde.splice(elementToBeRemoved,1);     
    localStorage.setItem("act" , JSON.stringify(inde));
    
  };
  localStorage.setItem("likes" , JSON.stringify(total));
if(total <=0){
  liked.textContent = "Tap a heart to like a project";
}
else if(total >=2){
liked.textContent = `You liked ${total} projects`
} else if (total < 2 ) {
  liked.textContent = `You liked ${total} project`
} 

});

})
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameValueR = nameValue.value.trim();
  emailValueR = emailValue.value.trim();
  msgValueR = msgValue.value.trim();
  if (!regexName.test(nameValueR)) {
    nameMessage.textContent = "Enter your name, at least 2 letters.";
  } else {
    nameMessage.innerHTML = "";
  }
  if (!regexEmail.test(emailValueR)) {
    emailMessage.textContent = "Enter an email like name@example.com.";
  } else {
    emailMessage.innerHTML = "";
  }
  if (!regexMessage.test(msgValueR)) {
    msgMessage.textContent =
      "Write at least 10 characters so I know what you need.";
  } else {
    msgMessage.innerHTML = "";
  }
  if (
    regexName.test(nameValueR) &&
    regexEmail.test(emailValueR) &&
    regexMessage.test(msgValueR)
  ) {
    form.reset();
  }
  characters.textContent = "0/200";
});
msgValue.addEventListener("input", () => {
  characters.innerHTML = "";
  characters.textContent = `${msgValue.value.length}/200`;
});


let  darkTheme = ()=> {
  document.documentElement.style.setProperty("--bg","#15132b");
  document.documentElement.style.setProperty("--card","#221e44");
  document.documentElement.style.setProperty("--text","#f5f1ff");
  document.documentElement.style.setProperty("--muted","#b3aed6");
  document.documentElement.style.setProperty("--edge","#b9b0ff");
  document.documentElement.style.setProperty("--hl","#5b4bd6");
  document.documentElement.style.setProperty("--err","#ff8a8a");
  err.forEach((element)=>{
    element.style.color = "#ff8a8a"
  })
  localStorage.setItem("theme" , "dark")
};
let  lightTheme = ()=> {
  document.documentElement.style.setProperty("--bg","#c9e4ff");
  document.documentElement.style.setProperty("--card","#fffdf7");
  document.documentElement.style.setProperty("--text","#1c1a33");
  document.documentElement.style.setProperty("--muted","#4b4870");
  document.documentElement.style.setProperty("--edge","#1c1a33");
  document.documentElement.style.setProperty("--hl","#ffd23f");
  document.documentElement.style.setProperty("--err","#c62828");
  localStorage.setItem("theme" , "light");
};
if (localStorage.getItem("theme") === "light") {
  lightTheme();
} else{
  darkTheme()
}
function displayMode() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkTheme();
  } else{
    lightTheme();
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change" , ()=>{
  displayMode();
});
themeButton.addEventListener("click" , ()=>{
  if (themeButton.textContent === "🌙") {
    themeButton.textContent = "☀️";
    lightTheme();
  } else{
    themeButton.textContent = "🌙";
    darkTheme();
  }
})

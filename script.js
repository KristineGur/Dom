
// let className = document.getElementsByClassName("child"); //elements მრავლობითშია რადგან ერთი და იგივე კლსი შესაძლებელი სხვადასხვა ელემენტს ჰქონდეს მინიჭებული
// let byId = document.getElementById("second_div");
// let byTag = document.getElementsByTagName("div");
// let querySall = document.querySelectorAll(".child"); //ეძებს css სელექტორით, ამიტომ სჭირდება წერტილი ან #. All დაბოლოება აბრუნებს ყველა ვარიანტს, რაც დაემთხვევა. All-ის გარეშე document.querySelector მხოლოდ პირველს.
// let queryS = document.querySelector("#second_div");

//კონტენტის ჩაწერა [html: მაგალითი1]
// function createText() {
//   let firstChild = document.getElementsByClassName("child")[0];
//   firstChild.innerText = "ჩაიწერა ტექსტური ტიპის კონტენტი innerText-ით";
// }

//კონტენტის ჩაწერა [html: მაგალითი1]
// function createElem() {
//   let firstChild = document.getElementsByClassName("child")[0];
//   firstChild.innerHTML = "<button>შეიქმნა button ღილაკი</button>";
// }

//სტილები [html: მაგალითი1]
// function createStyles(){
//   let firstChild = document.getElementsByClassName("child")[1];
//   firstChild.style.backgroundColor = "yellow"; 
//   firstChild.innerHTML = "<button>Clik</button>";
// }

// ელენეტის ჩამატება [html: მაგალითი1]
// function createEl () {
//   let header = document.createElement("h1");
//   let parent = document.getElementsByClassName("parent")[0]; // ClassName კოლექციას აბრუნებს ამიტომ ზუსტად უნდა მივუთითოთ ინდექსი
//   header.innerText = "ეს არის ჰედერის ტექსტი";
//   header.style.color = "white"
//   parent.appendChild(header);
// }

// ელენეტის შექმნა დინამიურად [html: მაგალითი 2] html დოკუმენტში button-ს ჩაემატა onclick="createDinamicP()" - ყოველ კლიკზე ამ ფუნქციას გამოიძახებს
// function createDinamicP (){
//   const container = document.getElementsByClassName("container")[0];
//   const p = document.createElement("p");
//   p.innerText = "ეს არის დინამიურად შექმნილი P"
//   p.style.color = "white"
//   container.appendChild(p);
// }

// მაუსის ჰოვერზე ბექგრაუნდის ფერის შეცვლა [html: მაგალითი 2] შევქმენით changeBgColor ფუნქცია, რომელსაც პარამეტრად გადავეცით color. const parent ცვლადში შევინახეთ html დოკუმენტში არსებული parent დივის მდებარეობა. parent დივს ჩავუმატეთ onmouseenter="changeBgColor('green'), რომელიც დივზე გადავლისას გამწვანდება და "onmouseleave="changeBgColor('red')" , რომლითაც დივზე მაუსის მოშორებით გახდება წითელი.
// function changeBgColor(color){
//   const parent = document.getElementsByClassName("parent")[0];
//   parent.style.backgroundColor = color;
// } 




 





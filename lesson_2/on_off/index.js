
const img = document.getElementsByTagName("img")[0];
const btn = document.getElementsByTagName("button")[0];
let counter = 0;
btn.onclick = () => {
    counter++;
    if(counter%2!==0){  // בודקים אם קאונטר אי זוגי - שארית בחלוקה בשתיים שונה מאפס
        img.src = "on.jpg";
        btn.innerHTML="off";
    }else{
        img.src = "off.jpg";
        btn.innerHTML="on";
    }
}

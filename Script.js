let availableKeywords = [
  'kurtas', 'Jeans for boys', 'top for girls', 'T-shirt for girls', 'T-shirt for boys', 'leggings',
  'Saree', 'Jeans for girls', 'T-shirt for boys','Skirt','Bikini','Dress pants','Jumper', 'Sneakers','Hoodie','Vest','High heels','Flip flops','Handbag','Tank top','Singlet','Boots','Shorts','Polo shirt','Umbrella','Dress','Hawaiian shirt','Mittens','Socks','Swimsuit','Trench coat','Winter coat','Straw hat','Cap','Scarf',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let input = inputBox.value.trim().toLowerCase(); 
  let filteredKeywords = availableKeywords.filter((keyword) => {
    return keyword.toLowerCase().includes(input);
  });
  console.log(filteredKeywords);
  if (input === '') { 
    resultsBox.innerHTML = '';
  } else {
    display(filteredKeywords);
  }
}

function display (result){
  const content = result.map((list)=>{
       return "<li onclick=selectInput(this)>" + list + "</li>"
  }).join(""); 
  resultsBox.innerHTML = "<ul>" + content + "</ul>"; // Corrected variable name to resultsBox
}

function  selectInput(list){
      inputBox.value = list.innerHTML;
      resultsBox.innerHTML = '';
}


// menu bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active')
  });
}
  
if(close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active')
  });
}
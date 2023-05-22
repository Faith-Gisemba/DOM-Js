document.getElementById('bodyContent').style.backgroundColor= 'silver';
document.getElementById('title').style.fontFamily = 'Arial'
document.getElementById('title').style.color = 'green'
document.getElementById('title').style.marginLeft = '30%'
document.getElementById('title').style.fontSize = '50px'

let h3 = document.querySelectorAll('h3');
h3.forEach(function(element) {
  element.textContent = element.textContent.toUpperCase();
});
document.getElementById('sell').style.fontSize = '25px'
document.getElementById('sell').style.fontStyle = 'italic'
document.getElementById('sell').style.marginLeft = '40%'
document.getElementById('vegy').style.width = '100%'
document.getElementById('vegy').style.borderRadius = '5%'

let fruit=document.createElement('li');
fruit.innerHTML='Rasberries'
document.getElementById('fruList').appendChild(fruit);
document.getElementById('fruList').style.marginLeft = '30%'
document.getElementById('fruList').style.fontSize = '25px'
document.getElementById('fruit').style.fontSize = '35px'
document.getElementById('fruit').style.marginLeft = '30%'
document.getElementById('rasb').style.width = '50%'
document.getElementById('rasb').style.marginLeft = '20%'




let veges =document.createElement('li');
veges.innerHTML='Cauliflower'
document.getElementById('vegList').appendChild(veges);
document.getElementById('vegList').style.marginLeft = '30%'
document.getElementById('vegList').style.fontSize = '25px'
document.getElementById('veg').style.fontSize = '35px'
document.getElementById('veg').style.marginLeft = '30%'
document.getElementById('cauly').style.width = '50%'
document.getElementById('cauly').style.marginLeft = '20%'









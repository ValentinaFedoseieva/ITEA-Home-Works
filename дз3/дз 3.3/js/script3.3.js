document.head.style.backgroundColor = 'red';
document.body.children[1].style.backgroundColor = 'pink';
document.body.children[1].children[1].style.backgroundColor = 'grey';

var list = document.getElementById('list')
var li = document.createElement('li');
li.innerHTML = 'Синій';
list.appendChild(li);


var firstLi = document.querySelector('li:first-child');
firstLi.classList.add('first-li');
document
    .getElementsByTagName("ul")[0]
    .getElementsByTagName("li")[0]
    .style.color = "yellow";
document
    .getElementsByTagName("ul")[0]
    .getElementsByTagName("li")[1]
    .style.color = "green";
document
    .getElementsByTagName("ul")[0]
    .getElementsByTagName("li")[2]
    .style.color = "blue";    
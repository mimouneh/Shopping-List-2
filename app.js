var input = document.getElementById('input');
var addButton = document.getElementById('add');
var list = document.getElementById('list');

addButton.onclick = CreateList;



function CreateList(){
  var li = document.createElement('li');
  li.textContent = input.value;
  var image = document.createElement('img');
  image.setAttribute('src',
 'http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png');
  li.appendChild(image);
  list.appendChild(li);
  input.value = ""; 
  image.ondblclick = function(){
    list.removeChild(li);
  };
  li.onclick = function(){
    li.style.background = '#84ac47';
  };
}
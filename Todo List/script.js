let inputelement = document.getElementById('input-element');
let listcontainer = document.getElementById('list-container');
let addbutton = document.getElementById('add-btn');

addbutton.addEventListener('click',()=>{
    if(inputelement.value === ''){
        alert('You must enter some text!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputelement.value;
        console.log(li.textContent)
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputelement.value = '';
    savedata();
});

listcontainer.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.classList.toggle('checked');
        savedata();
    }
    else if (event.target.tagName.toLowerCase() === 'span') {
        event.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem('data',listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showdata();
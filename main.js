const input = document.querySelector('.input');
const add = document.querySelector('.add-btn');
const ul = document.querySelector('ul');

//function to create new element
const newElement = (element) => document.createElement(element);

//function for done
const complete = (e) => e.target.parentElement.parentElement.childNodes[0].classList.toggle('complete');

//function to add list items 
const addList = ()=>{

    if(input.value < 1) return;

    const li = newElement('li');
    const span = newElement('span');
    const div = newElement('div');
    const del = newElement('input');
    const done = newElement('input');
    del.setAttribute('type', 'button');
    del.value = 'delete';
    del.classList.add('del-btn');
    done.setAttribute('type', 'button');
    done.value = 'done';
    done.classList.add('done-btn');
    span.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    div.classList.add('list-btn');
    div.appendChild(done);
    div.appendChild(del);
    li.appendChild(span);
    li.appendChild(div);
    input.value = '';
    
    done.addEventListener('click', complete);

    del.addEventListener('click', (e) => {
        const toDel = e.target.parentElement.parentElement;
        let lists = document.querySelectorAll('li');
        for(let i = 0; i < lists.length; i++){
            if(lists[i] === toDel){
                lists[i].remove();
            }
        }
    })
}
  


add.addEventListener('click', addList)

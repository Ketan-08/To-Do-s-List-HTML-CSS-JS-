let add = document.getElementById("add");
let clear = document.getElementById("clear");


add.addEventListener("click", getUpdated);



function getUpdated()
{
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    
    if (localStorage.getItem('item') == null) {
        arr = [];    
        arr.push([tit, desc]);
        localStorage.setItem('item', JSON.stringify(arr));
    }
    else {
        arrstr=localStorage.getItem('item');
        arr=JSON.parse(arrstr);
        arr.push([tit, desc]);
        localStorage.setItem('item', JSON.stringify(arr));
    }

    insert();
}


function insert() {

    if (localStorage.getItem('item') == null) {
        arr = [];    
        localStorage.setItem('item', JSON.stringify(arr));
    }
    else {
        arrstr=localStorage.getItem('item');
        arr=JSON.parse(arrstr);
        
    }
    

    tableBody = document.getElementById("tableBody");
    let str = "";

    arr.forEach((element, index) => {

        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" type="delete" onclick="del(${index})">Delete</button></td>
        </tr>`;
    });

    tableBody.innerHTML = str;

}

function clean()
{
    let result=confirm("DO you Want to clear the whole List?");
    if (result) {
        console.log("cleaning");
        localStorage.clear();
        insert();
      } 
      else {
        insert();
      }
}
    

function del(itemIndex)
{
    arrstr=localStorage.getItem('item');
    arr=JSON.parse(arrstr);
    arr.splice(itemIndex,1);
    localStorage.setItem('item', JSON.stringify(arr));
    insert();
}


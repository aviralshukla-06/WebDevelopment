let ctr = 1;
// function counter() {
//     let ctrUpdate = document.querySelector(".listOfWorks")
//     ctrUpdate.innerHTML = `<h2>${ctr}</h2>`;

//     ctr += 1;
// }
// counter();

console.log(ctr);

function addItem() {
    let listItem = document.querySelector(".listOfWork")

    let inputEle = document.querySelector("#inputFace").value

    let newItem = document.createElement("h2")
    newItem.innerHTML = `${ctr} - ${inputEle} <button onclick="deleteElement()">Delete</button>`
    ctr = ctr + 1;

    listItem.appendChild(newItem)

}

function deleteElement() {
    let listItem = document.querySelector("h2");
    let parentElement = document.querySelector(".listOfWork");

    parentElement.removeChild(listItem);
}

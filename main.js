window.addEventListener("load", ()=>{
    listNames()
})


const names = [
    {id: 1, name: "christopher"},
    {id: 2, name: "Samuel"},
    {id: 3, name: "Smith"},
    {id: 4, name: "Walter"}
]

const listNames = () =>{
    const content =  document.querySelector("#content");
    names.forEach((e)=>{
        content.insertAdjacentHTML("beforebegin", e.name + "</br>")
    })
}

const addNames = () =>{
    const content =  document.querySelector("#name").value;
    names.push({ id: names.length, name: content})
}

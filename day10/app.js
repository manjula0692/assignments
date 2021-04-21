const users=[
    {
        name:"ajay",
        age:30
    },
    {
        name:"ravi",
        age:28
    },
    {
        name:"radhika",
        age:35
    },
    {
        name:"aishwarya",
        age:32
    },
    {
        name:"kiran",
        age:25
    }
   
];
const resultEl=document.querySelector(".result");
const searchinputEl=document.querySelector(".search input");
const searchbtnEl=document.querySelector(".search button");

const displayResults=(data) =>{
    resultEl.innerHTML="";
    if(data.length>0){
        const ulEl=document.createElement("ul");
        const resultdom=data.map((item)=>{
            return `
                 <li>${item.name}</li>
                 `;
        })
        .join("");
        ulEl.innerHTML=resultdom;
        resultEl.appendChild(ulEl);
    }else{
        resultEl.innerHTML="no results found";
    }
};
displayResults(users);

searchbtnEl.addEventListener("click",()=>{
    const searchValue=searchinputEl.value;
    const filteredList=users.filter((usr)=>usr.name.includes(searchValue));
    displayResults(filteredList);
})
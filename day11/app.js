const resultEl=document.querySelector(".result");
const detailsEl=document.querySelector(".details");
resultEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const username = e.target.getAttribute('data-login');
    if (username) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => item.classList.remove('active'));

        e.target.parentElement.parentElement.classList.add('active');
        fetchRepoOfUser(username);
    }
});


const fetchUsers=async()=>{
    const response=await fetch('https://api.github.com/users')
    const users = await response.json();
    renderUsersList(users);

};

const renderUsersList=(users)=>{
    const trEls=users.map(user=>{
        return `
        <div class="item">
        <tr>
            <td>${user.login}</td>
            <td><img src="${user.avatar_url}" height="150" alt="${user.login}"></img></td>
             <td>
                 <button data-login="${user.login}">Show details</button></td> 
                      
        </tr>
        </div>
`
    }).join('');
   
    resultEl.innerHTML=`
                <table>
            <thead>
               <tr>
             <th>login</th>
             <th>Avatar</th>
             <th></th>

         </tr>
     </thead>
     <tbody>
         ${trEls}
         
     </tbody>
 </table> 
 
`
}
const fetchRepoOfUser=async(login)=>{
    detailsEl.innerHTML='';
    const respons=await fetch(`https://api.github.com/users/${login}/repos`)
    const detail = await respons.json();
    renderUserDetails(detail);

}
const renderUserDetails=(detail)=>{
    const trEls=detail.map(detail=>{
        return `
        
        <tr>
            <td><li>${detail.name}</li></td>  
                
        </tr>
`
    }).join('');
    detailsEl.innerHTML =`
    <table>
    <tbody>
    ${trEls}
    </tbody>
    </table>

    `

};


fetchUsers();
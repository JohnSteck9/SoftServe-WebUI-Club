const container = document.querySelector(".container.users");

const getUsers = async () => {
    const requestURL = "http://localhost:3000/users/";
    const data = await fetch(requestURL)
    .then((response) => response.json())
    .catch((e) => { throw e});
    
    // console.log(data)
    let usersStr = ''
    data.forEach((user) => {
        usersStr += `
        <div class="user">
            <h3>User Id: ${user.id}</h3>
            <p>Name: ${user.first_name}</p>
            <p>Lastname: ${user.last_name}</p>
            <p>Email: ${user.email}</p>
            <img src="${user.photo}" alt="user photo">
        </div>`
    });
    container.insertAdjacentHTML('beforeend', usersStr);
};

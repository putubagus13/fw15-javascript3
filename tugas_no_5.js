fetch("https://jsonplaceholder.typicode.com/users")
.then ((Response)=> Response.json())
.then ((dataNama)=> {
    let nama = dataNama.map(user=>{
        user = user.name
        return user;
    })
    console.log(nama);
})
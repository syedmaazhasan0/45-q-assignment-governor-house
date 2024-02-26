let users : string [] = ['admin','eric','maaz','hasan','moiz'];
for(let user of users){
    if(user === "admin"){
        console.log("Hello admin would you like to see a status report?")
    } else {
        console.log(`hello ${user}, thank you for logging again `)
    }
}
const getUser = (id, callback) => {
    const user = {
        id: id,
        name: "Giuseppe"
    };
    callback(user);
}

getUser(31, (user) => {
    console.log(user);
})

console.log('before');

getUser(12, function(user) {
    console.log(user);

    getRepos(user.id, function(repos) {
        console.log(repos);
    })
});

console.log('after');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Retreive data from server');
        return callback({id, name: "Mohamed IDBRAHIM"});
    }, 2000);
}

function getRepos(userId, callback) {
    setTimeout(() => {
        console.log('Retreive repos');
        return callback(['repo1', 'repos2']);
    }, 2000);
}
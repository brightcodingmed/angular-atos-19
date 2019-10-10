
console.log('before');

getUser(12)
  .then((user) => {
    return getRepos(user.id);
  })
  .then((repos) => {
      console.log(repos);
  })
  .catch((error) => console.error(error))

console.log('after');

function getUser(id) {

    return p = new Promise((resolve, reject) => {
        check = true;
        setTimeout(() => {
            console.log('Retreive data from server');
            if(check)
            return resolve({id, name: "Mohamed IDBRAHIM"});
            else {
                return reject('not found !')
            }
        }, 2000);
    })
}

function getRepos(userId) {
    return p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Retreive repos');
        return resolve(['repo1', 'repos2']);
    }, 2000);
  })
}
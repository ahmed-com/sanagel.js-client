//this is testing
const firstSocket = io('/groupMessage');
firstSocket.on('connect',()=>{
    fetch('groupMessage/join/',{
        method : 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({userId : 1, socketId : firstSocket.id})
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response);
    })    
    .then(()=>{
        return fetch('groupMessage/subscribe/',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({userId : 1, room : 222})
        })
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response)
    })
    firstSocket.on('recordCreated',record=>{
        console.log(`first socket received : ${record}`);
    })
});
const secondSocket = io('/groupMessage');
secondSocket.on('connect',()=>{
    fetch('groupMessage/join/',{
        method : 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({userId : 2, socketId : secondSocket.id})
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response);
    })    
    .then(()=>{
        return fetch('groupMessage/subscribe/',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({userId : 2, room : 222})
        })
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response)
    })
    secondSocket.on('recordCreated',record=>{
        console.log(`second socket received : ${record}`);
    })
});
const thirdSocket = io('/groupMessage');
thirdSocket.on('connect',()=>{
    fetch('groupMessage/join/',{
        method : 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({userId : 3, socketId : thirdSocket.id})
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response);
    })    
    .then(()=>{
        return fetch('groupMessage/subscribe/',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({userId : 3, room : 555})
        })
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response)
    })
    thirdSocket.on('recordCreated',record=>{
        console.log(`third socket received : ${record}`);
    })
});
const fourthSocket = io('/groupMessage');
fourthSocket.on('connect',()=>{
    fetch('groupMessage/join/',{
        method : 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({userId : 4, socketId : fourthSocket.id})
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response);
    })    
    .then(()=>{
        return fetch('groupMessage/subscribe/',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({userId : 4, room : 555})
        })
    })
    .then(response=> response.json())
    .then(response=>{
        console.log(response)
    })
    fourthSocket.on('recordCreated',record=>{
        console.log(`fourth socket received : ${record}`);
    })
});

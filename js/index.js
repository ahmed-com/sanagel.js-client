//this is testing

const create = nameSpace=>{
    return fetch('/api/create',{
        method : 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({nameSpace})
    })
    .then(response=> response.json())
}
const drop = nameSpace=>{
    return fetch('/api/delete',{
        method : 'delete',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({nameSpace})
    })
    .then(response=> response.json())
}
const createRoom = (nameSpace,data,token)=>{
    return fetch(`/${nameSpace}/room`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({data})
    })
    .then(response=> response.json())
}
const join = (nameSpace,socketId,token)=>{
    return fetch(`/${nameSpace}/join`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({socketId})
    })
    .then(response=> response.json())
}
const invite = (nameSpace,room,invitedId,inviteAccessLevel,token)=>{
    return fetch(`/${nameSpace}/invite`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,invitedId,inviteAccessLevel})
    })
    .then(response=> response.json())
}
const subscribe = (nameSpace,room,token)=>{
    return fetch(`/${nameSpace}/subscribe`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room})
    })
    .then(response=> response.json())
}
const unsubscribe = (nameSpace,room,token)=>{
    return fetch(`/${nameSpace}/unsubscribe`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room})
    })
    .then(response=> response.json())
}
const leave = (nameSpace,token)=>{
    return fetch(`/${nameSpace}/leave`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response=> response.json())
}
const remove = (nameSpace,room,removedId,token)=>{
    return fetch(`/${nameSpace}/remove`,{
        method : 'delete',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,removedId})
    })
    .then(response=> response.json())
}
const getSubscribers = (nameSpace,room,token)=>{
    return fetch(`/${nameSpace}/subscribers`,{
        method : 'get',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room})
    })
    .then(response=> response.json())
}
const deleteRoom = (nameSpace,room,token)=>{
    return fetch(`/${nameSpace}/room`,{
        method : 'delete',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room})
    })
    .then(response=> response.json())
}
const getAllRecords = (nameSpace,room,token)=>{
    return fetch(`/${nameSpace}/records`,{
        method : 'get',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room})
    })
    .then(response=> response.json())
}
const getUnseenRecords = (nameSpace,token)=>{
    return fetch(`/${nameSpace}/records/unseen`,{
        method : 'get',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response=> response.json())
}
const getUserRecords = (nameSpace,token)=>{
    return fetch(`/${nameSpace}/records/user`,{
        method : 'get',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response=> response.json())
}
const getRecord = (nameSpace,room,recordId,token)=>{
    return fetch(`/${nameSpace}/record`,{
        method : 'get',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,recordId})
    })
    .then(response=> response.json())
}
const updateRecord = (nameSpace,room,recordId,data,token)=>{
    return fetch(`/${nameSpace}/record`,{
        method : 'put',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,recordId,data})
    })
    .then(response=> response.json())
}
const deleteRecord = (nameSpace,room,recordId,token)=>{
    return fetch(`/${nameSpace}/record`,{
        method : 'delete',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,recordId})
    })
    .then(response=> response.json())
}
const createRecord = (nameSpace,room,data,token)=>{
    return fetch(`/${nameSpace}/record`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,data})
    })
    .then(response=> response.json())
}
const seenCheck = (nameSpace,room,recordId,token)=>{
    return fetch(`/${nameSpace}/recordStatus`,{
        method : 'put',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({room,recordId})
    })
    .then(response=> response.json())
}
const signUp = (nameSpace,mail,password,userName,data,token)=>{
    return fetch(`/${nameSpace}/user/signup`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({mail,password,userName,data})
    })
    .then(response=> response.json())
}
const signIn = (nameSpace,mail,password,token)=>{
    return fetch(`/${nameSpace}/user/signin`,{
        method : 'post',
        headers :{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({mail,password})
    })
    .then(response=> response.json())
}
const socketListener = (event,nameSpace)=>{
    return new Promise((resolve,reject)=>{
        io(`/${nameSpace}`).on(event,resolve);
    })
}
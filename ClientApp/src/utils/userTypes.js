const isAdmin = ()=>{
    return isAuthorized() !== null && localStorage.getItem('type')==='admin';
}

const isReceptionist = ()=>{
    return isAuthorized() && localStorage.getItem('type')==='receptionist';
}

const isAuthorized = ()=>{
    return Boolean(localStorage.getItem('token'));
}
export {
    isAdmin,
    isReceptionist,
    isAuthorized
};
export default (obj) => {
    if(typeof obj != "object")
        throw new Error("Argument must be object");
    let keys = [];
    Object.keys(obj).map(k => keys.push(k));    
    return keys;
}

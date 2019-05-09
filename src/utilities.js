const path = require('path');
const ent = require('ent');
exports.isErr = (_data) =>{
    return _data instanceof Error;
}

exports.purifyData = (_data) =>{
    let contents = _data.replace(/(\r\n|\n|\r)/g,"<br />");
    contents = ent.encode(contents)
    return contents;
}
exports.uploadProfil = (_data) =>{
    if (_data.mimetype === "image/png" || _data.mimetype === "image/jpg" || _data.mimetype === "image/jpeg" || _data.mimetype === "image/gif"){}
}
exports.verifUserConnected = (array, id) =>{
    let user = false;
    for (let i in array){
        if (array[i].id === id){
            user = true;
        }
    }
    return user;
}
exports.verifImage = (_data) =>{
    let image = false;
    const re = /(?:\.([^.]+))?$/;
    let ext = re.exec(_data)[1];
    ext = ext.toLowerCase();
    if(ext == "jpeg" || ext == "jpg" || ext == "png" || ext == "gif"){
        image = true;
    }
    return image;
}
exports.strinfToDate = (data)=>{
    let date = new Date();
    let tab = new Array();
    data = data.toString()
    tab = data.split('-');
    date.setDate(tab[2]);
    date.setMonth(tab[1] - 1);
    date.setFullYear(tab[0]);
    return date;
}
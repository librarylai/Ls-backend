import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import config from './config/development_config'
export const onTime = () => {
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();

    return [date.getFullYear(), "-" +
        (mm > 9 ? '' : '0') + mm, "-" +
        (dd > 9 ? '' : '0') + dd, " " +
        (hh > 9 ? '' : '0') + hh, ":" +
        (mi > 9 ? '' : '0') + mi, ":" +
        (ss > 9 ? '' : '0') + ss
    ].join('');
}


export const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(email);
    return result;
}

export const setPasswordCryproSHA1 = (password) => {
    let hashPassword = crypto.createHash('sha1')
    hashPassword.update(password);
    const rePassword = hashPassword.digest('hex');
    return rePassword;
}

export const checkVerifyToken = (token) => {
    let tokenResult = ''
    const time = Math.floor(Date.now() / 1000)
    return new Promise((resolve, reject) => {
        if (!token) return
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                tokenResult = false
            } else if (decoded.exp <= time) {
                tokenResult = false
            } else {
                tokenResult = decoded.data
            }
            resolve(tokenResult)
        })


    })
}

//判斷空值
export const checkNull = (data) => {
    for (var key in data) {
        // 不為空
        return false;
    }
    // 為空值
    return true;
}
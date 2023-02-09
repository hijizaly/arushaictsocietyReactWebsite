const authTokenStoreFun = {
    tokenSet: (token) => {
        token = "Bearer " + token;
        // localStorage.setItem('authorization', JSON.stringify(token));
        localStorage.setItem('authorization', token);
        return token;
    },
    tokenGet: () => {
        return localStorage.getItem('authorization');
    },
    pwdrsturlSet: (urlData) => {
        console.dir(urlData);
        const now = new Date()


        let n_ = Number(now.getTime()) + Number(60000 * 45);
        const urlData_ = urlData + "T" + n_;
        return localStorage.setItem('passwordResetUrl', urlData_);
    },
    // pwdrsturlGet:()=>{
    //     return localStorage.getItem('passwordResetUrl')
    // }
    pwdrsturlGet: () => {
        let sItem = localStorage.getItem('passwordResetUrl');

        if (sItem === null) {
            return null
        } else {
            const sItem_ = sItem.split("T");
            const now = new Date();

            if (Number(now.getTime()) > Number(sItem_[1])) {
                localStorage.removeItem('passwordResetUrl')
                return null
            } else {
                return sItem_[0];
            }
        }

    },
    pwdrsturlRes:()=>{
        localStorage.removeItem('passwordResetUrl')
    }
}
export default authTokenStoreFun;

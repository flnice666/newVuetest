export const landPromise = (userName: string, password: string) => {
    return new Promise((res, rej) => {
        console.log(userName, password, '入参');
        if(userName === 'tom' && password === '123'){
            setTimeout(() => {
                res({
                    success: true,
                    data: '成功了',
                    errorMessage: null
                })
            }, 1000)
        }else{
            setTimeout(() => {
                res({
                    success: false,
                    data: '失败了',
                    errorMessage: '傻缺，输入用户名密码不正确'
                })
            }, 1000)
        }
    })
}
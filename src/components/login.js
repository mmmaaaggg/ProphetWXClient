function ConfirmLogin () {
    let token = wx.getStorageSync('token')
    wx.request({
        url: 'https://prophets.top/auth/login_detection',
        header: {
          token: token
        },
        success (res) {
          if (res.data.message) {
              return
          }
          else {
                console.log('login fail,Please login again')
                firstLogin();
          }
        },
        fail: () => {
          console.log('request fail')
        }

    })

}

function firstLogin () {
    wx.login({
        success(res) {
            if (res.code) {
            console.log(res.code)
                //发起网络请求
                wx.request({
                    url: 'https://prophets.top/auth/login',
                    header: {
                      'content-type': 'json',
                    },
                    data: {
                        code: res.code
                    },
                    success(res) {
                        wx.setStorageSync('token',res.data.token)
                    }
                })
            }
        }
    })
  }

export {
	firstLogin,
    ConfirmLogin
}
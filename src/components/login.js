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
      });
  }
export {
	firstLogin
}
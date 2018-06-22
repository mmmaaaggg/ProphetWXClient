function firstLogin () {
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://prophets.top/auth/login',
              //url: 'http://127.0.0.1:6060/wx/login',
              data: {
                code: res.code
              },
              header: { "Content-Type": "application/x-www-form-urlencoded" },
              method: 'GET',
              success(res) {
                wx.setStorageSync('token',res.data.token)
              } 
            })
          } 
        },
        
        fail(error) {
          console.log("request fail")
        }
      });
  }
export {
	firstLogin
}
<template>
	<view class="uni-bg" >
		<view class="title">
			<text>NFC信息管理系统</text>
		</view>
		<view class="content" >
			<view class="index">
				<view class="titleClass">
					<view class="loginClass" @click="showLoginFunction" :style="{fontWeight:loginFontWeight}">登录</view>
					<view class="registerClass" @click="showRegisterFunction" :style="{fontWeight:registerFontWeight}">注册</view>
				</view>
				<view class="login" v-if="showLogin">
					<view class="login_mobile">
						<input class="login_mobile_input" type="number" placeholder="请输入手机号" v-model="login_mobile"/>
					</view>
					<view class="login_password">
						<input class="login_password_input" type="password" placeholder="请输入密码" v-model="login_password"/>
					</view>
					<button class="login_button" type="default" @tap="login">登录</button>
				</view>
				  <view class="register" v-if="!showLogin">
				     <view class="register_mobile">
				       <input class="register_mobile_input" type="number" placeholder="请输入手机号" v-model="mobile" />
				     </view>
					 <view class="reg_password">
					 	<input class="reg_password_input" type="password" placeholder="请输入密码" v-model="reg_password"/>
					 </view>
				     <view class="register_code">
				       <input class="register_code_input" type="text" placeholder="请输入校验码" v-model="code" />
				     </view>
					 <view class="codeContainer">
					   <view class="code_button" :class="{ disabled: codeDisabled }" @click="sendCode">{{ codeText }}</view>
					   <view class="refresh_button" @click="refreshCode">刷新</view>
					 </view>
				     <button class="register_button" type="default" @click="reg">注册</button>
				   </view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				// 控制登录或是注册是否显示
				showLogin:true,
				// 登录或注册按钮是否加粗
				loginFontWeight: 'bold',
				registerFontWeight: '',
				login_mobile:'',
				login_password:'',
				reg_password:'',
				mobile: '',
				code: '',
				codeText: '获取验证码',
				codeDisabled: false,
				userlist:[
					
				]
			}
			
			
		},
		onLoad() {
		},
		methods: {
			isValidMobile(username){
				return true
			},
			isValidCode(code){
				return true
			},
			// 显示登陆信息
			showLoginFunction(){
				this.showLogin=true,
				this.loginFontWeight='bold'  // 设置登录字体加粗
				this.registerFontWeight=''
			},
			// 显示注册页
			showRegisterFunction(){
				this.showLogin=false
				this.loginFontWeight=''  // 设置注册字体加粗
				this.registerFontWeight='bold'
			},
			login(){
			  // if(this.login_mobile === '18850547797' && this.login_password === '723809'){
			  //   uni.switchTab({
			  //     url:'/pages/read_data/read_data',
			  //   })	
			  //   console.log(this.login_mobile, this.login_password);
			  // } else if(this.login_mobile !== '18850547797' && this.login_password !== '723809') {
			  //   uni.showToast({
			  //     title: '手机号和密码均输入错误',
			  //     icon: 'none',
			  //     duration: 2000
			  //   });
			  //   this.login_mobile = '';
			  //   this.login_password = '';
			  // } else if(this.login_mobile !== '18850547797') {
			  //   uni.showToast({
			  //     title: '手机号输入错误',
			  //     icon: 'none',
			  //     duration: 20000
			  //   });
			  //   this.login_mobile = '';
			  // } else {
			  //   uni.showToast({
			  //     title: '密码输入错误',
			  //     icon: 'none',
			  //     duration: 2000
			  //   });
				
			    // this.login_password = '';
			  // }
			  for(let i =0;i<this.userlist.length;i++){
					if(this.login_mobile==this.userlist[i].username){
						if(this.login_password==this.userlist[i].password){
							  uni.switchTab({
							    url:'/pages/read_data/read_data',
							  })	
							  console.log(this.login_mobile, this.login_password);
						}else{
							  uni.showToast({
							    title: '密码输入错误',
							    icon: 'none',
							    duration: 2000
							  });
							  this.login_mobile = '';
							  this.login_password = '';
						}
					}
			  }
			},
			generateCode(length) {
			      let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			      let code = '';
			      for (let i = 0; i < length; i++) {
			        let index = Math.floor(Math.random() * chars.length);
			        code += chars[index];
			      }
			      return code;
			    },
			    sendCode() {
			      if (this.codeDisabled) {
			        return;
			      }
			      this.codeDisabled = true;
			      let count = 10;
			      this.codeText = count + '秒后重试';
			      let timer = setInterval(() => {
			        count--;
			        this.codeText = count + '秒后重试';
			        if (count === 0) {
			          clearInterval(timer);
			          this.codeText = '获取验证码';
			          this.codeDisabled = false;
			        }
			      }, 1000);
			      this.code = this.generateCode(4);
			    },
			    refreshCode() {
			      this.code = '';
			      this.codeDisabled = true;
			      let count = 3;
			      this.codeText = count + '秒后刷新';
			      let timer = setInterval(() => {
			        count--;
			        this.codeText = count + '秒后刷新';
			        if (count === 0) {
			          clearInterval(timer);
			          this.codeText = '获取验证码';
			          this.codeDisabled = false;
			        }
			      }, 1000);
			      this.code = this.generateCode(4);
			    },
			    reg() {
			      // 验证手机号和验证码是否正确，这里省略具体实现
			      if (!this.isValidMobile(this.mobile)) {
			        uni.showToast({
			          title: '手机号格式不正确',
			          icon: 'none'
			        });
			        return;
			      }
			      if (!this.isValidCode(this.code)) {
			        uni.showToast({
			          title: '验证码不正确',
			          icon: 'none'
			        });
			        return;
			      }
			      // 提交注册信息到后端进行处理
			      // ...
				  var that=this;
				  var temp={
					  username:that.mobile,
					  password:that.reg_password
				  };
				  that.userlist.push(temp);
			      uni.showToast({
			        title: '注册成功',
			        icon: 'success'
			      });
				  console.log(that.userlist)
			     
				  this.showLogin=true
				  
			    },
			   mounted() {
			      // 检查本地存储中是否存在已经登录过的账号和密码
			      let username = localStorage.getItem('username');
			      let password = localStorage.getItem('password');
			      if (username && password) {
			        // 自动登录
			        // ...
			      }
			
		}
},
}
</script>

<style>

	.titleClass {
	  display: flex;
	  flex-direction: row;
	  flex: 1;
	  justify-content: space-between;
	  font-size: 48rpx;
	  color: blue;
	  align-items: center;
	}
	.login_mobile,.login_password,.register_mobile,.register_code,.reg_password{
		display: flex;    // 水平放置
		margin-top: 10px;   // 距离上面10px
	}
	.login_button,.register_button{
		margin-top: 10px;   // 距离上面10px
		justify-content: center;  // 登录或注册字样水平居中
	}
	.login_mobile_input,.login_password_input,.register_mobile_input,.register_code_input,.reg_password_input{
		width: 240px;
		height: 40px;
		border: 2px #C8C7CC solid;   // 设置边框
		border-radius:15px;         // 设置圆角
		padding: 5px 2px 5px 10px;  // 文本框输入内容边距:上右下左
		background-color:skyblue;
	}
	.title{margin: 40rpx 20rpx;}
	/* .title text{text-align: center;font-size: 96rpx;color:indianred;margin-left: -80%} */
	.title text {
	  background: linear-gradient(to right, #ff8177, #ff867a, #ff8c7f, #f99185, #cf556c);
	  -webkit-background-clip: text;
	  -moz-background-clip: text;
	  background-clip: text;
	  color: transparent;
	  font-size: 96rpx;
	
	  text-align: center;
	  margin-left: -40%;
	}
	.content {
		margin-top: 400rpx;  // 主页面距离上面的距离
		display: flex;
		justify-content: center;  // 内容水平居中
		width: 100px;
		margin-left: -30%;
		
		
	}
	.code_button,.refresh_button {
	  display: inline-block;
	  width: 200rpx;
	  height: 80rpx;
	  line-height: 60rpx;
	  margin-top:  3%;
	  text-align: center;
	  background-color: #f3f3f3;
	  color: #666;
	  font-size: 28rpx;
	  border-radius: 5rpx;
	  margin-left: 30rpx;
	  vertical-align: middle;
	  cursor: pointer;
	  border-radius: 10rpx;
	  font-size: 30rpx;
	  justify-content: space-between;
	  margin-left: 2%;
	  color: rosybrown;
	  font-weight: 500;
	}
	.codeContainer {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	
	.code_button.disabled {
	  background-color: #ddd;
	  color: #999;
	  cursor: not-allowed;
	
	}
</style>

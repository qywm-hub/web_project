<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6"
        >面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text
      >
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
    <uni-section title="自定义分隔符" type="line" padding>
      <uni-breadcrumb separator=">" >
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to" >
         <view class="" @tap="_newaddress">{{route.name}}</view> 
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        routes: [
          {
            to: "/pages/index/index",
            name: "首页",
          },
          {
            to: "/pages/log_reg/log_reg/",
			
            name: "登录——注册",
          },
          // {
          //   to: "",
          //   name: "菜单 B",
          // },
        ],
		methods: {
		_newaddress(){
			uni.navigateTo({
				url:'/pages/log_reg/log_reg/',
				success(e) {
					console.log(e)
				}
			})
			
		},
      },
	  }
	  
	  }
	  }
    
  
</script>

<style lang="scss"></style>

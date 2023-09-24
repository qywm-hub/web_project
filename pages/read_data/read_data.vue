
<template>
 	<view class="uni-bg_two">
 	
 	<view class="menu-container" >
 		<view class="menu" >
 		  <view
 		    class="menu-item"
 		    v-for="(item, index) in menuList"
 		    :key="index"
 		    @click="toggleSubmenu(index,$event)"
 		    :class="{ active: currentSubmenuIndex === index }"
 		  >
 		    {{ item.name }}
 		  </view>
 		</view>
 		<view class="submenu" v-show="showSubmenu" :style="submenuStyle">
 		  <view
 		    class="submenu-item"
 		    v-for="(subitem, subindex) in currentSubmenu"
 		    :key="subindex"
 		    @tap="selectSubmenu(subindex)"
 		    :class="{ active: activeSubmenuIndex === subindex }"
 		  >
 		    {{ subitem.name }}
 		  </view>
 		</view>
 	</view>
 	  
 
 	
 		<view class="lbt"> 
 			<view class="swiper-box" style="width: 100%; height: 55%;border-radius: 20rpx;" >
 				<swiper style="width: 100%; height: 100%;" autoplay interval="3000" circular>
 					<swiper-item v-for="(item, index) in imageUrls" :key="index" autoplay=true style="width:100%;height:100%;">
 					<image :src="item.url" class="swiper-image"  style="object-fit: cover;width:100%;height:100%;"/> 
 					<view class="title">{{ item.content }}</view> 
 				</swiper-item>
 				</swiper>
 				
 			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 	export default {
 		components: {},
 		data() {
 			return {
 			
 				  imageUrls: [{
 						
 						url: '/static/lbt/zero.png',
 						content: 'POS机'
 					},
 					{
 						
 						url: '/static/lbt/one.png',
 						content: '二维码探头'
 					},
 					{
 						
 						url: '/static/lbt/two.png',
 						content: '通闸道'
 					},
 					{
 						
 						url: '/static/lbt/three.png',
 						content: 'Wifi信号器'
 					},
 					{
 						
 						url: '/static/lbt/four.png',
 						content: '电梯控制器'
 					},
 					{
 						
 						url: '/static/lbt/three.png',
 						content: 'NFC读取器'
 					}
 				],
 				menuList: [
 				    {
 				      name: "全部服务",
 				      submenu: [
 						  {
 						    name: "新手帮助",
 						    url: "#"
 						  },
 						  {
 						    name: "触碰付款",
 						    url: "#"
 						  },
 						  {
 						    name: "金融服务",
 						    url: "#"
 						  },
 						  {
 						    name: "便民生活",
 						    url: "#"
 						  },
 						  {
 						    name: "购物娱乐",
 						    url: "#"
 						  },
 						  {
 						    name: "医疗健康",
 						    url: "#"
 						  },
 						  {
 						    name: "常用工具",
 						    url: "#"
 						  }
 					  ]
 				    },
 				    {
 				      name: "新手帮助",
 				      submenu: [
 				        {
 				          name: "使用教程",
 				          url: "#"
 				        },
 				        {
 				          name: "注册账号",
 				          url: "#"
 				        },
 				        {
 				          name: "绑定银行卡",
 				          url: "#"
 				        },
 						{
 						  name: "修改密码",
 						  url: "#"
 						}
 					
 				      ]
 				    },
 				    {
 				      name: "触碰付款",
 				      submenu: [
 				        {
 				          name: "添加收款人",
 				          url: "#"
 				        },
 				        {
 				          name: "设置付款限额",
 				          url: "#"
 				        },
 				        {
 				          name: "如何查询付款记录",
 				          url: "#"
 				        }
 				      ]
 				    },
 				    {
 				      name: "金融服务",
 				      submenu: [
 				        {
 				          name: "申请贷款",
 				          url: "#"
 				        },
 				        {
 				          name: "购买基金",
 				          url: "#"
 				        },
 				        {
 				          name: "理财",
 				          url: "#"
 				        }
 				      ]
 				    },
 				    {
 				      name: "便民生活",
 				      submenu: [
 				        {
 				          name: "预约取号",
 				          url: "#"
 				        },
 				        {
 				          name: "办理水电费",
 				          url: "#"
 				        },
 				        {
 				          name: "查询公交线路",
 				          url: "#"
 				        }
 				      ]
 				    },
 				    {
 				      name: "购物娱乐",
 				      submenu: [
 				        {
 				          name: "电影票",
 				          url: "#"
 				        },
 				        {
 				          name: "抽奖",
 				          url: "#"
 				        },
 				        {
 				          name: "优惠券",
 				          url: "#"
 				        }
 				      ]
 				    },
 				    {
 				      name: "医疗健康",
 				      submenu: [
 				        {
 				          name: "在线咨询医生",
 				          url: "#"
 				        },
 				        {
 				          name: "预约挂号",
 				          url: "#"
 				        },
 				        {
 				          name: "查询病历",
 				          url: "#"
 				        }
 				      ]
 				    },
 				    {
 				      name: "常用工具",
 				      submenu: [
 				        {
 				          name: "计算器",
 				          url: "#"
 				        },
 				        {
 				          name: "日历",
 				          url: "#"
 				        },
 				        {
 				          name: "时钟",
 				          url: "#"
 				        }
 				      ]
 				    },
 				  
 				  ],
 				  showSubmenu: false,
 				  currentSubmenu: [],
 				  submenuStyle: {},
 				  currentSubmenuIndex: -1,
 				  activeSubmenuIndex: -1
 				};
 				},
 				
 			
 		
 		onLoad() {},
 		computed: {
 		  activeSubmenuClass() {
 		    return {
 		      active: this.activeSubmenuIndex !== -1
 		    };
 		  }
 		},
 		methods: {
 			 toggleSubMenu(menuItem) {
 			      menuItem.expanded = !menuItem.expanded;
 			    },
 			  
 			change(e) {
 				this.current = e.detail.current
 			},
 			selectStyle(index) {
 				this.dotsStyles = this.dotStyle[index]
 				this.styleIndex = index
 			},
 			selectMode(mode, index) {
 				this.mode = mode
 				this.modeIndex = index
 				this.styleIndex = -1
 				this.dotsStyles = this.dotStyle[0]
 			},
 			clickItem(e) {
 				this.swiperDotIndex = e
 			},
 			onBanner(index) {
 				console.log(22222, index);
 			},
 			toggleSubMenu(index) {
 			    this.menuItems[index].showSubMenu = !this.menuItems[index].showSubMenu;
 			},
 			toSave(){
 				uni.navigateTo({
 				  url:'/pages/save_data/save_data',
 				})	
 			},
 			money(){
 				uni.navigateTo({
 				  url:'/pages/card_from/card_from',
 				})	
 			},
 			toggleSubmenu(index, event) {
 			  const target = event.target;
 			  const x = target.offsetLeft + target.offsetWidth;
 			  const y = target.offsetTop;
 			  this.submenuStyle = {
 			    position: "absolute",
 			    left: `${x}px`,
 			    top: `${y}px`
 			  };
 			
 			  if (this.currentSubmenuIndex === index) {
 			    this.showSubmenu = !this.showSubmenu;
 			  } else {
 			    this.showSubmenu = true;
 			    this.currentSubmenu = this.menuList[index].submenu;
 			    this.currentSubmenuIndex = index;
 			  }
 			},

 			  selectSubmenu(index) {
 			    this.activeSubmenuIndex = index;
 			  }
 			},
 		};
 			
 			
 		
 
 </script>
 
 <style lang="scss">
 .lbt{
 		width:70vw;
 		height:100vh;
 		// background-color: aqua;
 		margin-top: 6%;
 		border-radius: 20rpx;
 		margin-left:20%;	
 }
 
 .lbt .swiper-image {
 	width:70vw;
 	height:100vh;
 	object-fit: cover; 
 }
 .title {
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-50%);
   padding: 10px;
   background-color: lightpink;
   border-radius: 20rpx;
   color: #fff;
   font-size: 30px;
   text-align: center;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
 .swiper-item{object-fit: cover;}
 .sub-menu 
 {
 	 display: flex;
 	 flex-direction: column;
 	 margin-top: 10px;
 	 padding-left: 10px;
 }
 .sub-menu-item 
 {
 	 padding: 5px;
 }
 .menu-container {
   position: absolute;
   padding-top: 150rpx;
   padding-left: 50rpx;
   margin-top: 2%;
   margin-left:-40%;  //手机
  //  margin-left:-80%;  //浏览器
   width: 200rpx;
 }
 .menu-container {
     // position: absolute;
     height: 65%;
 	// background-color: aqua;
 }
 
 .menu {
   display: inline-block;
   margin-top: -50%;
   flex-wrap: wrap; 
   
 }
 
 .menu-item {
   padding: 5px;
   margin-bottom: 40%;
   /* margin-top: 20; */
   border: 1px solid #ccc;
   cursor: pointer;
   background-color: aliceblue;
 }
 .menu-item:hover {
   padding: 5px;
   margin-bottom: 40%;
   /* margin-top: 20; */
   border: 1px solid #ccc;
   cursor: pointer;
   background-color: paleturquoise;
 }
 
 .menu-item.active {
   background-color: #ccc;
   font-size: 40rpx;
   color: greenyellow;
 }
 
 .submenu {
   display:block; /* change this line */
   position: absolute;
   margin-top: 0%;//手机
   // margin-top: -60%;//浏览器
   width: 150px;
   margin-left: 75%;  //手机
  //  margin-left: -170rpx;  //浏览器
   border: 1px solid #ccc;
   background-color: #fff;
 }
 
 .submenu-item {
 
   padding: 10px;
   cursor: pointer;
   border-bottom: 1px solid #ccc; /* add this line */
 }
 
 .submenu-item:last-child {
   border-bottom: none; /* add this block */
 }
 
 .submenu-item.active {
   color: yellowgreen;
   font-size: 40rpx;
   background-color: aqua;
 }
 </style>
 
 
  
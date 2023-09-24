<template>
  <view class="uni-bg_two">
    <view class="card"> 
      <view class="nav" style="display: flex; justify-content: space-between;align-items: center"> 
        <ul> 
          <li v-for="(item, index) in navItems" :key="index">
            <a href="#" :class="{
              a1: item.type === 'red', 
              a2: item.type === 'pink', 
              a3: item.type === 'yellow', 
              a2: item.type === 'green'}" 
              @click="changeIndex(index)">{{ item.name }}</a>
          </li>
        </ul> 
      </view> 
    </view>
    <view class="lbt">
      <view class="swiper-box" style="width: 100%; height: 55%;border-radius: 20rpx;">
        <swiper style="width: 100%; height: 100%;" autoplay interval="3000" circular>
          <swiper-item v-for="(item, index) in imageUrls" :key="index" :autoplay="true" style="width:100%;height:100%;" v-if="index === currentIndex" autoplay=true>
            <image :src="item.url" class="swiper-image" style="object-fit: cover;width:100%;height:100%;"/>
            <!-- <view class="title">{{ item.content }}</view> -->
            <view class="detail">
              
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
	<view class="lbt_descript" >
	<view class="swiper-box" style="width: 100%; height: 55%;border-radius: 20rpx;">
	<swiper style="width: 100%; height: 100%;" autoplay interval="3000" circular>
	<swiper-item v-for="(item, index) in imageUrls" :key="index" :autoplay="true" style="width:100%;height:100%;" v-if="index === currentIndex" autoplay=true>
		
		<view class="">
			<view class="name">{{ item.name }}:{{ item.content }}</view>
			  
			<view class="function">商品描述：</view>
			<view class="line"></view> 
			
			  <view class="description">{{ item.function }}</view>
			  <view class="line"></view> 
			
			  <view class="price">价格: {{ item.price }}</view>
			  <view class="line"></view> 
			
			  <view class="usage">用途: {{ item.usage }}</view>
			  <view class="line"></view> 
			
			  <view class="audience">适合人群: {{ item.audience }}</view>
			  <view class="line"></view> 
		</view>
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
      navItems: [ 
        { name: '智能识别', type: 'red', index: 0 }, 
        { name: '触碰分享', type: 'red', index: 1 }, 
        { name: '蓝牙设备', type: 'green', index: 2 },
        { name: 'RFID', type: 'yellow', index: 3 }, 
        { name: 'Yi-Lock', type: 'yellow', index: 4 }, 
        { name: '城市服务', type: 'green', index: 5 },
        { name: '门禁手环', type: 'red', index: 6 },
        { name: '产品防伪', type: 'red', index: 7 }
      ],
      currentIndex: 0,
      imageUrls: [ 
        { url: '/static/circle/card.png', content: '电子设备', name: '商品1', function: '云链接，即使不带钥匙也能通过手机一键解锁。', price: '56.89元', usage: '门禁系统', audience: '物业 小区 家用' }, 
        { url: '/static/circle/nfc.png', content: '共享设备', name: '商品2', function: '随时随地连接手机和电脑，实时共享界面。', price: '200元', usage: '设备共享', audience: '商用 企业 办公' }, 
        { url: '/static/circle/rfid.png', content: '无线识别技术', name: '商品3', function: '即插即用免驱动', price: '300元', usage: '无线识别和跟踪物体', audience: '身份识别和访问控制 身份识别和访问控制' }, 
        { url: '/static/circle/yi.png', content: 'Yi-Lock', name: '商品4', function: 'Yi-Lock可以用于家庭的门锁，提供更高级别的安全保护。', price: '400元', usage: '客房门锁系统', audience: '家庭 商业 酒店' }, 
        { url: '/static/read/one.png', content: '碰碰砖', name: '商品5', function: '由一些具有磁性的小砖块组成，磁力相互吸附和连接，通过碰撞和接触来实现连接。', price: '500元', usage: '物体的接触和数据传输', audience: '儿童游戏和创造' }, 
        { url: '/static/read/two.png', content: '一卡通服务', name: '商品6', function: '一卡通服务是一种集成了多种功能的智能卡片或移动应用，用于方便用户进行各种支付和身份认证操作', price: '600元', usage: '支付 校园卡 健康医疗 企事业', audience: '学生 职工 市民' },
        { url: '/static/circle/m.png', content: 'M7门禁智能手环', name: '商品7', function: 'M7门禁智能手环可以用作门禁卡，通过近场通信技术（如NFC）与门禁系统进行通信，实现刷卡开门、进出门禁区域等功能。', price: '700元', usage: '身份认证 门禁系统', audience: '学生 职场员工 健身房会员' },
        { url: '/static/circle/ring.png', content: 'NFC智能戒指', name: '商品8', function: 'NFC智能戒指是一种集成了近场通信（NFC）技术的智能戒指设备', price: '800元', usage: '身份认证 门禁系统 支付功能（限制）', audience: '小型活动组织者 移动便利性需求者' }
      ]
    }
  },
  methods: {
    changeIndex(index) { 
      this.currentIndex = index;
    }
  }
}
</script>

<style> 
.card { margin: auto 200rpx; } 
* { list-style: none; text-decoration: none; font-weight: 520; font-family: 微软雅黑; }
.nav>ul { 
  width: 180vh; 
  display: flex; 
  margin-top: -50%;
  border-radius: 20%; 
  background-color: rgb(225, 224, 224); 
  margin-left: -75%;
} 
.nav>ul>li { justify-content: center; align-items: center; text-align: center; width: 100vh; } 
.nav>ul>li>a { 
  text-align: center; 
  line-height: 80rpx;
  font-size: 20px; 
  color: black; 
  display: flex; 
  justify-content: center; 
  width: 100%;
  text-align: center; 
} 
.nav>ul>li>a:hover { color: orange; } 
ul>span { 
  width: 10%; 
  line-height: 50rpx; 
  color: rgb(225, 224, 224);
  font-weight: 600;
  font-size: 24px;
}
.nav>ul>li>.a1 { color: #FF0036; } 
.nav>ul>li>.a1:hover { color: aqua; } 
.nav>ul>li>.a2 { color: rgb(101, 198, 58); } 
.nav>ul>li>.a2:hover { color: yellow; }
.nav>ul>li>.a3 { color: rgb(160, 60, 145); }
.nav>ul>li>.a3:hover { color: coral; }
.nav>ul>li>.a4 { color: rgb(33, 33, 255); }
.nav>ul>li>.a4:hover { color: deeppink; }
.lbt { 
  width: 50vw; 
  /* height: 100vh; */
  margin-top: 6%;
  border-radius: 20rpx; 
  margin-left: -130%;
  /* transform: translateX(-90%); */
} 
.lbt_descript {
  width: 20vw;
  height: 77%;
  margin-top: 4%;
  border-radius: 20px;
  margin-left: -85%;
  font-size: 10px;
  transform: translateX(0%);
  border-bottom: 2px solid blue;
  border-top: 2px solid blue;
  border-left: 2px solid #FF0036;
  border-right: 2px solid #FF0036;
  opacity: 0.7;
  background: linear-gradient(to bottom, pink, #FFC0CB);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}


.lbt .swiper-image { 
  width: 100vw; 
  height: 100vh; 
  object-fit: cover;
} 
.title { 
  position: absolute;
  bottom: 10px; left: 50%; 
  transform: translateX(-50%);
  padding: 10px;
  background-color: hotpink; 
  color: #fff; 
  font-size: 30px; 
  border-radius: 20rpx;
  text-align: center; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
} 
.detail {
  position: absolute; 
  top: 10px;
  left: 10px; 
  background-color: rgba(0, 0, 0, 0.5); 
  color: #fff; 
  padding: 10px; 
  border-radius: 10px; 
  font-size: 14px; 
}
.name { font-weight: bold; margin-bottom: 5px; }
.price { font-size: 20px; margin-bottom: 5px; }
.usage { margin-bottom: 5px; }
.audience { margin-bottom: 5px; }
.swiper-item {
  display: flex;
  flex-direction: column;
}

.name,
.function,
.price,
.usage,
.audience {
  display: flex;
  align-items: center;
  padding: 10px;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 5px 0;
}

</style>


 <template>
	 <view >
	 	<view class="container">
	 	  <view >例如：姓名:张二蛋年龄:29地址：北京海淀区</view>
		  <textarea v-model="text" class="input-field" >姓名:张二蛋年龄:29地址：北京海淀区</textarea>
	 	  <button @click="writeData" class="btn" >写入</button>
	 	  <button @click="readData" class="btn">读取</button>
	 	  <view class="result">
	 	    读取的内容: {{ content }}
	 	    <view v-if="isReadSuccess" class="success-message">读取成功</view>
	 	    <view v-else class="error-message">读取失败</view>
	 	  </view>
	 	</view>
	 </view>
   
 </template>
 
 <script>
	
 export default {
   data() {
     return {
       text: '',
       content: '',
       isReadSuccess: false,
       nfc: null
     };
   },
   methods: {
     async writeData() {
       if (!this.text) {
         alert('请输入要写入的内容');
         return;
       }
 
       if (!this.nfc) {
         await this.initNfc();
       }
 
       try {
         // 创建写入的数据对象
         const record = new NDEFRecord({
           mimeType: 'text/plain',
           data: this.text
         });
         const message = new NDEFMessage([record]);
 
         // 将数据写入 NFC 标签
         await this.nfc.write(message);
         this.showToast('写入成功');
       } catch (error) {
         console.error('写入失败：', error);
         this.showToast('写入失败');
       }
     },
     async readData() {
       if (!this.nfc) {
         await this.initNfc();
       }
 
       try {
         // 监听 NFC 标签读取事件
         this.nfc.onreading = event => {
           const message = event.message;
           const data = message.records[0].data;
           this.content = data;
           this.isReadSuccess = true;
           this.showToast('读取成功');
         };
 
         // 启动监听
         await this.nfc.scan({ keepSessionOpen: true });
       } catch (error) {
         console.error('读取失败：', error);
         this.isReadSuccess = false;
         this.showToast('读取失败');
       }
     },
    async initNfc() {
      try {
        if ('NDEFReader' in window) {
          // 检查浏览器是否支持 Web NFC
          const { state } = await navigator.permissions.query({ name: 'nfc' });
          if (state !== 'granted') {
            alert('请允许使用 NFC 功能');
            return;
          }
    
          // 获取 NFC 标签对象
          this.nfc = new NDEFReader();
          await this.nfc.scan();
    
          console.log('NFC 初始化成功');
        } else {
          alert('当前浏览器不支持 NFC 功能');
        }
      } catch (error) {
        console.error('NFC 初始化失败：', error);
        alert('NFC 初始化失败');
      }
    },
     showToast(message) {
       // 显示提示信息的逻辑
     }
   }
 };
 </script>
 
 <style>
 .container {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   width: 100%;
 }
 
 .input-field {
   width: 100vw;
   height: 100px;
   margin-bottom: 20px;
   padding: 10px;
   /* font-size: 96rpx; */
   text-align: center;
 }
 
 .btn {
   padding: 10px 20px;
   margin-bottom: 10px;
   /* font-size: 96rpx; */
 }
 
 .result {
   font-weight: bold;
 }
 
 .success-message {
   color: green;
 }
 
 .error-message {
   color: red;
 }
 </style> -->
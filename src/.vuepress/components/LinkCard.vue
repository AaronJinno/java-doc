<!-- 
    组件使用指南：通过注解标签传递的props来定义主要的样式和内容。
    image：图片的地址
    height：卡片的高度
    color：卡片标题的颜色
    title：卡片标题的内容
    detail：详细信息的文本
    
    其他样式：
    如果需要多列显示，就给#card添加float，并在最后一个卡片后面添加清除所有浮动的div
    <div style="clear:both"></div>

    如果外面要包裹链接，记得取消链接的样式。
 -->

 
<template>
	<div id="card" :style="cardStyle">
		<div class="main">
			<img class="img" :src="image" :style="imgStyle" no-view/>
			<div class="text">
				<label class="title" :style="titleStyle">{{title}}</label>
				<label class="detail">{{detail}}</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		props: {
			image: {
				type: String,
				// default: "https://file.zhtsu.cn/light-radius.png"
			},
			title: {
				type: String,
				default: "标题"
			},
			detail: {
				type: String,
				default: "这里是详细信息"
			},
			height: {
				type: String,
                // default: "100"
                default:"80"
			
        
			},
			color: {
				type: String,
				// default: "#456D8A"
			}
		},
		data() {
			return {
				ht: this.height,
				cardStyle: "",
				titleColor: this.color,
				titleStyle: "",
				imgStyle: ""
			}
		},
		mounted() {
			this.cardStyle = `width: ${3.2 * this.ht}px; height: ${this.ht}px;`
			// this.imgStyle = `width: ${this.ht - 20}px; height: ${this.ht - 20}px;`
			this.imgStyle = `width: ${this.ht - 35}px; height: ${this.ht - 35}px;`
            this.titleStyle = `color: ${this.titleColor}`
		}
	};
</script>

<style scoped lang=scss>
    #card{
       margin-bottom:50px;
       margin-right: 30px;
       float:left;
    }

	.main {
		position: relative;
		width: 100%;
		height: 100%;
		// background-color: white;
		background: rgba(255, 255, 255, 0.5);
		// box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
		border-radius: 10px;
		margin: 10px;
	}
	.main:hover {
		background: rgba(255, 255, 255, 0.65);
		/* transform: scale(102%, 102%); */
        transform: scale(105%, 105%);
		box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
        .title{
            color:red;
        }
	}
	.img {
		position: relative;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 10px;
        // margin-right:10px;
		float: left;
	}
	.text {
		position: relative;
		/* top: 50%; */
        top: 45%; 
		transform: translateY(-50%);
		width:185px;
		float:right;

	}
	.title {
		display: block;
		/* font-size: 24px; */
        font-size: 1.2rem;
		color: #010c15;
		margin: 5px;
		 font-weight: 700;
		/* text-shadow: 1px 1px 1px grey; */
	}
	.detail {
		display: block;
		/* font-size: 15px; */
        font-size: 0.8rem;
		display: block;
		margin: 5px;
		// color: #7b7b7b;
		color: #6c757d;
		
		width:90%;
		//单行隐藏
		white-space: nowrap; 
 		overflow: hidden;
 		text-overflow: ellipsis;

		

		//以下代码用于多行隐藏并显示...
        // overflow:hidden;
		// text-overflow: ellipsis;
		// display: -webkit-box;
		// -webkit-line-clamp: 2;
		// -webkit-box-orient: vertical;

	}
</style>

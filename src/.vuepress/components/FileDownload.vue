<!-- 
    组件使用指南：通过注解标签传递的props来定义主要的样式和内容。
    height：卡片的高度
    color：卡片标题的颜色
    title：卡片标题的内容
    其他样式：
    如果需要多列显示，就给#card添加float，并在最后一个卡片后面添加清除所有浮动的div
    <div style="clear:both"></div>

    如果外面要包裹链接，记得取消链接的样式。
 -->

 
 <template>
	<div id="card" :style="cardStyle">
		<div class="main">
			<!-- <img class="img" :src="image" :style="imgStyle" no-view/> -->
			<div class="text">
				<label class="title" :style="titleStyle">{{title}}</label>
				<!-- <label class="detail">{{detail}}</label> -->
			</div>
			<label class="downicon">
				<svg t="1680973228587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11427" width="25" height="25"><path d="M137.90246 0.00041a48.573421 48.573421 0 0 0-35.589106 15.293433A53.964778 53.964778 0 0 0 87.0404 50.934149V968.345622a48.706541 48.706541 0 0 0 15.272954 35.640306 49.97118 49.97118 0 0 0 35.589106 15.293434h746.336982a48.639981 48.639981 0 0 0 35.589105-15.293434 50.37054 50.37054 0 0 0 15.272954-35.640306V288.717094L646.727857 0.00041H137.90246z" fill="#5ACC9B" p-id="11428"></path><path d="M935.101501 288.717094h-237.445025c-27.822069-0.6656-50.22718-23.075831-50.928619-50.93374V0.00041l288.373644 288.716684z" fill="#BDEBD7" p-id="11429"></path><path d="M499.184876 692.992132a19.046392 19.046392 0 0 0 11.888635 5.058558 16.855033 16.855033 0 0 0 11.878395-5.053438l150.93242-144.358342a7.920637 7.920637 0 0 0 1.725439-9.374716 8.232957 8.232957 0 0 0-7.633917-5.119998H578.933964V389.852414a17.341433 17.341433 0 0 0-16.998394-16.957434H460.206331a17.341433 17.341433 0 0 0-16.998393 16.957434v144.291782h-89.036764a7.439357 7.439357 0 0 0-7.639037 5.119998 9.251836 9.251836 0 0 0 1.725439 9.369596l150.9273 144.363462z m223.89751 70.487012H299.059516a16.993273 16.993273 0 0 0-15.600634 8.171517 17.044473 17.044473 0 0 0 0 17.633273 16.993273 16.993273 0 0 0 15.600634 8.171517h424.03311a17.013753 17.013753 0 0 0 15.933434-16.988154 17.013753 17.013753 0 0 0-15.933434-16.988153z" fill="#FFFFFF" p-id="11430"></path></svg><br>

					<label class="cd">点击下载</label>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FileDownload",
		props: {
			image: {
				type: String,
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
			// this.imgStyle = `width: ${this.ht - 35}px; height: ${this.ht - 35}px;`
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
		background-color: white;
		background: rgba(255, 255, 255, 0.5);
		box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 35%);
		border-radius: 10px;
		margin: 10px;
	}
	.main:hover {
		background: rgba(255, 255, 255, 0.65);
		/* transform: scale(102%, 102%); */
        transform: scale(105%, 105%);
		box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
        // .title{
        //     color:red;
        // }
	}
	.text {
		position: relative;
		top: 50%; 
		transform: translateY(-50%);
		width:170px;
		float:left;
	}
	.title {
		display: block;
        font-size: 0.9rem;
		color: #010c15;
		margin: 5px;
		font-weight: 400;
		margin-left: 20px;
		float:left;
		text-align:center;
	
	}
	.downicon{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 30px;
        // margin-right:10px;
		float:right;
	}
	svg{
		margin-left:15px;
	}
	.cd{
		font-size:0.8rem;
		color:#010c15;
	}
</style>

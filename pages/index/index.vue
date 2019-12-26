<template>
	<view class="index-container">
		<!-- <image class="background-head-image" src="../../static/indexhead.png" mode="aspectFill"></image> -->
		<view class="index-header" style="background-color: #007AFF;">
			<view class="index-header-tab">
				<wuc-tab :tab-list="tabNameList" :tabCur.sync="tabNumber" tab-class="text-gray" select-class="text-white" @change="tabChange"></wuc-tab>
			</view>
			<!-- 实际营收 -->
			<view class="index-header-income">
				<view class="index-header-income-number">
					20
				</view>
				<view class="index-header-income-desc">
					实际营收金额(元)
				</view>
			</view>

			<view class="index-header-items">
				<view class="index-header-item">
					<view class="index-header-item-name">
						订单数量
					</view>
					<view class="index-header-item-number">
						11
					</view>
				</view>
				<view class="index-header-item">
					<view class="index-header-item-name">
						销售额(元)
					</view>
					<view class="index-header-item-number">
						11
					</view>
				</view>

			</view>

		</view>
		<!-- 中间显示 -->
		<view class="index-middle">
			<view class="card">
				<view class="car-inner bg-gradual-blue shadow-warp">
					<view class="card-info">
						<view class="card-info-name">
							设备总数
						</view>
						<view class="card-info-number">
							{{deviceInfo.devicesNumber}}
						</view>
					</view>
				</view>
			</view>
			<view class="card ">
				<view class="car-inner bg-gradual-green shadow-warp">
					<view class="card-info">
						<view class="card-info-name">
							设备在线数
						</view>
						<view class="card-info-number">
							{{deviceInfo.onlineDevicesNumber}}
						</view>
					</view>
				</view>
			</view>
			<view class="card ">
				<view class="car-inner bg-gradual-red shadow-warp">
					<view class="card-info">
						<view class="card-info-name">
							缺货设备数
						</view>
						<view class="card-info-number">
							{{deviceInfo.needReplenishDevicesNumber}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 通知 -->
		<view class="index-message">
			<uni-notice-bar showIcon="true" single="true" text="用户abcd申请退款"></uni-notice-bar>
		</view>
		<!-- 底部功能分类 -->
		<view class="index-bottom">
			<!-- 基础功能 -->
			<view class="index-bottom-items">
				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/shebeiguanli.png" mode="aspectFill"></image>
					</view>
					<text>设备管理</text>
				</view>
				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/yingyongguanli.png" mode="aspectFill"></image>
					</view>
					<view>
						<text>商品管理</text>
					</view>
				</view>

				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/dingdanguanli.png" mode="aspectFill"></image>
					</view>
					<text>订单管理</text>
				</view>

				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/yuanqushezhi.png" mode="aspectFill"></image>
					</view>
					<text>场地管理</text>
				</view>

			</view>
			<!-- 高级功能 -->
			<view class="index-bottom-items">
				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/renyuanguanli.png" mode="aspectFill"></image>
					</view>
					<text>人员管理</text>
				</view>
				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/pinpaiguanli.png" mode="aspectFill"></image>
					</view>
					<text>品牌管理</text>
				</view>

				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/buhuoguanli.png" mode="aspectFill"></image>
					</view>
					<text>补货管理</text>
				</view>

				<view class="index-bottom-item">
					<view>
						<image class="index-icon" src="../../static/index/ziyuanxhdpi.png" mode="aspectFill"></image>
					</view>
					<text>设备调试</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import UniIcon from "@/components/uni-icons/uni-icons.vue"
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				title: 'Hello',
				//tab栏标题
				tabNameList: [{
						name: '今日'
					}, {
						name: '本周'
					},
					{
						name: '本月'
					}
				],
				tabNumber: 0,
				//页面标识
				PageCur: 'index'
			}
		},
		components: {
			UniIcon,
			WucTab,
			uniNoticeBar
		},
		onLoad() {
			//设置通知红点
			uni.setTabBarBadge({
			  index: 2,
			  text: '1'
			})

		},
		onPullDownRefresh() {
			console.log('下拉刷新了');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {

		},
		methods: {
			//时间tab被点击
			tabChange(index) {
				switch (index) {
					case 0:
						//查询今日的销售额
						break
					case 1:
						//查询本周的销售额
						break
					case 2:
						//查询本月的销售额
						break
				}
			}
		},
		computed: {
			...mapState(['deviceInfo'])
		}
	}
</script>

<style lang="scss" scoped>
	.background-head-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.index-icon {
		width: 64rpx;
		height: 64rpx;
	}

	.index-header {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		position: relative;
		top: 0;
		left: 0;

		.index-header-tab {
			display: flex;
			justify-content: center;
		}

		.index-header-income {
			margin-top: 50rpx;
			display: flex;
			flex-direction: column;
			text-align: center;
			color: #FFFFFF;

			.index-header-income-number {
				font-size: 60rpx;
			}

			.index-header-income-desc {
				font-size: 20rpx;
			}
		}

		.index-header-items {
			display: flex;
			justify-content: space-between;
			padding-left: 25rpx;
			padding-right: 25rpx;
			margin-top: 30rpx;


			.index-header-item {
				text-align: center;
				color: #FFFFFF;
				font-size: 24rpx;

				.index-header-item-number {
					font-size: 30rpx;
				}
			}
		}
	}



	.index-middle {
		display: flex;
		justify-content: space-between;
		padding-bottom: 25rpx;
		border-bottom: solid 1rpx #DDDDDD;
		margin-top: 20rpx;

		.card {
			width: 33%;
			padding: 25rpx;

			.car-inner {
				padding: 15rpx;
				border-radius: $uni-border-radius-lg;
			}

			.card-info {
				text-align: center;
				color: #FFFFFF;

				.card-info-name {
					font-size: 25rpx;
				}

				.card-info-number {
					font-size: 30rpx;
				}

			}
		}
	}

	.index-message {
		padding: 10rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		border-bottom: solid 1rpx #DDDDDD;
	}

	.index-bottom {
		margin-top: 40rpx;
		background-color: #1CBBB4;

		.index-bottom-items {
			display: flex;
			flex-direction: row;
			width: 100%;

			.index-bottom-item {
				background-color: #FFFFFF;
				width: 25%;
				padding: 25rpx;
				display: flex;
				flex-direction: column;
				text-align: center;
				justify-content: center;
				color: #AAAAAA;
				font-size: 20rpx;

				text {
					margin-top: 5rpx;
				}
			}
		}


	}
</style>

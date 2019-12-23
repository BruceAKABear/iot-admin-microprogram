<template>
	<view class="index-container">
		<view class="index-header">
			<uni-icon type="email" size="40"></uni-icon>

			<view class="index-header-tab">
				<wuc-tab :tab-list="tabNameList" :tabCur.sync="tabNumber" tab-class="text-white" select-class="text-orange" @change="tabChange"></wuc-tab>
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
		<view class="index-middle">
			<view class="card">
				<view class="car-inner bg-gradual-blue shadow-warp">
					<view class="card-info">
						<view class="card-info-name">
							设备总数
						</view>
						<view class="card-info-number">
							11
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
							11
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
							11
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="index-message">
			<uni-icon type="info" size="40" color="brown"></uni-icon>
			<view class="index-message-message">
				<text>
					这是一则很长很长的测试通知这是一则很长很长的测试通知这是一则很长很长的测试通知这是一则很长很长的测试通知这是一则很长很长的测试通知这是一则很长很长的测试通知
				</text>
			</view>
		</view>
		<view class="index-bottom">
			<!-- 基础功能 -->
			<view class="index-bottom-items">
				<view class="index-bottom-item">
					<uni-icon type="gear" size="60" color="#007AFF"></uni-icon>
					<text>设备管理</text>
				</view>
				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>商品管理</text>
				</view>

				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>订单管理</text>
				</view>

				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>场地管理</text>
				</view>

			</view>
			<!-- 高级功能 -->
			<view class="index-bottom-items">
				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>用户管理</text>
				</view>
				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>品牌管理</text>
				</view>

				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>补货管理</text>
				</view>

				<view class="index-bottom-item">
					<uni-icon type="contact" size="60" color="#007AFF"></uni-icon>
					<text>设备调试</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import UniIcon from "@/components/uni-icons/uni-icons.vue"
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
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
			WucTab
		},
		onLoad() {

		},
		methods: {
			//时间tab被点击
			tabChange(index) {
				switch (index) {
					case 0:
						break
					case 1:
						break
					case 2:
						break
				}
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}

		}
	}
</script>

<style lang="scss" scoped>
	.index-header {
		background-color: #0086B3;
		padding-top: 30rpx;
		padding-bottom: 30rpx;

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
		margin-top: 40rpx;

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
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		padding-left: 10rpx;
		display: flex;
		border-bottom: solid 1rpx #DDDDDD;
		align-items: center;

		.index-message-message {
			margin-left: 10rpx;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			font-size: $uni-font-size-sm;
			color: #BBBBBB;

		}
	}

	.index-bottom {
		margin-top: 20rpx;
		background-color: #1CBBB4;

		.index-bottom-items {
			display: flex;
			flex-direction: row;
			width: 100%;

			.index-bottom-item {
				background-color: #FFFFFF;
				width: 25%;
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				text-align: center;
				color: #AAAAAA;
				font-size: 20rpx;

				text {
					margin-top: 5rpx;
				}
			}
		}


	}
</style>

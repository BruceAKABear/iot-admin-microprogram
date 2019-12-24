<template>
	<view class="tongji-container">
		<view class="tongji-header">

		</view>
		<view class="tongji-middle">
			<view class="card-items">
				<view class="card-item">
					<view class="card-item-inner shadow-warp shadow-lg">
						<view>
							<image src="../../static/tongji/zhifufangshi.png" mode="aspectFill" style="width: 64rpx;height: 64rpx;"></image>
						</view>
						支付方式统计
					</view>
				</view>
				<view class="card-item">
					<view class="card-item-inner shadow-warp shadow-lg">
						<view>
							<image src="../../static/index/shebeiguanli.png" mode="aspectFill" style="width: 64rpx;height: 64rpx;"></image>
						</view>
						设备类型统计
					</view>
				</view>
			</view>
			<view class="card-items">
				<view class="card-item">
					<view class="card-item-inner shadow-warp shadow-lg">
						<view>
							<image src="../../static/tongji/zaixian.png" mode="aspectFill" style="width: 64rpx;height: 64rpx;"></image>
						</view>
						在线率统计
					</view>
				</view>
				<view class="card-item">
					<view class="card-item-inner shadow-warp shadow-lg">
						<view>
							<image src="../../static/tongji/changdi.png" mode="aspectFill" style="width: 64rpx;height: 64rpx;"></image>
						</view>
						场地统计
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.tongji-header {
		background-color: #007AFF;
		width: 100%;
		height: 400rpx;
	}

	.tongji-middle {
		.card-items {
			display: flex;
			flex-direction: row;

			.card-item {
				width: 50%;
				padding: 50rpx;

				.card-item-inner {
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					padding: 20rpx;
					background-color: #FFFFFF;
					border-radius: $uni-border-radius-lg;
				}
			}

		}

	}
</style>

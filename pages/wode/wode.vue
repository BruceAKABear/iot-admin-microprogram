<template>
	<view>
		<view class="wode-header">
			<view class="wode-header-pic">
				<image src="../../static/wode/wode.jpg" mode=""></image>
				<text>大熊熊</text>
			</view>


		</view>
		<view class="wode-body">
			<uni-list>
				<uni-list-item title="通知" :show-extra-icon="true" :show-badge="true" :badge-text="10" :extra-icon="{color: '#4cd964',size: '22',type: 'email'}"></uni-list-item>
				<uni-list-item title="对账单" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'list'}"></uni-list-item>
				<uni-list-item title="修改密码" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'gear'}"></uni-list-item>
				<uni-list-item title="退出" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'undo'}"></uni-list-item>
				<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
			</uni-list>
		</view>

	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			uniList,
			uniListItem
		}
	}
</script>

<style lang="scss">
	.wode-header {
		background-color: #007AFF;
		height: 400rpx;

		.wode-header-pic {
			position: absolute;
			left: 50%;
			top: 10%;
			transform: translate(-50%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			color: #FFFFFF;

			image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 100rpx;
			}

			text {
				margin-top: 15rpx;
				font-size: 30rpx;
			}
		}
	}

	.wode-body {
		margin-top: 20rpx;
	}
</style>

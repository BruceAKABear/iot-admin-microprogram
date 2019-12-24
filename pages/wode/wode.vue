<template>
	<view>
		<view class="wode-header">


		</view>
		<view class="wode-body">
			<uni-list>
			    <uni-list-item title="消息" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    <uni-list-item title="修改密码" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			    <uni-list-item title="退出" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
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
	}
	.wode-body{
		margin-top: 20rpx;
	}
</style>

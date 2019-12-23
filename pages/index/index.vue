<template>
	<view class="index-container">
		<dash-board v-if="PageCur=='index'"></dash-board>
		<!-- 底部tabbar -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" data-cur="index" @click="NavChange">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/index' + [PageCur=='index'?'active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='index'?'text-blue':'text-gray'">首页</view>
			</view>
			<view class="action" data-cur="tongji" @click="NavChange">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/tongji' + [PageCur == 'tongji'?'active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='tongji'?'text-blue':'text-gray'">统计</view>
			</view>
			<view class="action" data-cur="tongzhi" @click="NavChange">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/tongzhi' + [PageCur == 'tongzhi'?'active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='tongzhi'?'text-blue':'text-gray'">通知</view>
			</view>
			<view class="action" data-cur="wode" @click="NavChange">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/wode' + [PageCur == 'wode'?'active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='wode'?'text-blue':'text-gray'">我的</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//页面标识
				PageCur: 'index'
			}
		},
		onLoad() {

		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}

		}
	}
</script>

<style lang="scss" scoped>

</style>

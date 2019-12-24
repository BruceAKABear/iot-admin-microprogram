<template>
	<view>
		<view class="message-tab">
			<wuc-tab :tab-list="tabNameList" :textFlex="true" :tabCur.sync="tabNumber" tab-class="text-gray" select-class="text-black"
			 @change="tabChange"></wuc-tab>
		</view>
		<view class="message-body">
			<swiper :current="tabNumber" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)"
			 indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
				<swiper-item>
					123
				</swiper-item>
				<swiper-item>
					abc
				</swiper-item>
				<swiper-item>
					cdf
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	export default {
		data() {
			return {
				tabNameList: [{
						name: '用户反馈'
					}, {
						name: '系统消息'
					},
					{
						name: '审核消息'
					}
				],
				tabNumber: 0
			}
		},
		components: {
			WucTab
		},
		methods: {
			tabChange(e) {
				this.tabNumber = e
			},
			swiperChange(e) {
				this.tabNumber = e.detail.current
			}
		}
	}
</script>

<style lang="scss">
	.message-tab {
		display: flex;
		justify-content: space-between;

		wuc-tab {
			width: 100%;
		}
	}
	.message-body{
		swiper{
			height: 700rpx;
		}
	}
</style>

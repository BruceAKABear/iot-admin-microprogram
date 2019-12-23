<template>
	<!-- 登录容器 -->
	<view class="login-container">
		<!-- 登录容器头部 -->
		<view class="login-header">
			<image src="../../static/loginhed.png" mode=""></image>
			<!-- 登录页面头部logo -->
			<view class="login-header-logo">

			</view>
		</view>
		<!-- 登录体部 -->
		<view class="login-body">
			<!-- tab组件 -->
			<view class="login-body-header">
				<wuc-tab :tab-list="tabNameList" :tabCur.sync="tabNumber"></wuc-tab>
			</view>
			<!-- swiper -->
			<view class="login-body-main">
				<swiper :current="tabNumber" duration="200" @change="swiperChange">
					<swiper-item>
						<view class="login-use-usernamepassword">
							<view class="login-use-usernamepassword-username">
								<uni-icon type="phone" size="40" class=""></uni-icon>
								<input type="number" v-model="username" value="" placeholder="请输入您的手机号" />
							</view>
							<view class="login-use-usernamepassword-password">
								<uni-icon type="locked" size="40"></uni-icon>
								<input type="password" v-model="password" placeholder="请输入您的密码" />
							</view>
							<view class="login-use-usernamepassword-button">
								<button type="primary" @tap="doUsernamePasswordLogin">登录</button>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="login-use-phonenumber">
							<view class="login-use-phonenumber-phonenumber">
								<uni-icon type="phone" size="40"></uni-icon>
								<input type="number" v-model="phoneUmber" value="" placeholder="请输入您的手机号" />
								<button size="mini" type="primary" @tap="getValidCode">获取验证码</button>
							</view>
							<view class="login-use-phonenumber-validcode">
								<uni-icon type="locked" size="40"></uni-icon>
								<input type="number" v-model="validcode" placeholder="请输入您的密码" />
							</view>
							<view class="login-use-phonenumber-button">
								<button type="primary" @tap="doUsernamePasswordLogin">登录</button>
							</view>

						</view>
					</swiper-item>
				</swiper>

			</view>

		</view>

		<!-- 登录页面底部 -->
		<view class="login-foot">
			<!-- 加盟信息组件 -->
			<join-us></join-us>
		</view>
	</view>
</template>

<script>
	import UniIcon from "@/components/uni-icons/uni-icons.vue"
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import JoinUs from '../../components/join-us/join-us.vue'
	export default {
		data() {
			return {
				// 默认上来是0,代表账号密码登录
				tabNumber: 0,
				//tab栏标题
				tabNameList: [{
					name: '账号密码登录'
				}, {
					name: '手机验证码登录'
				}],
				username: '',
				password: '',
				phoneUmber: '',
				validcode: ''
			}
		},
		components: {
			WucTab,
			JoinUs,
			UniIcon
		},
		methods: {
			//监听swiper改变修改tab
			swiperChange(e) {
				this.tabNumber = e.detail.current
			},
			//用户名密码登录
			doUsernamePasswordLogin() {
				if (this.phoneUmber === '' || this.password === '') {
					uni.showModal({
						title: '',
						content: '请将信息填写完整后登录',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					})
				} else {


				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-header {
		width: 100%;

		image {
			width: 100%;
		}
	}

	.login-body {
		margin-top: 50rpx;
		font-size: 28rpx;

		.login-body-header {
			display: flex;
			justify-content: center;
		}

		.login-body-main {
			margin-top: 50rpx;

			swiper {
				width: 650rpx;
				height: 400rpx;
				position: absolute;
				left: 50%;
				transform: translate(-50%);
			}

			.login-use-usernamepassword {
				.login-use-usernamepassword-username {
					border-bottom: solid 3rpx #BBBBBB;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					display: flex;
					align-items: center;

					input {
						margin-left: 20rpx;
					}
				}

				.login-use-usernamepassword-password {
					border-bottom: solid 3rpx #BBBBBB;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					display: flex;
					align-items: center;

					input {
						margin-left: 20rpx;
					}
				}

				.login-use-usernamepassword-button {
					margin-top: 60rpx;
				}
			}

			.login-use-phonenumber {
				.login-use-phonenumber-phonenumber {
					border-bottom: solid 3rpx #BBBBBB;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					display: flex;
					align-items: center;

					input {
						margin-left: 20rpx;
					}

					button {
						margin-right: 0;
					}
				}

				.login-use-phonenumber-validcode {
					border-bottom: solid 3rpx #BBBBBB;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					display: flex;
					align-items: center;

					input {
						margin-left: 20rpx;
					}
				}

				.login-use-phonenumber-button {
					margin-top: 60rpx;
				}

			}
		}
	}
</style>

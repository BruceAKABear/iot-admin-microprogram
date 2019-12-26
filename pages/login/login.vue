<template>
	<!-- 登录容器 -->
	<view class="login-container">
		<!-- 登录容器头部 -->
		<view class="login-header">
			<!-- 登录页面头部logo -->
			<view class="login-header-logo">

			</view>
		</view>
		<!-- 登录体部 -->
		<view class="login-body">
			<!-- tab组件 -->
			<view class="login-body-header">
				<wuc-tab :tab-list="tabNameList" :tabCur="tabNumber" @change="handleTabChange"></wuc-tab>
			</view>
			<!-- swiper -->
			<view class="login-body-main">
				<swiper :current="tabNumber" duration="200" @change="swiperChange">
					<swiper-item>
						<view class="login-use-usernamepassword ">
							<view class="login-use-usernamepassword-username ">
								<text class="lg text-gray cuIcon-mobile"></text>
								<input type="number" v-model="formUsernameAndPassword.username" value="" placeholder="请输入您的手机号" />
							</view>
							<view class="login-use-usernamepassword-password ">
								<text class="lg text-gray cuIcon-lock"></text>
								<input type="password" v-model="formUsernameAndPassword.password" placeholder="请输入您的密码" />
							</view>
							<view class="login-use-usernamepassword-button  flex flex-direction">
								<button class="cu-btn bg-blue lg" @tap="doUsernamePasswordLogin">登录</button>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="login-use-phonenumber">
							<view class="login-use-phonenumber-phonenumber ">
								<text class="lg text-gray cuIcon-mobile"></text>
								<input type="number" v-model="phoneNumber" value="" placeholder="请输入您的手机号" />
								<button size="mini" type="primary" @tap="getValidCode" :disabled="!canGetValidCode">获取验证码</button>
							</view>
							<view class="login-use-phonenumber-validcode ">
								<text class="lg text-gray cuIcon-lock"></text>
								<input type="number" v-model="validcode" placeholder="请输入验证码" />
							</view>
							<view class="login-use-phonenumber-button  flex flex-direction">
								<button class="cu-btn bg-blue lg" @tap="doPhoneValidCodeLogin">登录</button>
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
	import {
		hex_md5
	} from '../../utils/index.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
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
				formUsernameAndPassword: {},
				username: '',
				password: '',
				phoneNumber: '',
				//验证码
				validcode: '',
				//获取到的验证码
				validcodeGeted: '123456',
				//是否可以获取验证码标识
				canGetValidCode: true,
				//重新获取验证码timmerid
				resetCanGetValidCodeTimoutId: null,

			}
		},
		components: {
			WucTab,
			JoinUs,
			UniIcon
		},
		methods: {
			...mapMutations(['setAccountInfo', 'setDeviceInfo']),
			handleTabChange(e) {
				if (this.tabNumber == e) {
					return
				} else {
					console.log(e)
					this.tabNumber = e
				}
			},
			//监听swiper改变修改tab
			swiperChange(e) {
				this.tabNumber = e.detail.current
			},
			//用户名密码登录
			async doUsernamePasswordLogin() {
				if (this.formUsernameAndPassword.username === '' || this.formUsernameAndPassword.password === '') {
					uni.showToast({
						title: '请将信息填写完整',
						icon: 'none',
						mask: true,
						duration: 1500
					})
				} else {
					if (!(/^1[3456789]\d{9}$/.test(this.formUsernameAndPassword.username))) {
						uni.showToast({
							title: '手机号码格式错误',
							icon: 'none',
							mask: true,
							duration: 1500
						})
					} else {
						let encrPass = hex_md5(this.formUsernameAndPassword.password)
						this.formUsernameAndPassword.password = encrPass
						let res = await this.$api.login(this.formUsernameAndPassword)
						if (res.data.success) {
							let realdata = res.data.data
							let accountInfo = {}
							accountInfo.id = realdata.userInfo.id
							accountInfo.phoneNumber = realdata.userInfo.mobile
							accountInfo.name = realdata.userInfo.nickname
							this.setAccountInfo(accountInfo)
							let timeNow = new Date().getTime()
							//查询设备信息
							let params = {}
							params.mctId = realdata.brandInfo.mct.id
							params.startTime = timeNow
							params.endTime = timeNow
							let resNum = await this.$api.countDeviceNumber(params)
							if (resNum.data.success) {
								let deviceInfo = {}
								deviceInfo.devicesNumber = resNum.data.data.deviceCount.totalCount
								deviceInfo.onlineDevicesNumber = resNum.data.data.deviceCount.totalOnline
								deviceInfo.needReplenishDevicesNumber = resNum.data.data.deviceCount.totalOnline
								this.setDeviceInfo(deviceInfo)
							}

							uni.showToast({
								title: '登录成功',
								icon: 'success',
								mask: true,
								duration: 2000,
								success() {
									uni.reLaunch({
										url: '../index/index'
									})
								}
							})
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								mask: true,
								duration: 1500
							})
						}

					}


				}
			},
			//获取验证码方法
			getValidCode() {
				//校验手机号输入及格式正确
				if (this.phoneNumber != '' && (/^1[3456789]\d{9}$/.test(this.phoneNumber))) {
					this.canGetValidCode = false
					this.resetCanGetValidCode()
					uni.showToast({
						title: '验证码已发送',
						mask: true,
						duration: 1500
					})
				} else {
					uni.showToast({
						title: '手机号不正确',
						icon: 'none',
						mask: true,
						duration: 1500
					});
				}

			},
			resetCanGetValidCode() {
				var that = this
				that.resetCanGetValidCodeTimoutId = setTimeout(function() {
					that.canGetValidCode = true
				}, 90000)
			},
			doPhoneValidCodeLogin() {
				if (this.phoneNumber != '' && (/^1[3456789]\d{9}$/.test(this.phoneNumber)) && this.validcode != '' && this.validcodeGeted ===
					this.validcode) {
					//请求手机验证码
					if (this.validcode === '123456') {
						//清除timeout
						clearTimeout(this.resetCanGetValidCodeTimoutId)
						uni.reLaunch({
							url: '../index/index'
						})
					}
				} else {
					uni.showToast({
						title: '手机号或验证码错误',
						mask: true,
						duration: 1500
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-header {
		width: 100%;
		height: 400rpx;
		background-color: #007AFF;

		image {
			width: 100%;
		}
	}

	.login-body {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		font-size: 30rpx;


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
				swiper-item {
					height: 400rpx;
				}
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

					text {
						font-size: 40rpx;
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

					text {
						font-size: 40rpx;
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

					text {
						font-size: 40rpx;
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

					text {
						font-size: 40rpx;
					}
				}

				.login-use-phonenumber-button {
					margin-top: 60rpx;
				}

			}
		}
	}
</style>

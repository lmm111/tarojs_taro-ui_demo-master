import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtIcon, AtFab, AtAvatar, AtBadge, AtCountdown, AtCurtain, AtTimeline, AtCalendar, } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
	constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      timeLine:[
		    { title: '刷牙洗脸', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock',color:'red' }, 
		    { title: '吃早餐' }, 
		    { title: '上班' }, 
		    { title: '睡觉' }
		  ],
    }
  }
	
  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  
  onClose () {
    this.setState({
      isOpened: false
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
	
	onButtonClick () { 
		console.log(123)
	}
	
	onTimeUp () {
		Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
   })
	}
	
	onGoListPage () {
		Taro.navigateTo({ 
		  url: '/pages/list/list?id=2&type=test'
		})
	}

  render () {
    return (
      <View className='index'>     
        <Text>Hello world!</Text>
        
        <View className='at-icon at-icon-user'></View>
        
        <AtButton type='secondary' size='normal' onClick={this.onGoListPage.bind(this)}>跳转列表页</AtButton>
        
        <AtFab onClick={this.onButtonClick.bind(this)}>
				  <Text className='at-fab__icon at-icon at-icon-menu'></Text>
				</AtFab>
				
				<AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
				
				<AtBadge value={101} maxValue={99}>
				  <AtButton size='small'>按钮</AtButton>
				</AtBadge>
				<br/>		
				<AtCountdown
//	        format={{ hours: ':', minutes: ':', seconds: '' }}
	        seconds={3}
	        onTimeUp={this.onTimeUp.bind(this)}
	        isCard
	        isShowDay
	      />
				
				<AtCurtain
	        isOpened={this.state.isOpened}
	        onClose={this.onClose.bind(this)}
	        closeBtnPosition='top-right'
	      >
	        <Image
	          style='width:100%;height:250px'
	          src='https://fscstg.oss-cn-shenzhen.aliyuncs.com/partners/c7e58cf7-2900-4bc8-8c73-872cc11bb289/3607032c42e366b6473e806edd89402f.jpg?Expires=2147454846&OSSAccessKeyId=LTAIqM66JMh6LIjZ&Signature=2jsR38FRyfs6sp86Rhv/Zbfh4dk%3D'
	        />
	      </AtCurtain>
	      <AtButton
	      	type='secondary'
	        onClick={this.handleChange.bind(this)}>
	        右上关闭幕帘
	      </AtButton>
				
				<AtTimeline
					pending
				  items={this.state.timeLine}
				>
				</AtTimeline>
				
				<AtCalendar />
				
      </View>
    )
  }
}

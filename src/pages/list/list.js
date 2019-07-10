import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

export default class List extends Component {
	config = {
    navigationBarTitleText: '列表'
  }
	constructor () {
    super(...arguments)
    this.state = {
      list:[
		    { title: '刷牙洗脸' }, 
		    { title: '吃早餐' }, 
		    { title: '上班' }, 
		    { title: '睡觉' }
		  ],
    }
  }
	handleClick () {
		console.log(this)
	}
	
	componentWillMount () {
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
	
	render () {
	 	return (
	 		<View>
	 			<Text>Hello world!</Text>
	 			<AtList>
				  <AtListItem title='标题文字' onClick={this.handleClick} note='测试描述'/>
				  <AtListItem title='标题文字' arrow='right' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'/>
				  <AtListItem title='标题文字' isSwitch/>
				  <AtListItem title='禁用状态' disabled extraText='详细信息'/>
				</AtList>
	 		</View>
	 		
	 	)
	 }
}
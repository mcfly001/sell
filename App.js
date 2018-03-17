/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
	AppRegistry, // App注册
	Platform,
	StyleSheet,
	Text,
	View, // 视图组件
	Image, // 图像组件
	TextInput
} from 'react-native'

const instructions = Platform.select({
	ios: '这是苹果',
	android: '这是安卓'
})

type Props = {}
class App extends Component <Props> {
	render() {
		return ( 
			<View style = { styles.container }>
				<Text style = { styles.welcome }>
				  Welcome to React Native!
				</Text> 
				<TextInput></TextInput>  
				<Text style = { styles.instructions } >
					To get started, edit App.js 
				</Text>
				<Text > 其实我是存在的 </Text>  
					<Text style = { styles.instructions }>
					{ instructions } 
				</Text>  
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})

export default App

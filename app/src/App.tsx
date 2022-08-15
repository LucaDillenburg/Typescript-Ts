import React from 'react'

import { StyleSheet, View, Text } from 'react-native'
import User from '../../shared/src/data/User'

interface Props {}

interface State {
	user: User
}

class App extends React.Component {
	state = { user: new User('Luca Dillenburg', 'user@gmail.com') };

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Hello {this.state.user.name}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'grey'
	},
	text: {
		fontSize: 38,
		textAlign: 'center',
		margin: 10,
		color: 'white',
		fontStyle: 'italic'
	}
})

export default App

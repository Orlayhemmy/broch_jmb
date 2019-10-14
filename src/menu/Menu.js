import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated, Easing } from 'react-native';

export default class Menu extends Component {
  state = {
    menuItems: [
			{
				name: 'Home',
				image: require('../../image/home-icon-green.png'),
			},
			{
					name: 'brochure',
					image: require('../../image/menu.png'),
			},
			{
					name: 'cut offs',
					image: require('../../image/checklist.png'),
			},
			{
				name: 'centers',
				image: require('../../image/center.png'),
			},
			{
					name: 'faq',
					image: require('../../image/question.png'),
			},
			{
				name: 'report',
				image: require('../../image/recommendation.png'),
			},
		],
		bounceValue: new Animated.Value(200),
	}
	
	componentDidMount() {
		this.assignBounceValue();
	}

	componentDidUpdate() {
		this.displayMenu()
	}

	assignBounceValue = () => {
		const arr = this.state.menuItems.map((item, i) => {
			return {
				...item, 
				bounceValue: new Animated.Value(200)
			}
		});
		this.setState({ menuItems: arr })
	}

	displayMenu = () => {
		const toValue = this.props.isMenuVisible ? 0 : 200;		
		Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        tension: 4,
        friction: 8,
        useNativeDriver: true,
      }
		).start();
		this.state.menuItems.forEach((item, i) => {	
			const itemToValue = this.props.isMenuVisible ? 0 : 200 * (2 ** i);	
						
			Animated.spring(
				this.state.menuItems[i].bounceValue,
				{
					toValue: itemToValue,
					tension: 4,
					friction: 8,
					useNativeDriver: true,
				}
			).start();
		})
	}

	render() {
		const { menuItems } = this.state;
		
		return (
			<Animated.View style={[styles.menu,  {transform: [{translateX: this.state.bounceValue}]}]}>
				<View style={{marginTop: 30, marginBottom: 30}}>
					{menuItems .map(({name, image}, i) => 
					<TouchableWithoutFeedback onPress={() => this.props.changeView(i)} key={i}>
						<Animated.View style={[styles.menuHolder, {transform: [{translateX: this.state.menuItems[i].bounceValue || 0}]}]}>
							<Image style={styles.menuImg} source={image}></Image>
							<Text style={styles.menuItem}>{name}</Text>
						</Animated.View>
					</TouchableWithoutFeedback>
					)}
				</View>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		backgroundColor: '#ffffff80',
		position: 'absolute',
		width: 150,
		height: '100%',
		right: 0,
	},
	menuHolder: {
			height: 170,
			width: 170,
			borderRadius: 170/2,
			backgroundColor: '#FFFFFF',
			margin: 10,
			left: -33,
			justifyContent: 'center',
			alignItems: 'center',
			elevation: 5,
	},
	menuItem: {
		fontSize: 28,
		padding: 5,
		color: '#009422',
		textTransform: 'capitalize',
	},
	menuImg: {
		width: 80,
		height: 78,
	}
})

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => ({
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}
	
	render() {
		const { 
			searchField, 
			onSearchChange, 
			robots, 
			isPending, 
			error 
		} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(
				searchField.toLowerCase()
			)
		})

		if (isPending)
		{
			return (
				<div className='tc'>
					<h1 className='loadingBar'>Loading</h1>
				</div>
			)
		}
		else if (error !== '')
		{
			return (
				<div className='tc'>
					<h1>Error fetching robots</h1>
				</div>
			)
		}
		else
		{
			return (
				<div className='tc'>
						<h1 className='f1'>RoboFriends</h1>
						<SearchBox searchChange={onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
				</div>
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
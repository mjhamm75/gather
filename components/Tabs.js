import React, { Component } from 'react';

import s from './Tabs.css';

export class Tabs extends Component {
	state = {
		tab: null
	};

	componentWillMount() {
		this.setState({tab: this.props.tab ? this.props.tab : this.props.children[0].key})
	}

	handleTabChange(tab) {
		this.setState({tab: tab});
		this.props.onChange(tab);
	}

	onKeyDown(tab, event) {
		if(event.keyCode === 13 || event.keyCode === 32) {
			this.handleTabChange(tab);
		}
	}

	render() {
		return (
				<div>
					<nav>
						<ul className={s.tabs}>
							{this.props.children.map(tab => (
									<li
											tabIndex="0"
											key={tab.key}
											className={tab.key == this.state.tab ? s.active : s.inactive}
											onClick={this.handleTabChange.bind(this, tab.key)}
									    onKeyDown={this.onKeyDown.bind(this, tab.key)}
									>{tab.props.label}</li>
								)
							)}
						</ul>
						<ul className={s.tabsMobile}>
							{this.props.children.map(tab => (
								<li>{tab.props.label}</li>
							))}
						</ul>
					</nav>
					<div className={s.tabBox}>
						<div className={s.innerTabBox}>
							{this.props.children.map((tab) => (
									<div key={tab.key} style={{display: tab.key == this.state.tab ? null : "none"}}>
										{tab.key == this.state.tab || tab.props.preload ? tab.props.children : null}
									</div>
									)
							)}
						</div>
					</div>
				</div>
		)
	};
}

export const Tab = () => null;

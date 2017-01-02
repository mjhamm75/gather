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

	createTabLabel(tab) {
		return (
			<li
					tabIndex="0"
					key={tab.key}
					className={tab.key === this.state.tab ? s.active : s.inactive}
					onClick={this.handleTabChange.bind(this, tab.key)}
					onKeyDown={this.onKeyDown.bind(this, tab.key)}
			>
				<div className={s.tabIcon}>
					<span className={s.icon}>
							{tab.props.isComplete ? <Check addPadding /> : tab.props.count}
					</span>
					<span>{tab.props.label}</span>
				</div>
			</li>
		)
	}

	createMobileTabLabel(tab) {
		if(tab.key === this.state.tab) {
			return (
				<li key={tab.key} className={s.grow}>
					<div className={s.tabIcon}>
						<span className={s.icon}>
								{tab.props.isComplete ? <Check addPadding /> : tab.props.count}
						</span>
						<span className={s.title}>{tab.props.label}</span>
					</div>
				</li>
			);
		} else {
			return (
				<li key={tab.key}>
					<span className={s.mobileIcon}>{tab.props.count}</span>
				</li>
			);
		}
	}

	createTabs(tab) {
		return (
			<li key={tab.key}>
				{tab.key == this.state.tab ? tab.props.children : null}
			</li>
		)
	}

	render() {
		return (
				<div>
					<nav>
						<ul className={s.tabs}>
							{this.props.children.map(tab => this.createTabLabel(tab))}
						</ul>
						<ul className={s.tabsMobile}>
							{this.props.children.map(tab => this.createMobileTabLabel(tab))}
						</ul>
					</nav>
					<div className={s.tabBox}>
						<ul className={s.innerTabBox}>
							{this.props.children.map(tab => this.createTabs(tab))}
						</ul>
					</div>
				</div>
		)
	};
}

export const Tab = () => null;

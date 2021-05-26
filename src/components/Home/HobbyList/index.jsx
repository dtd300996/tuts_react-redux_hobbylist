import PropTypes from 'prop-types';
import React from 'react';
import './hobby.css';

HobbyList.propTypes = {
	hobbyList: PropTypes.array,
	onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
	hobbyList: [],
	onHobbyClick: null,
};

function HobbyList(props) {
	const { hobbyList, activeId, onHobbyClick } = props;

  function handleClick(id) {
    if (!onHobbyClick) return;
    onHobbyClick(id)
  }

	return (
		<div>
			<p>list</p>
			<ul>
				{hobbyList.map((hobby) => (
					<li
						key={hobby.id}
						className={activeId === hobby.id ? 'active' : ''}
						onClick={() => handleClick(hobby.id)}
					>
						{hobby.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default HobbyList;

import casual from 'casual-browserify';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList/index';

HomePage.propTypes = {};

function HomePage(props) {
	const hobbyList = useSelector((state) => state.hobby.list);
	const activeId = useSelector((state) => state.hobby.activeId);

	const dispatch = useDispatch();

	function handleAddHobbyClick() {
		//
		const newHobby = {
			title: casual.title,
			id: casual.uuid,
		};

		const action = addNewHobby(newHobby);
		dispatch(action);
	}

  function handleHobbyClick(id) {
    const action = setActiveHobby(id);
    dispatch(action);
  }

	return (
		<div className="home-page">
			<h1>REDUX HOOK - Home Page.</h1>
			<button onClick={handleAddHobbyClick}>Random hobby</button>
			<HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
		</div>
	);
}

export default HomePage;

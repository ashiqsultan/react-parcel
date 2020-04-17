import React, { createContext, useState } from 'react';
import axios from 'axios';

// Exporting Context
export const UserFormContext = createContext();

const UserFormContextProvider = (props) => {
	const [userId, setUserId] = useState('1');
	const [userData, setUserData] = useState('default data');

	const callDummyApi = async (userId) => {
		const call = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		);
		const newData = call;
		setUserData(newData);
	};

	const handleGetDataClick = () => {
		callDummyApi(userId);
	};

	const handleUserIdChange = (event) => {
		event.preventDefault();
		setUserId(event.target.value);
	};

	return (
		<UserFormContext.Provider
			value={{
				userId,
				userData,
				handleGetDataClick,
				handleUserIdChange,
			}}
		>
			{props.children}
		</UserFormContext.Provider>
	);
};
export default UserFormContextProvider;

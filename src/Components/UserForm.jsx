import React, { Fragment, useEffect, useContext } from 'react';
import { UserFormContext } from '../Contexts/UserFormContext';

const UserForm = () => {
	const {
		userId,
		userData,
		handleGetDataClick,
		handleUserIdChange,
	} = useContext(UserFormContext);

	useEffect(() => {
		console.log("ue called in userForm.jsx")
		handleGetDataClick();
	}, []);

	return (
		<Fragment>
			<p>{JSON.stringify(userData)}</p>
			<div>
				<form>
					<input
						type="text"
						placeholder="user id"
						value={userId}
						onChange={handleUserIdChange}
					/>
					<button type="button" onClick={handleGetDataClick}>
						Get Data
					</button>
				</form>
			</div>
		</Fragment>
	);
};

export default UserForm;

import React from 'react';
import UserForm from '../Components/UserForm';
import UserFormContextProvider from '../Contexts/UserFormContext';
function App() {
	return (
		<div>
			<UserFormContextProvider>
				<h2>This is a React App</h2>
				<UserForm />
			</UserFormContextProvider>
		</div>
	);
}
export default App;

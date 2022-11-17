import React, { useState, useEffect } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const AdminCardSwitcher = (props) => {
	const [signUp, setSignUp] = useState(false);

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			{signUp ? (
				<SignupCard setSignUp={setSignUp} />
			) : (
				<LoginCard setSignUp={setSignUp} />
			)}
		</div>
	);
};

export default AdminCardSwitcher;

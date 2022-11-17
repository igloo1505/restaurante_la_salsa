import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminCardSwitcher from "../../components/admin/AdminCardSwitcher";
import AdminWithAccess from "../../components/admin/AdminWithAccess";
import { updateSpecial } from "../../state/actions";

const AdminPage = (props) => {
	let router = useRouter();
	const [hasAccess, setHasAccess] = useState(false);
	const handleSpecialUpdate = async () => {
		// let res = await updateSpecial()
		// console.log('res: ', res);
	};
	useEffect(() => {
		handleSpecialUpdate();
	}, []);

	return <div>{!hasAccess ? <AdminCardSwitcher /> : <AdminWithAccess />}</div>;
};

export default AdminPage;

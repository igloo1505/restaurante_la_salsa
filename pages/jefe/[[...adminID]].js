import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminCardSwitcher from "../../components/admin/AdminCardSwitcher";
import AdminWithAccess from "../../components/admin/AdminWithAccess";
import { updateSpecial } from "../../state/actions";
import { connect } from "react-redux";

const AdminPage = ({ hasAdminAccess }) => {

	return (
		<div>{!hasAdminAccess ? <AdminCardSwitcher /> : <AdminWithAccess />}</div>
	);
};
const mapStateToProps = (state, props) => ({
	hasAdminAccess: state.auth.adminAccess,
});

export default connect(mapStateToProps)(AdminPage);

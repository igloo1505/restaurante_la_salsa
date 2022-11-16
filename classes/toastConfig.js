export const toastTypes = {
	success: "success",
	error: "error",
	warning: "warning",
	brand: "brand",
	brandSecondary: "brandSecondary",
};

class ToastConfig {
	constructor(open, message, type, delay) {
		self.open = open;
		self.message = message;
		self.type = type;
		self.delay = delay ? delay : 3000;
	}
}

export default ToastConfig;

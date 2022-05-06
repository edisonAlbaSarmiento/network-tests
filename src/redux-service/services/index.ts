import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

// USER

const userSlide = createSlice({
	name: 'user',
	initialState: {
		data: null,
		showError: false,
		loader: false,
		isLogin: false,
	},
	reducers: {
		saveDataLoginAction: (state: any, action: any) => {
			state.data = action.payload;
		},

		logoutDataAction: (state: any, action: any) => {
			state.data = action.payload;
		},
		showErrorAction: (state: any, action: any) => {
			state.showError = action.payload;
		},
		showLoaderAction: (state: any, action: any) => {
			state.loader = action.payload;
		},
		changeLoginAction: (state: any, action: any) => {
			state.isLogin = action.payload;
		},
	},
});

const getLoginUserAsync = () => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(false));
		dispatch(changeLoginAction(true));
		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				const dataUser = {
					email: user.email,
					name: user.displayName,
					urlImage: user.photoURL,
				};
				dispatch(saveDataLoginAction(dataUser));
			} else {
				dispatch(saveDataLoginAction(null));
			}
		});
	} catch (err) {
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const logoutAsync = () => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));
		dispatch(logoutDataAction(null));
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				dispatch(showLoaderAction(false));
				dispatch(changeLoginAction(false));
			})
			.catch((err) => {
				console.error(err);
				dispatch(showLoaderAction(false));
				dispatch(changeLoginAction(false));
			});
	} catch (err: any) {
		dispatch(showLoaderAction(false));
		dispatch(showErrorAction(false));
		dispatch(changeLoginAction(false));
	}
};

const {
	saveDataLoginAction,
	logoutDataAction,
	showErrorAction,
	showLoaderAction,
	changeLoginAction,
}: any = userSlide.actions;
interface Stateprops {
	user: {
		data: any;
		showError: boolean;
		loader: boolean;
		isLogin: boolean;
	};
}
//selectors
const selectUserLogin = (state: Stateprops) => state.user?.data;
const selectError = (state: Stateprops) => state.user?.showError;
const selectLoader = (state: Stateprops) => state.user?.loader;
const selectIsLoggin = (state: Stateprops) => state.user?.isLogin;

export {
	selectUserLogin,
	selectLoader,
	selectIsLoggin,
	selectError,
	saveDataLoginAction,
	getLoginUserAsync,
	logoutDataAction,
	logoutAsync,
	showLoaderAction,
	showErrorAction,
};
export default userSlide.reducer;

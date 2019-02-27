import apiUrl from '../config';

signUp => (`${apiUrl}/user/sign_up`, {name, email, password});

export default signUp;
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('*Invalid email').required('*Required'),
  password: Yup.string().min(8, '*Password is too short').required('*Required'),
});

export default LoginSchema;

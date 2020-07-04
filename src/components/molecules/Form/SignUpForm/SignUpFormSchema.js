import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, '*Name is too short').required('*Required'),
  email: Yup.string().email('*Invalid email').required('*Required'),
  password: Yup.string().min(8, '*Password is too short').required('*Required'),
});

export default SignupSchema;

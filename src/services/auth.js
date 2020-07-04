const signUp = async ({ name, email, password }) => {
  try {
    const user = await fetch('http://localhost:3000/api/auth/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong');
      })
      .then((json) => json.user)
      .catch((err) => {
        throw new Error(err);
      });

    return localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    return error;
  }
};

export default {
  signUp,
};

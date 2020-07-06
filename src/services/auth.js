const signUp = async ({ name, email, password }) => {
  try {
    const user = await fetch(`${process.env.API_PATH}/auth/signUp`, {
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
        return res.json().then((err) => {
          throw err.errors;
        });
      })
      .then((json) => json.user)
      .catch((err) => {
        throw err;
      });

    return { user };
  } catch (error) {
    return error;
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await fetch(`${process.env.API_PATH}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((err) => {
          throw err.errors;
        });
      })
      .then((json) => json.user)
      .catch((err) => {
        throw err;
      });

    return { user };
  } catch (error) {
    return error;
  }
};

export default {
  signUp,
  login,
};

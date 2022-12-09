const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("About to signup")
  
    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    const calGoal = document.querySelector('#goal-signup').value.trim()
    if (username && password && calGoal) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, calGoal }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


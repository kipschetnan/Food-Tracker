const breakfastFormHandler = async (event) => {
    event.preventDefault();
    console.log('In handler')
    const name = document.querySelector('#brk-foodName').value.trim();
    const calories = document.querySelector('#brk-cals').value.trim();
    const fats = document.querySelector('#brk-fats').value.trim();
    const carbs = document.querySelector('#brk-carbs').value.trim();
  
    if (name) {
      const response = await fetch('/api/foods/breakfast', {
        method: 'POST',
        body: JSON.stringify({ name, calories, fats, carbs }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
  
  
      if (response.ok) {
        document.location.replace('/breakfast');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document
    .querySelector('.add-brk-food')
    .addEventListener('submit', breakfastFormHandler);

const lunchFormHandler = async (event) => {
    event.preventDefault();
    console.log('In handler')
    const name = document.querySelector('#lunch-foodName').value.trim();
    const calories = document.querySelector('#lunch-cals').value.trim();
    const fats = document.querySelector('#lunch-fats').value.trim();
    const carbs = document.querySelector('#lunch-carbs').value.trim();

    if (name) {
        const response = await fetch('/api/foods/lunch', {
            method: 'POST',
            body: JSON.stringify({ name, calories, fats, carbs }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)


        if (response.ok) {
            document.location.replace('/lunch');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.add-lunch-food')
    .addEventListener('submit', lunchFormHandler);

const dinnerFormHandler = async (event) => {
    event.preventDefault();
    console.log('In handler')
    const name = document.querySelector('#dinner-foodName').value.trim();
    const calories = document.querySelector('#dinner-cals').value.trim();
    const fats = document.querySelector('#dinner-fats').value.trim();
    const carbs = document.querySelector('#dinner-carbs').value.trim();

    if (name) {
        const response = await fetch('/api/foods/dinner', {
            method: 'POST',
            body: JSON.stringify({ name, calories, fats, carbs }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)


        if (response.ok) {
            document.location.replace('/dinner');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.add-dinner-food')
    .addEventListener('submit', dinnerFormHandler);

const snacksFormHandler = async (event) => {
    event.preventDefault();
    console.log('In handler')
    const name = document.querySelector('#snacks-foodName').value.trim();
    const calories = document.querySelector('#snacks-cals').value.trim();
    const fats = document.querySelector('#snacks-fats').value.trim();
    const carbs = document.querySelector('#snacks-carbs').value.trim();

    if (name) {
        const response = await fetch('/api/foods/snacks', {
            method: 'POST',
            body: JSON.stringify({ name, calories, fats, carbs }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)


        if (response.ok) {
            document.location.replace('/snacks');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.add-snacks-food')
    .addEventListener('submit', snacksFormHandler);
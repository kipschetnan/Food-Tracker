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
            alert('Failed to add food.');
        }
    }
};

document.querySelector('#addDinnerFoodBtn').addEventListener('click', dinnerFormHandler);

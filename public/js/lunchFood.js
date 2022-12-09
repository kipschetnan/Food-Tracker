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
            alert('Failed to add food.');
        }
    }
};

document.querySelector('#addLunchFoodBtn').addEventListener('click', lunchFormHandler);

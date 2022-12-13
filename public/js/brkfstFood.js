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
            alert('Failed to add food.');
        }
    }
};

document.querySelector('#addButton').addEventListener('click', breakfastFormHandler);




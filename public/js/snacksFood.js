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
            alert('Failed to add food.');
        }
    }
};

document.querySelector('#addButton').addEventListener('click', snacksFormHandler);
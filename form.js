document.getElementById('submitBtn').addEventListener('click', () => {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        ratings: {
            question1: parseInt(document.getElementById('question1').value),
            question2: parseInt(document.getElementById('question2').value),
            question3: parseInt(document.getElementById('question3').value),
            question4: parseInt(document.getElementById('question4').value),
            question5: parseInt(document.getElementById('question5').value)
        }
    };


    const ratingValues = Object.values(formData.ratings);
    const average = ratingValues.reduce((sum, value) => sum + value, 0) / ratingValues.length;


    console.log(formData);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>${formData.firstName} ${formData.lastName} (${formData.email}): Average Score: ${average.toFixed(2)}</h3>`;
    
});

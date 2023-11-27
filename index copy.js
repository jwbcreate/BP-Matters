//*** Font Size Button ***//

function adjustFontSize(action) {
    var currentSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));

    if (action === 'increase') {
        document.body.style.fontSize = (currentSize + 2) + 'px';
    } else if (action === 'decrease') {
        document.body.style.fontSize = (currentSize - 2) + 'px';
    }
}


//*** Exercise Suggestion Generator ***//

// Define the array 
const exercises = [
    "Take a short walk around the neighborhood",
    "Do gentle stretching exercises for 10 minutes",
    "Try seated leg lifts to strengthen your thighs",
    "Practice deep breathing exercises for relaxation",
    "Do arm circles to improve shoulder flexibility",
    "Engage in chair yoga for gentle movement",
    "Take a few minutes to stand and sit from a sturdy chair",
    "Do side leg raises to work on hip strength",
    "Try gentle water aerobics if you have access to a pool",
    "Practice balancing exercises, such as standing on one leg for a few seconds"
];

// Call the function
function generateRandomExerciseSuggestion() {
    const randomSuggestion = exercises[Math.floor(Math.random() * exercises.length)];
    return randomSuggestion;
}

const exerciseElement = document.getElementById('exercise-suggestion');

// Update the text content of an HTML element with the ID 'exercise-suggestion.

function updateExerciseSuggestion() {
    const randomExercise = generateRandomExerciseSuggestion();
    exerciseElement.textContent = randomExercise;  //Text that appears with the random suggestion.
}

// Add event listeners to the buttons.   
const exerciseButton = document.getElementById('generate-exercise-button');
exerciseButton.addEventListener('click', updateExerciseSuggestion); //Event listeners listen for the the 'click' event, when the button is clicked// it calls for the updateExerciseSuggestion function

// Initial suggestions generation
updateExerciseSuggestion();



//*** Food Suggestion Generator ***//

// Define the array.
const foods = [
    "Grilled chicken with vegetables",
    "Salmon with quinoa and steamed broccoli",
    "Vegetable stir-fry with tofu",
    "Greek salad with feta cheese and olives",
    "Oatmeal with berries and nuts",
    "Smoothie with spinach, banana, and almond milk",
    "Baked sweet potato with black beans and salsa",
    "Whole-grain toast with avocado and poached egg",
    "Quinoa bowl with mixed vegetables",
    "Brown rice with grilled shrimp and asparagus"
];

// Call the function
function generateRandomFoodSuggestion() {
    const randomSuggestion = foods[Math.floor(Math.random() * foods.length)];
    return randomSuggestion;
}

const foodElement = document.getElementById('food-suggestion');

function updateFoodSuggestion() {
    const randomFood = generateRandomFoodSuggestion();
    foodElement.textContent = randomFood; //Text that appears with the random suggestion.
}

// Add event listeners to the buttons
const foodButton = document.getElementById('generate-food-button');
foodButton.addEventListener('click', updateFoodSuggestion);

// Initial suggestions generation
updateFoodSuggestion();



//** Pop-up Window **//

// Show the pop-up when the page loads
window.onload = function() {
    document.getElementById('popup-container').style.display = 'block'; /* set to block so that the pop up is visible.  if set to None, pop up will be invisible.*/
};

// Close the pop-up and handle the user's choice
function closePopup(choice) {
    document.getElementById('popup-container').style.display = 'none'; /*when the use clicks one of the 3 options to close the window, */
    console.log('User selected:', choice); /** send ths choice to the console */
}

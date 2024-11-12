const addButton = document.getElementById('add')

const form = document.querySelector('form')

addButton.addEventListener('click', addParticipant);
let count = 1

const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', onSubmit);

function addParticipant(event) {
    event.preventDefault();
    // do the rest of the stuff
    const template = getParticipantTemplate()
    /**
     * First: Get the participant template
     * Second: Insert the template html before the "Add Participant" button
     */
    addButton.insertAdjacentHTML("beforebegin", template);
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    
    // once you have your total make sure to return it!
    // Use reduce to sum up all the fee values
    const total = feeElements.reduce((sum, element) => {
        // Convert the string value to a number and add it to sum
        // If the value is empty or not a number, add 0 instead
        const feeValue = parseFloat(element.value) || 0;
        return sum + feeValue;
    }, 0);
    
    return total;
}

// function onSubmit(event) {
//     event.preventDefault()
    
//     // Call the totalFees function so we can get the total fee amount
//     totalFees()

//     // We need to hide the <form> element
//     //    We can do that by doing form.style.display = 'none'
//     //    Or we could add a hide class, form.classList.add('hide')
//     // 
//     form.style.display = 'none'

//     // Create a new function called getCheckoutTemplate to format the new HTML
//     // Insert the HTML somewhere, after the form.
//     // Basically, the form will disappear and the checkout text will show up with the fee amount.
//     getCheckoutTemplate()
// }

function getCheckoutTemplate(amount) {
    // Format the amount to 2 decimal places and add dollar sign
    const formattedAmount = `$${amount.toFixed(2)}`;
    
    // Return an HTML template string that matches the style of the participant template
    return `
        <div class="checkout-summary">
            <h2>Registration Summary</h2>
            <div class="summary-details">
                <p>Total Number of Participants: ${count}</p>
                <p class="total-amount">Total Amount: <strong>${formattedAmount}</strong></p>
            </div>
            <div class="confirmation-message">
                <p>Thank you for your registration!</p>
                <p>A confirmation email will be sent with your registration details.</p>
                <p>Please keep this information for your records.</p>
            </div>
        </div>
    `;
}


function onSubmit(event) {
    event.preventDefault();
    
    // Get the total fees amount
    const total = totalFees();

    // Hide the form
    form.style.display = 'none';

    // Get the checkout template HTML with the total amount
    const checkoutHTML = getCheckoutTemplate(total);

    // Insert the checkout message after the form
    form.insertAdjacentHTML('afterend', checkoutHTML);
}


function getParticipantTemplate(participant) {
	count++
    return `
		<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" value="" required="">
            </div>
            <div class="item activities">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity" type="text" name="activity">
            </div>
            <div class="item">
                <label for="fee">Fee ($)<span>*</span></label>
                <input id="fee" type="number" name="fee">
            </div>
            <div class="item">
                <label for="date">Desired Date <span>*</span></label>
                <input id="date" type="date" name="date">
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected="" value="" disabled=""></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
		</section>
	`
}
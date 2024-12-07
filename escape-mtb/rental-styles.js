const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', onSubmit);

const form = document.getElementById('form-container') 

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
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

// Hide form when click submit

function getCheckoutTemplate(amount) {
    // Format the amount to 2 decimal places and add dollar sign
    const formattedAmount = `$${amount.toFixed(2)}`;
    
    // Return an HTML template string
    return `
        <div class="checkout-summary">
            <h2>Registration Summary</h2>
            <div class="summary-details">
                <p class="total-amount">Total Amount: <strong>${formattedAmount}</strong></p>
            </div>
            <div class="confirmation-message">
                <p>Thank you for your purchase!</p>
                <p>A confirmation email will be sent with your purchase details.</p>
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

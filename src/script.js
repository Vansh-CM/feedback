document.addEventListener('DOMContentLoaded', function () {
    const fafeedbackModal = document.getElementById('fafeedbackModal');
    const categoryButtons = document.querySelectorAll('.fa-category-icon');
    const categoryInputs = document.querySelectorAll('.fa-category-input');
    const categoryHide = document.querySelectorAll('.fa-category');
    const feedbackBtnFooter = document.querySelectorAll('.fa-feedback-btn-footer');
    const textarea = document.getElementById('faIssueInput');
    const faSubmitButton = document.getElementById('faSubmitButton');
    const hideHeading = document.querySelectorAll('.fa-report-btn')
    const headingData = document.querySelectorAll('.fa-heading')
    const backButton = document.querySelector('.fa-back-btn');
    const faCaptureButton = document.getElementById('faCaptureButton');
    const faSpinner = document.getElementById('faSpinner');
    const svgButton = document.querySelector('.fa-capture-btn-svg');
    const faCaptureImageData = document.getElementById('faCaptureImageData');
    const FaCrossIcon = document.querySelector('.fa-cross-icon');
    const faFooterText = document.querySelector('.fa-footer-text');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Stack to maintain modal views
    const viewStack = [];

    // Hide all category inputs initially
    categoryInputs.forEach(input => {
        input.style.display = 'none';
    });

    feedbackBtnFooter.forEach(input => {
        input.style.display = 'none';
    });

    hideHeading.forEach(input => {
        input.style.display = 'none';
    });


    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation(); // Prevent modal from closing when category buttons are clicked

            // Clear textarea input value
            textarea.value = '';

            // Hide all category inputs
            categoryInputs.forEach(input => {
                input.style.display = 'block';
            });
            feedbackBtnFooter.forEach(input => {
                input.style.display = 'block';
            });
            categoryHide.forEach(input => {
                input.style.display = 'none';
            });
            hideHeading.forEach(input => {
                input.style.display = 'block';
            });
            headingData.forEach(input => {
                input.style.display = 'none';
            });

            // Push current view to the stack
            viewStack.push({
                categoryInputs: categoryInputs,
                feedbackBtnFooter: feedbackBtnFooter,
                categoryHide: categoryHide,
                hideHeading: hideHeading,
                headingData: headingData
            });
        });
    });

    // Handle back button click
    backButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Pop the previous view from the stack
        const previousView = viewStack.pop();

        // Restore the previous view
        previousView.categoryInputs.forEach(input => {
            input.style.display = 'none';
        });
        previousView.feedbackBtnFooter.forEach(input => {
            input.style.display = 'none';
        });
        previousView.categoryHide.forEach(input => {
            input.style.display = 'block';
        });
        previousView.hideHeading.forEach(input => {
            input.style.display = 'none';
        });
        previousView.headingData.forEach(input => {
            input.style.display = 'block';
        });
    });

    // Close modal when close button is clicked
    document.getElementsByClassName('fa-close')[0].addEventListener('click', function () {
        console.log('Close button clicked');
        fafeedbackModal.style.display = 'none';
    });

    // Close modal when clicked outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target == fafeedbackModal) {
            console.log('Clicked outside modal');
            fafeedbackModal.style.display = 'none';
        }
    });

    // Open modal when the feedback button is clicked
    document.getElementById('faOpenModalBtn').addEventListener('click', function () {
        console.log('Feedback button clicked');
        fafeedbackModal.style.display = 'block';
    });

    // Enable feedback button when textarea has input
    textarea.addEventListener('input', function () {
        // Enable the submit button if the textarea has value, otherwise disable it
        if (textarea.value.trim() !== '') {
            faSubmitButton.removeAttribute('disabled');
        } else {
            faSubmitButton.setAttribute('disabled', 'disabled');
        }
    });


    // Simulate loading when capture button is clicked
    faCaptureButton.addEventListener('click', function () {
        // Hide the capture button and show the spinner
        svgButton.style.display = 'none';
        faCaptureButton.style.display = 'none';
        faSpinner.style.display = 'block';

        // Simulate loading for 3 seconds
        setTimeout(function () {
            // Show the capture button and hide the spinner after loading
            faCaptureButton.style.display = 'block';
            faSpinner.style.display = 'none';
            // Display "Hello World" after loading
            faCaptureImageData.style.display = 'block';
            FaCrossIcon.style.display = 'flex';
            // Hide the capture button when "Hello World" text is showing
            faCaptureButton.style.display = 'none';
        }, 3000);
    });

    // Add event listener to the fa-cross-icon
    FaCrossIcon.addEventListener('click', function () {
        // Show the capture button and hide the "Hello World" div
        faCaptureButton.style.display = 'block';
        svgButton.style.display = 'block';
        faCaptureImageData.style.display = 'none';
        FaCrossIcon.style.display = 'none';
    });

    // Add event listener to the submit button
    faSubmitButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Hide elements when thank you message is showing
        categoryInputs.forEach(input => {
            input.style.display = 'none';
        });

        feedbackBtnFooter.forEach(input => {
            input.style.display = 'none';
        });

        hideHeading.forEach(input => {
            input.style.display = 'none';
        });
        // Hide faFooterText
        faFooterText.style.display = 'none';

        // Show the thank you message
        thankYouMessage.style.display = 'block';

        setTimeout(function () {
            // Hide thank you message after 5 seconds
            thankYouMessage.style.display = 'none';
            // Show the initial modal state after 5 seconds
            categoryHide.forEach(input => {
                input.style.display = 'block';
            });
            headingData.forEach(input => {
                input.style.display = 'block';
            });

            faFooterText.style.display = 'block';

        }, 5000);
    });

});
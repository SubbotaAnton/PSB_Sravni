(function () {

    document.getElementById('submitForm').addEventListener('click', onSubmit, false);

    function onSubmit(event) {
        event.preventDefault();

        const checkedRadioButton = document.querySelector('.businessFormList input[type="radio"]:checked')

        if (checkedRadioButton) {
            document.location = `./result.html?data=${checkedRadioButton.value}`;
        }
    }

    document.getElementById('businessForm').addEventListener('click', onRadioButton, false);

    function onRadioButton(event) {
        if (event.target.getAttribute('type') === 'radio') {
            document.getElementById('submitForm').removeAttribute('disabled');
            document.getElementById('businessForm').removeEventListener('click', onRadioButton);
        }
    }

}());

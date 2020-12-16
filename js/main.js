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
        console.log(event.target);
    }

}());
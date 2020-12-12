(function (global) {

    document.getElementById('submitForm').addEventListener('click', onSubmit, false);

    function onSubmit(event) {
        event.preventDefault();

        const checkedRadioButton = document.querySelector('.businessFormList input[type="radio"]:checked')

        console.log(checkedRadioButton.value);
    }

}(window));
const checkEmailInputs = (name) => {
    const txtInputs = document.querySelectorAll(name);

    txtInputs.forEach(input => {

        input.addEventListener('input', () => {
            if (input.value.match(/[а-я]/ig)) {
                input.value = '';
            }
        });
    });
};
export {checkEmailInputs};
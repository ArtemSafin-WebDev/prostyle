export default function choose() {
    const elements = Array.from(document.querySelectorAll('.js-choose'));

    elements.forEach(element => {
        const inputs = Array.from(element.querySelectorAll('input[type="checkbox"]'));

        const submit = element.querySelector('button[type="submit"]');

        const checkInputs = () => {
            const anyChecked = inputs.find(input => input.checked);
            if (anyChecked) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        };

        checkInputs();

        inputs.forEach(input => {
            input.addEventListener('change', () => {
                checkInputs();
            })
        })
    });
}

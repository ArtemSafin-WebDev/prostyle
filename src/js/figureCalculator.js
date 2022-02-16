export default function figureCalculator() {
    const elements = Array.from(document.querySelectorAll('.js-figure-calculator'));
    elements.forEach(element => {
        const inputs = Array.from(element.querySelectorAll('input'));
        const submit = element.querySelector('button[type="submit"]');

        const checkInputs = () => {
            console.log('Checking inputs');
            const emptyInput = inputs.some(item => item.value.trim() === '');
            if (emptyInput) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
        };

        checkInputs();

        inputs.forEach(input => {
            input.addEventListener('input', checkInputs);
        });
    });
}

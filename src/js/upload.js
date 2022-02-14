export default function upload() {
    const elements = Array.from(document.querySelectorAll('.js-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const submit = element.querySelector('button[type="submit"]');
        const form = element.querySelector('form');

        input.addEventListener('change', event => {
            if (input.files.length) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        });

        form.addEventListener('reset', () => {
            submit.disabled = true;
        });
    });
}

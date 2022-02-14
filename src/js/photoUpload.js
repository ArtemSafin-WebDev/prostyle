export default function photoUpload() {
    const elements = Array.from(document.querySelectorAll('.js-photo-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        let uploadedImage = null;
        const content = element.querySelector('.js-upload-content');
        const contentCopy = content.cloneNode(true);
        const form = element.closest('form');
        input.addEventListener('change', (event) => {
            if (input.files.length) {
                element.classList.add('file-loaded');
                const src = URL.createObjectURL(event.target.files[0]);
                if (uploadedImage) {
                    uploadedImage.src = src;
                } else {
                    const img = document.createElement('img');
                    img.src = src;
                    content.parentElement.appendChild(img);
                    content.remove();
                    uploadedImage = img;
                }
            } else {
                element.classList.remove('file-loaded');
                if (uploadedImage) {
                    uploadedImage.parentElement.appendChild(contentCopy.cloneNode(true));
                    uploadedImage.remove();
                    uploadedImage = null;
                }
            }
        });

        input.addEventListener('dragenter', () => {
            element.classList.add('dragged');
        });
        input.addEventListener('dragend', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('dragleave', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('drop', () => {
            element.classList.remove('dragged');
        });

        if (form) {
            form.addEventListener('reset', () => {
                input.value = '';

                element.classList.remove('file-loaded');

                if (uploadedImage) {
                    uploadedImage.parentElement.appendChild(contentCopy.cloneNode(true));
                    uploadedImage.remove();
                    uploadedImage = null;
                }
            });
        }
    });
}

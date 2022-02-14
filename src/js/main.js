
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import masks from './masks';
import anchorLinks from './anchorLinks';

import photoUpload from './photoUpload';
import upload from './upload';
import choose from './choose';



document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    validation();
    masks();
    anchorLinks();
    photoUpload();
    upload();
    choose();
});





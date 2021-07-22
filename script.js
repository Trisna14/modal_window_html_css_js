function showModal (titleHtml, contentHtml, buttons) {

    // create elements
    const modal =  document.createElement('div');
    // console.log(modal);
    modal.classList.add('modal');
    // console.log(modal);

    modal.innerHTML = 
    `<div class="modal__inner">
        <div class="modal__top">
            <div class="modal__title">${titleHtml}</div>
            <button class="modal__close" type="button">
                <span class="material-icons">close</span>
            </button>
        </div>
        <div class="modal__content">${contentHtml}</div>
        <div class="modal__bottom"></div>
    </div>`;
    
    // console.log(buttons);
    for (const button of buttons) {

        // console.log(button.triggerClose);
        const element = document.createElement('button');
        // console.log(element);
        element.setAttribute('type', 'button');
        element.classList.add('modal__button');
        element.textContent = button.label;

        element.addEventListener('click', () => {

            if (button.triggerClose) {
                document.body.removeChild(modal);
            }

            button.onClick();
        });
        
        // console.log(element);
        // add button element
        modal.querySelector('.modal__bottom').appendChild(element);
        console.log(modal);

        modal.querySelector('.modal__close').addEventListener ('click', () => {
            document.body.removeChild(modal);
        });
    }

    document.body.appendChild(modal);
}

showModal('Sample Modal Title','<p> I am the content of this modal </p>', [

    {
        label: "Go it!",
        triggerClose: true,
        onClick: () => {
            console.log('The button was clicked!')
        }
    }
]);

// console.log(showModal);
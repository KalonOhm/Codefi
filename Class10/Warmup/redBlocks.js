const container = document.createElement('div');

document.body.appendChild(container);

const addRedBlock = ()=> {
    const el = document.createElement('div');
    el.style.width = '200px';
    el.style.height = '200px';
    el.style.backgroundColor = 'red';
    container.appendChild(el);

    setTimeout(addRedBlock, 5000);
}

addRedBlock()

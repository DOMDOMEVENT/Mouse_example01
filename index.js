const rock = document.querySelector('.rock');


function reset() {
    document.querySelector('.rock').classList.remove('left');
    document.querySelector('.rock').classList.remove('right');
}

function rocking(event) {
    if (event.button === 0) {
        rock.classList.add('left');
        console.log('왼쪽으로!');
    } else if (event.button === 2) {
        rock.classList.add('right');
        console.log('오른쪽으로!');
    }

    setTimeout(reset, 800);
}

document.addEventListener('mousedown', rocking);

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
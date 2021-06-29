var toggled = false;

function alertDemo() { // To demonstrate how an alert can appear programmatically.
    if (!toggled) {
        document.getElementById('alertDemo').classList.add('alert', 'alert-success');
        document.getElementById('alertDemo').innerHTML = '<strong>Success!</strong> This alert box could indicate a successful or positive action.';
    }
    else {
        document.getElementById('alertDemo').classList.remove('alert', 'alert-success');
        document.getElementById('alertDemo').innerHTML = '';
    }
    toggled = !toggled;
}
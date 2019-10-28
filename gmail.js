window.onload = function() {
    if (window.location.href.indexOf("#inbox") == -1) {
        return;
    }

    setInterval(function() {
        // Hide label pills on emails
        Array.from(document.getElementsByClassName("av")).forEach(function(labelPill) {
            labelPill.style.display = 'none'
        })

        // Hide star button on emails
        Array.from(document.getElementsByClassName("apU xY")).forEach(function(star) {
            star.style.display = 'none'
        })

        // Hide emails from default mailbox
        document.getElementsByClassName("D E G-atb bP")[0].parentNode.nextSibling.nextSibling.nextSibling.style.display = 'none'

        // Hide Hangouts
        document.querySelectorAll('[aria-label="Hangouts"]')[0].style.display = 'none';

        // Hide top bar for default mailbox
        Array.from(document.getElementsByClassName("D E G-atb bP")).slice(-1)[0].style.display = 'none'
    }, 500);
}

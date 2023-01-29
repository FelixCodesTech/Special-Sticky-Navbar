const navBar = document.getElementById("navBar");
const body = document.getElementById("body");
const scrollWatcher = document.getElementById("navScrollWatcher");

document.onscroll = () => {
    let navBarPos = navBar.getBoundingClientRect();

    if (navBarPos.top < 1) {
        navBar.classList.add("floatNav");
        body.classList.add("floatNavMovedBody");
    } else {
        navBar.classList.remove("floatNav");
        body.classList.remove("floatNavMovedBody");
    }

    let scrollWatcherPos = scrollWatcher.getBoundingClientRect();

    if (scrollWatcherPos.top > navBar.clientHeight) {
        navBar.classList.remove("floatNav");
        body.classList.remove("floatNavMovedBody");
    }
}
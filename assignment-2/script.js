const hamburgerBtn  = document.getElementById('hamburgerBtn');
const sideDrawer    = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

// Open the drawer
function openDrawer() {
    sideDrawer.classList.add('drawer-open');
    drawerOverlay.classList.add('overlay-active');
    document.body.style.overflow = 'hidden'; // Prevent page scroll while drawer is open
}

// Close the drawer
function closeDrawer() {
    sideDrawer.classList.remove('drawer-open');
    drawerOverlay.classList.remove('overlay-active');
    document.body.style.overflow = ''; // Restore page scroll
}

// Hamburger click → open
hamburgerBtn.addEventListener('click', openDrawer);

// X button click → close
drawerCloseBtn.addEventListener('click', closeDrawer);

// Clicking the dark overlay → close
drawerOverlay.addEventListener('click', closeDrawer);

// BONUS: Clicking any nav link inside drawer → close
const drawerLinks = sideDrawer.querySelectorAll('a');
drawerLinks.forEach(function(link) {
    link.addEventListener('click', closeDrawer);
});
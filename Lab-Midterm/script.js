const hamburgerBtn  = document.getElementById('hamburgerBtn');
const sideDrawer    = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

// Open the drawer  - event handler fn
function openDrawer() {
    sideDrawer.classList.add('drawer-open');
    drawerOverlay.classList.add('overlay-active');
    document.body.style.overflow = 'hidden'; // Prevent page scroll while drawer is open
}

// Close the drawer  - event handler fn
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

/* ============================================
   BEST SELLERS CAROUSEL - SLICK INITIALIZATION
   ============================================
   Initialize Slick carousel for responsive product carousel
   Handles sliding, auto-play, and user interactions */

$(document).ready(function() {
    // Initialize Slick carousel on best sellers grid
    var $carousel = $('.best-sellers-grid');
    
    // Store the original count of product cards BEFORE Slick modifies the DOM
    // This prevents counting the cloned cards that Slick creates for infinite loop
    var originalTotalSlides = $carousel.find('.best-seller-card').length;
    
    $carousel.slick({
        // Responsive breakpoints: Configure how many slides show at different screen sizes
        responsive: [
            {
                // Desktop breakpoint: screens wider than 992px
                breakpoint: 9999,
                settings: {
                    slidesToShow: 3,      // Show 3 cards on desktop
                    slidesToScroll: 1,    // Scroll 1 card at a time
                    infinite: true,       // Infinite loop - when reaching end, wraps to beginning
                    arrows: false,        // Hide default Slick arrows (using custom buttons)
                    autoplay: true,       // Enable auto-play
                    autoplaySpeed: 5000,  // Auto-play every 5 seconds (5000ms)
                }
            },
            {
                // Tablet breakpoint: screens 768px to 992px wide
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,      // Show 2 cards on tablet
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
            {
                // Mobile breakpoint: screens narrower than 768px
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,      // Show 1 card on mobile
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            }
        ]
    });
    
    // Get reference to the slide counter element
    var $slideCounter = $('#slideCounter');
    
    // Function to update slide counter display
    // Shows "Showing X-Y of Z" format using the ORIGINAL count (not cloned cards)
    function updateSlideCounter() {
        // Use the original count stored BEFORE Slick initialization
        // This ensures we show "of 25" not "of 53" (which includes clones)
        var totalSlides = originalTotalSlides;
        
        // Get current slide index (0-based)
        var currentIndex = $carousel.slick('slickCurrentSlide');
        
        // Get number of visible slides (responsive)
        var slidesToShow = $carousel.slick('slickGetOption', 'slidesToShow');
        
        // Calculate the range being shown
        // e.g., if on slide 0 showing 3 items: "Showing 1-3 of 25"
        // Use modulo to wrap around for infinite loop
        var startItem = (currentIndex % totalSlides) + 1;
        var endItem = Math.min((currentIndex % totalSlides) + slidesToShow, totalSlides);
        
        // Update counter text
        $slideCounter.text('Showing ' + startItem + '-' + endItem + ' of ' + totalSlides);
    }
    
    // Update counter on carousel initialization (first load)
    updateSlideCounter();
    
    // Update counter whenever carousel changes slides
    $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // Use nextSlide because beforeChange fires before the slide changes
        setTimeout(updateSlideCounter, 50);
    });
    
    // Previous button click handler
    $('#bestSellersPrev').click(function() {
        // Navigate to previous slide
        $carousel.slick('slickPrev');
    });
    
    // Next button click handler
    $('#bestSellersNext').click(function() {
        // Navigate to next slide
        $carousel.slick('slickNext');
    });
    
    /* ============================================
       AUTO-PLAY WITH HOVER PAUSE LOGIC
       AI-Enhanced Feature: Pause auto-play on hover
       ============================================
       Implementation: When user hovers over any product card,
       pause the auto-play. When mouse leaves, resume auto-play */
    
    // Reference to carousel container (for event delegation)
    var $carouselWrapper = $('.best-sellers-carousel');
    
    // Store whether carousel is currently paused by hover
    var isHoverPaused = false;
    
    // Pause auto-play when user hovers over any product card
    $carouselWrapper.on('mouseenter', '.best-seller-card', function() {
        // Only pause if not already paused by hover
        if (!isHoverPaused) {
            $carousel.slick('slickPause');  // Pause auto-play
            isHoverPaused = true;            // Mark as paused by hover
        }
    });
    
    // Resume auto-play when user's mouse leaves the carousel area
    $carouselWrapper.on('mouseleave', '.best-seller-card', function() {
        // Check if this is the last card element losing hover
        // If mouse is outside the entire carousel wrapper, resume
        if (isHoverPaused && !$(this).closest('.best-sellers-carousel').is(':hover')) {
            $carousel.slick('slickPlay');    // Resume auto-play
            isHoverPaused = false;            // Mark as not paused
        }
    });
    
    // Alternative: Pause/resume on carousel wrapper hover
    $carouselWrapper.on('mouseenter', function() {
        // If not already paused by individual card hover
        // (Individual card hover takes precedence)
    });
    
    $carouselWrapper.on('mouseleave', function() {
        // Mouse left entire carousel - resume auto-play
        if (isHoverPaused) {
            $carousel.slick('slickPlay');
            isHoverPaused = false;
        }
    });
});

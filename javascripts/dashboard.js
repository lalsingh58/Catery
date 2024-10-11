// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-260px';
    } else {
        sidebar.style.left = '0px';
    }
}

// Close the sidebar when a link is clicked on tablet or mobile only
function closeSidebarOnLinkClick() {
    const sidebarLinks = document.querySelectorAll('#sidebar a'); 
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the screen width is below 768px (tablet or mobile)
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                sidebar.style.left = '-260px'; 
            }
        });
    });
}


closeSidebarOnLinkClick();

                // for the arrow-image to be toggled when clicked
document.querySelectorAll('.arrow-image').forEach((arrow) => {
    arrow.addEventListener('click', function () {
    const dropdown = this.nextElementSibling; 

              // Toggle dropdown visibility

    if (dropdown) {
        dropdown.classList.toggle('active');
}
                
            // Toggle arrow rotation

    this.classList.toggle('rotate');
    });
});
                


document.addEventListener('DOMContentLoaded', function(){
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-image');
    const mobileContent = document.getElementById('mobile-content');    
    
                    // OPEN THE MOBILE CONTENT
    openMenu.addEventListener('click', function(){
        mobileContent.style.display = "block";
        openMenu.style.display = "none";
    });
                    
                
                    // CLOSE THE MOBILE CONTENT
    closeMenu.addEventListener('click', function(){
        mobileContent.style.display = "none"
        openMenu.style.display = "block";
    });


});

                            // handling  functions to the mobile viewport

document.addEventListener('DOMContentLoaded', function () {
   function toggleDropdown(arrow) {
    const dropdownContent = arrow.nextElementSibling;
                            
                           // Check if the dropdown content is already open
    const isOpen = dropdownContent.classList.contains('active');
                            
                          // Close any other open dropdowns
    document.querySelectorAll('.dropdown-content-mobile').forEach(content => {
    content.classList.remove('active');
});
                         
                          // Reset arrow rotation for all arrows
    document.querySelectorAll('.arrow-mobile').forEach(img => {
     img.classList.remove('rotate');

});
                   
                         // Toggle the clicked dropdown content and rotate the arrow
if (!isOpen) {
   dropdownContent.classList.add('active');
    arrow.classList.add('rotate');

    }

}                      
                          // Attach the toggle function to all arrow icons

  document.querySelectorAll('.arrow-mobile').forEach(arrow => {
  arrow.addEventListener('click', function () {
   toggleDropdown(this);

});

    });

});
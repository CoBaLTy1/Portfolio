// Wait until the entire page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'boxer'
    var boxes = document.querySelectorAll('.boxer');

    // Loop through each element with the class 'boxer'
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];

        // Add a mouseover event listener to each box
        box.addEventListener('mouseover', function() {
            // Apply scale effect to the hovered box
            this.style.transform = 'scale(1.1)';

            // Loop through all boxes again
            for (var j = 0; j < boxes.length; j++) {
                var otherBox = boxes[j];

                // Check if the current box is not the one being hovered over
                if (otherBox !== this) {
                    // Hide the other boxes by setting their opacity to 0
                    otherBox.style.opacity = '0';
                }
            }
        });

        // Add a mouseout event listener to each box
        box.addEventListener('mouseout', function() {
            // Reset the transform of the hovered box
            this.style.transform = 'scale(1)';

            // Loop through all boxes again
            for (var k = 0; k < boxes.length; k++) {
                var resetBox = boxes[k];
                
                // Reset the opacity of all boxes to 1
                resetBox.style.opacity = '1';
            }
        });
    }
});


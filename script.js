// Add event listeners to sections for click events
var sections = document.querySelectorAll('.section');
sections.forEach(function(section) {
    section.addEventListener('click', function() {
        sections.forEach(function(s) {
            s.classList.remove('focused');
        });

        section.classList.add('focused');
        focusSection(section.id);
    });
});

function focusSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('blurred');
    });

    var clickedSection = document.getElementById(sectionId);
    sections.forEach(function(section) {
        if (section !== clickedSection) {
            section.classList.add('blurred');
        }
    });
}

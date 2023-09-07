const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elementsToAnimate = entry.target.querySelectorAll('[id$="-text"]');
            elementsToAnimate.forEach(element => {
                element.classList.add('animate');
            });
        } else {
            const elementsToAnimate = entry.target.querySelectorAll('[id$="-text"]');
            elementsToAnimate.forEach(element => {
                element.classList.remove('animate');
            });
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
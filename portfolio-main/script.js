document.addEventListener('DOMContentLoaded', function () {
    let tabLinks = document.querySelectorAll('.tab-links');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            // remove active link
            tabLinks.forEach(link => link.classList.remove('active-link'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active-tab'));
            // add active link
            tab.classList.add('active-link');
            let index = Array.from(tabLinks).indexOf(tab);

            document.querySelectorAll('.tab-content')[index].classList.add('active-tab');
        })
    });
});



//for see more
document.addEventListener('DOMContentLoaded', () => {
    const seeMoreButton = document.querySelector('.btn.show-more');
    const moreProjects = document.querySelector('.more-projects');

    seeMoreButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
            moreProjects.style.display = 'grid';
            seeMoreButton.textContent = 'See Less';
        } else {
            moreProjects.style.display = 'none';
            seeMoreButton.textContent = 'See More';
        }
    });
});

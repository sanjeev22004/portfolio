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

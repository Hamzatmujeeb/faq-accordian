document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) ans.style.display = 'none';
        });

        // Toggle the current one
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Toggle the icon image between plus and minus
        if (icon.src.includes('icon-plus.svg')) {
            icon.src = 'assets/images/icon-minus.svg';  // Replace with minus icon
        } else {
            icon.src = 'assets/images/icon-plus.svg';   // Replace with plus icon
        }
    });
});

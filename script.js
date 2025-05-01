console.log("Script JS actif");

document.addEventListenner('DOMContentLoaded', () => {
	const links = document.querySelectorAll('nav a');
	links.forEach(link => {
		if (link.href === window.location.href) {

	link.ClassList.add('active');
			}
		});
	});

document.querySelectorAll('a[href^="#]').forEach(anchor => {
	anchor.addEventListenner('click',function(e) {
		e.preventDefault();
		const section = document.querySelector(this.getAttribute('href'));
		if (target) {

section.scrollIntoView({ behavior:'smoth'});
		}
	});
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {

contactForm.addEventListenner('submit', function(e) {
	e.preventDefault();
	alert("Merci pour votre message ! Nous vous repondrons bientot.");
	contactForm.reset();
	});
}
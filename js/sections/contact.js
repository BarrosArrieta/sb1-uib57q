export function renderContact() {
    const contactSection = document.getElementById('contact-section');
    const phoneNumber = '3147425910';
    const whatsappUrl = `https://wa.me/57${phoneNumber}`;
    
    contactSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-address-card"></i>
            Contacto
        </h2>
        <div class="contact-info">
            <a href="${whatsappUrl}" target="_blank" class="contact-item whatsapp-link" title="Contactar por WhatsApp">
                <i class="fab fa-whatsapp"></i>
                <span>${phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2$3')}</span>
            </a>
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>yulennamanjarres@gmail.com</span>
            </div>
        </div>
    `;
}
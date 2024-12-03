export function renderLanguages() {
    const languagesSection = document.getElementById('languages-section');
    languagesSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-language"></i>
            Idiomas
        </h2>
        <div class="contact-info">
            <div class="contact-item">
                <i class="fas fa-globe"></i>
                <span>Español: Nativo</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-globe"></i>
                <span>Inglés: Intermedio</span>
            </div>
        </div>
    `;
}
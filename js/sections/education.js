export function renderEducation() {
    const educationSection = document.getElementById('education-section');
    educationSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-graduation-cap"></i>
            Educación
        </h2>
        <div class="experience-item">
            <h3>Tecnológico de Antioquia - Institución Universitaria</h3>
            <p>Licenciatura en Educación Infantil (2019-2023)</p>
        </div>
    `;
}
export function renderExperience() {
    const experienceSection = document.getElementById('experience-section');
    experienceSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-briefcase"></i>
            Experiencia Laboral
        </h2>
        <div class="experience-item">
            <h3>Docente Practicante - Institución Educativa María Josefa Escobar</h3>
            <p>Febrero 2023 - Noviembre 2023</p>
            <ul>
                <li>Diseño e implementación de planeaciones educativas</li>
                <li>Intervención en el aula y apoyo a docentes titulares</li>
                <li>Acompañamiento integral a estudiantes de básica primaria</li>
            </ul>
        </div>
    `;
}
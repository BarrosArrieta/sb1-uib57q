export function renderSkills() {
    const skillsSection = document.getElementById('skills-section');
    skillsSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-chart-bar"></i>
            Habilidades
        </h2>
        <div class="skills-grid">
            <div class="skill-tag">Puntualidad</div>
            <div class="skill-tag">Empatía</div>
            <div class="skill-tag">Liderazgo</div>
            <div class="skill-tag">Creatividad</div>
            <div class="skill-tag">Responsabilidad</div>
            <div class="skill-tag">Iniciativa</div>
        </div>
    `;
}
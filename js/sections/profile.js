export function renderProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.innerHTML = `
        <h2 class="section-title">
            <i class="fas fa-user"></i>
            Perfil Profesional
        </h2>
        <p>Docente de Educación Inicial con formación en el Tecnológico de Antioquia. 
           Destaco por mi capacidad de adaptación, creatividad y compromiso con el aprendizaje. 
           Me caracterizo por ser responsable, respetuosa y con una gran iniciativa para asumir nuevos retos.</p>
    `;
}
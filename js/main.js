import { renderProfile } from './sections/profile.js';
import { renderEducation } from './sections/education.js';
import { renderExperience } from './sections/experience.js';
import { renderContact } from './sections/contact.js';
import { renderSkills } from './sections/skills.js';
import { renderLanguages } from './sections/languages.js';
import { setupPdfDownload } from './utils/pdfDownload.js';

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderEducation();
    renderExperience();
    renderContact();
    renderSkills();
    renderLanguages();
    setupPdfDownload();
});
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function setupPdfDownload() {
    document.getElementById('pdfDownload').addEventListener('click', async function(e) {
        e.preventDefault();
        
        // First try to download the static PDF
        try {
            const response = await fetch('/CV-Yulenna-Manjarres.pdf');
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'CV-Yulenna-Manjarres.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                return;
            }
        } catch (error) {
            console.warn('Static PDF not found, falling back to dynamic generation');
        }

        // Fall back to dynamic PDF generation if static PDF is not available
        try {
            // Show loading state
            const button = this;
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando PDF...';
            button.style.pointerEvents = 'none';
            
            // Get the resume container
            const element = document.querySelector('.resume-container');
            
            // Create canvas from the element
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });
            
            // Calculate dimensions to maintain aspect ratio
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            // Create PDF
            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            
            // Add image to PDF
            pdf.addImage(
                canvas.toDataURL('image/jpeg', 1.0),
                'JPEG',
                0,
                position,
                imgWidth,
                imgHeight,
                '',
                'FAST'
            );
            
            // Save the PDF
            pdf.save('CV-Yulenna-Manjarres.pdf');
            
            // Restore button state
            button.innerHTML = originalText;
            button.style.pointerEvents = 'auto';
            
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Hubo un error al generar el PDF. Por favor, intente nuevamente.');
        }
    });
}
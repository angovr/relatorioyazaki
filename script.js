function gerarPDF() {
    const form = document.getElementById('relatorioForm');
    const data = new FormData(form);

    // Configurar jsPDF
    const doc = new jsPDF();
    let y = 10;

    // Título
    doc.setFontSize(16);
    doc.text("Relatório de Passagem de Turno", 10, y);
    y += 10;

    // Dados do formulário
    doc.setFontSize(12);
    for (let [key, value] of data.entries()) {
        doc.text(${key}: ${value}, 10, y);
        y += 10;
        if (y > 280) { // Salta para nova página se necessário
            doc.addPage();
            y = 10;
        }
    }

    // Baixar PDF
    doc.save('relatorio_passagem_turno.pdf');
}

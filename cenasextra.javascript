function gerarPDF() {
    const form = document.getElementById('relatorioForm');
    const data = new FormData(form);

    const doc = new jsPDF();
    doc.text("Relatório de Passagem de Turno", 10, 10);

    for (let [key, value] of data.entries()) {
        doc.text(${key}: ${value}, 10, doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 20);
    }

    doc.save('relatorio.pdf');
}

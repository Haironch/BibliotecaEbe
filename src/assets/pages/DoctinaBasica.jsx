import React from "react";
import PDFList from "../components/PDFList";

const DoctinaBasica = () => {
  const pdfFiles = [
    "BAUTISMO CON EL ESPÍRITU - ED-1",
    "BAUTISMO EN AGUA - EDV",
    "EL DON DE PROFECIA I - ED24",
    "EL DON DE PROFECÍA II - ED",
    "EL MINISTERIO DE LA MUJER - ED",
    "EL SERVICIO - ED",
    "EL VELO",
    "FACETAS DEL BAUTISMO - EDV",
    "KOINONÍA - ED",
    "LA COBERTURA - ED",
    "LA EVOLUCIÓN DEL CRISTIANO - ED",
    "LA MINISTRACIÓN DEL ALMA - ED24",
    "LA SALVACIÓN - ED24",
    "LA SANTA CENA - ED",
    "LA SUJECIÓN - ED",
    "LOS BENEFICIOS DE LA SANGRE - ED",
    "LOS CINCO MINISTERIOS",
    "Los dones del Espíritu Santo II - ED (1)",
    "Los dones del Espirtu Santo I - ED-1",
    "Los Frutos del Espíritu Santo I",
    "LOS FRUTOS DEL ESPÍRITU SANTO II - ED",
    "LOS RECEPTORES - ED",
    "PESO, TRANSGRESIÓN, PECADO E INIQUIDAD - ED24",
  ].map((name) => ({
    name,
    path: `/documentos/doctrina-basica/${name}_compressed.pdf`,
  }));

  const handlePDFClick = (pdf) => {
    // Detectar si es iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // En iOS usamos un enlace temporal
      const link = document.createElement("a");
      link.href = pdf.path;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Para otros dispositivos intentamos window.open
      const newWindow = window.open(pdf.path, "_blank");

      // Si window.open falla (por ejemplo, si está bloqueado), usamos el método alternativo
      if (!newWindow) {
        window.location.href = pdf.path;
      }
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-green-500 text-center">
            Doctrina Básica
          </h1>
          <PDFList pdfs={pdfFiles} onPDFClick={handlePDFClick} />
        </div>
      </div>
    </div>
  );
};

export default DoctinaBasica;

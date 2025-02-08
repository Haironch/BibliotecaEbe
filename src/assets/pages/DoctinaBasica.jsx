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
    console.log("Abriendo:", pdf.path);
    window.open(pdf.path, "_blank");
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

import React from "react";
import PDFList from "../components/PDFList";

const DoctinaBasica = () => {
  const pdfFiles = [
    {
      name: "BAUTISMO CON EL ESPÍRITU - ED-1",
      path: "/documentos/doctrina-basica/BAUTISMO CON EL ESPIRITU.pdf",
    },
    {
      name: "BAUTISMO EN AGUA - EDV",
      path: "/documentos/doctrina-basica/BAUTISMO EN AGUA.pdf",
    },
    {
      name: "EL DON DE PROFECIA I - ED24",
      path: "/documentos/doctrina-basica/EL DON DE PROFECIA I.pdf",
    },
    {
      name: "EL DON DE PROFECÍA II - ED",
      path: "/documentos/doctrina-basica/EL DON DE PROFECIA II.pdf",
    },
    {
      name: "EL MINISTERIO DE LA MUJER - ED",
      path: "/documentos/doctrina-basica/EL MINISTERIO DE LA MUJER.pdf",
    },
    {
      name: "EL SERVICIO - ED",
      path: "/documentos/doctrina-basica/EL SERVICIO.pdf",
    },
    {
      name: "EL VELO",
      path: "/documentos/doctrina-basica/EL VELO.pdf",
    },
    {
      name: "FACETAS DEL BAUTISMO - EDV",
      path: "/documentos/doctrina-basica/FACETAS DEL BAUTISMO.pdf",
    },
    {
      name: "KOINONÍA - ED",
      path: "/documentos/doctrina-basica/KOINONIA.pdf",
    },
    {
      name: "LA COBERTURA - ED",
      path: "/documentos/doctrina-basica/LA COBERTURA.pdf",
    },
    {
      name: "LA EVOLUCIÓN DEL CRISTIANO - ED",
      path: "/documentos/doctrina-basica/LA EVOLUCION DEL CRISTIANO.pdf",
    },
    {
      name: "LA MINISTRACIÓN DEL ALMA - ED24",
      path: "/documentos/doctrina-basica/LA MINISTRACION DEL ALMA.pdf",
    },
    {
      name: "LA SALVACIÓN - ED24",
      path: "/documentos/doctrina-basica/LA SALVACION.pdf",
    },
    {
      name: "LA SANTA CENA - ED",
      path: "/documentos/doctrina-basica/LA SANTA CENA.pdf",
    },
    {
      name: "LA SUJECIÓN - ED",
      path: "/documentos/doctrina-basica/LA SUJECION.pdf",
    },
    {
      name: "LOS BENEFICIOS DE LA SANGRE - ED",
      path: "/documentos/doctrina-basica/LOS BENEFICIOS DE LA SANGRE.pdf",
    },
    {
      name: "LOS CINCO MINISTERIOS",
      path: "/documentos/doctrina-basica/LOS CINCO MINISTERIOS.pdf",
    },
    {
      name: "Los dones del Espíritu Santo II - ED (1)",
      path: "/documentos/doctrina-basica/Los dones del Espiritu Santo II.pdf",
    },
    {
      name: "Los dones del Espirtu Santo I - ED-1",
      path: "/documentos/doctrina-basica/Los dones del Espiritu Santo I.pdf",
    },
    {
      name: "Los Frutos del Espíritu Santo I",
      path: "/documentos/doctrina-basica/Los Frutos del Espiritu Santo.pdf",
    },
    {
      name: "LOS FRUTOS DEL ESPÍRITU SANTO II - ED",
      path: "/documentos/doctrina-basica/LOS FRUTOS DEL ESPIRITU SANTO II.pdf",
    },
    {
      name: "LOS RECEPTORES - ED",
      path: "/documentos/doctrina-basica/LOS RECEPTORES.pdf",
    },
    {
      name: "PESO, TRANSGRESIÓN, PECADO E INIQUIDAD - ED24",
      path: "/documentos/doctrina-basica/PESO, TRANSGRESION, PECADO E INIQUIDAD.pdf",
    },
  ];

  const handlePDFOpen = (pdf) => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      window.location.href = pdf.path;
    } else {
      const newWindow = window.open(pdf.path, "_blank");
      if (!newWindow) {
        window.location.href = pdf.path;
      }
    }
  };

  const handlePDFDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf.path;
    link.download = pdf.name + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-green-500 text-center">
            Doctrina Básica
          </h1>
          <PDFList
            pdfs={pdfFiles}
            onPDFOpen={handlePDFOpen}
            onPDFDownload={handlePDFDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctinaBasica;

import React from "react";
import { Download, BookOpen } from "lucide-react";

// Componente PDFCard para cada documento
const PDFCard = ({ pdf, onPDFOpen, onPDFDownload }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-slate-100">
      <h3 className="text-slate-700 font-medium mb-3 line-clamp-2 min-h-[48px]">
        {pdf.name}
      </h3>
      <div className="flex gap-2">
        <button
          onClick={() => onPDFOpen(pdf)}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">Abrir</span>
        </button>
        <button
          onClick={() => onPDFDownload(pdf)}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-200"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">Descargar</span>
        </button>
      </div>
    </div>
  );
};

// Componente PDFList mejorado
const PDFList = ({ pdfs, onPDFOpen, onPDFDownload }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pdfs.map((pdf, index) => (
        <PDFCard
          key={index}
          pdf={pdf}
          onPDFOpen={onPDFOpen}
          onPDFDownload={onPDFDownload}
        />
      ))}
    </div>
  );
};

const DoctinaBasica = () => {
  const pdfFiles = [
    {
      name: "BAUTISMO CON EL ESPÍRITU - ED-1",
      path: "/documentos/doctrina-basica/BAUTISMO CON EL ESPIRITU.pdf",
    },
    {
      name: "BAUTISMO EN AGUA - EDV",
      path: "/documentos/doctrina-basica/BAUTISMOENAGUA.pdf",
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
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 border border-slate-100">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-700 text-center">
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

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
    link.download = pdf.name + ".pdf"; // Nombre sugerido para la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-green-500 text-center">
            Doctrina Básica
          </h1>
          <div className="space-y-4">
            {pdfFiles.map((pdf, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <span className="text-lg text-gray-700">{pdf.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePDFOpen(pdf)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Abrir
                  </button>
                  <button
                    onClick={() => handlePDFDownload(pdf)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctinaBasica;

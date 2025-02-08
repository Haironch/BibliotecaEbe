import React, { useEffect, useState } from "react";
import PDFList from "../components/PDFList";

const DoctinaBasica = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const pdfModules = import.meta.glob([
      "/documentos/doctrina-basica/*.pdf",
      "../documentos/doctrina-basica/*.pdf",
      "../../documentos/doctrina-basica/*.pdf",
      "./documentos/doctrina-basica/*.pdf",
    ]);

    const files = Object.keys(pdfModules).map((path) => {
      const fileName = path.split("/").pop().replace("_compressed.pdf", "");
      const normalizedPath = path.startsWith("/") ? path : `/${path}`;
      return {
        name: fileName,
        path: normalizedPath,
      };
    });
    setPdfFiles(files);
  }, []);

  const handlePDFClick = (pdf) => {
    window.open(pdf.path, "_blank");
  };

  if (pdfFiles.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-8 text-green-500 text-center">
              Doctrina Básica
            </h1>
            <p className="text-gray-600 text-center text-lg">
              No se encontraron PDFs en la carpeta.
            </p>
          </div>
        </div>
      </div>
    );
  }

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

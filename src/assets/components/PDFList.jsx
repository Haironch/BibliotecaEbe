import React from "react";
import { FileText, Eye, Download } from "lucide-react";

const PDFList = ({ pdfs, onPDFOpen, onPDFDownload }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ul className="space-y-3">
        {pdfs.map((pdf, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100 hover:border-orange-200 group"
          >
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-orange-500 mr-4 group-hover:text-orange-600 transition-colors" />
              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                {pdf.name}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onPDFOpen(pdf)}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Abrir</span>
              </button>
              <button
                onClick={() => onPDFDownload(pdf)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;

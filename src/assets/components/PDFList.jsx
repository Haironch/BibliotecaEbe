import React from "react";
import { FileText } from "lucide-react";

const PDFList = ({ pdfs, onPDFClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ul className="space-y-3">
        {pdfs.map((pdf, index) => (
          <li
            key={index}
            className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-orange-100 hover:border-orange-200 group"
            onClick={() => onPDFClick(pdf)}
          >
            <FileText className="w-6 h-6 text-orange-500 mr-4 group-hover:text-orange-600 transition-colors" />
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
              {pdf.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;

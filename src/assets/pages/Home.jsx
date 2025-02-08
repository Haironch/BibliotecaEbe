import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full bg-[#2F4045]">
      {/* Header con título principal - reducido el padding */}
      <div className="text-center py-6 mb-4">
        <h1 className="text-4xl font-bold text-white mb-2">
          Biblioteca Ebenezer
        </h1>
        <p className="text-lg text-gray-200">
          Recursos para el crecimiento espiritual
        </p>
      </div>

      {/* Contenedor de las dos opciones - ajustado el padding y gap */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 py-4">
        {/* Doctrina Básica */}
        <div className="bg-[#2F4045] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-2 border-white/20 flex flex-col items-center space-y-3 cursor-pointer group">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Doctrina Básica</h2>
          <p className="text-gray-200 text-center text-sm">
            Fundamentos esenciales de nuestra fe para nuevos creyentes y
            aquellos que desean fortalecer sus bases bíblicas.
          </p>
          <Link
            to="/doctrina-basica"
            className="mt-2 px-5 py-1.5 bg-white text-[#2F4045] rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Acceder
          </Link>
        </div>

        {/* Doctrina Avanzada */}
        <div className="bg-[#2F4045] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-2 border-white/20 flex flex-col items-center space-y-3 cursor-pointer group">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Doctrina Avanzada</h2>
          <p className="text-gray-200 text-center text-sm">
            Estudios profundos de teología, hermenéutica y doctrina para
            aquellos que buscan un entendimiento más profundo.
          </p>
          <button className="mt-2 px-5 py-1.5 bg-white text-[#2F4045] rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Acceder
          </button>
        </div>
      </div>

      {/* Versículo o cita inspiracional - reducido el padding */}
      <div className="text-center py-6 mt-4">
        <blockquote className="text-base italic text-gray-200">
          "Procura con diligencia presentarte a Dios aprobado, como obrero que
          no tiene de qué avergonzarse, que usa bien la palabra de verdad."
        </blockquote>
        <cite className="text-gray-300 block mt-1">- 2 Timoteo 2:15</cite>
      </div>
    </div>
  );
}

export default Home;

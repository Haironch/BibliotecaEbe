import { Outlet, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#2F4045] flex flex-col">
      {/* Header */}
      <header className="bg-[#243236] shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            Biblioteca Ebenezer
          </Link>
          <div className="flex items-center gap-4">
            {!isHome ? (
              <Link
                to="/"
                className="flex items-center text-gray-200 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Regresar
              </Link>
            ) : (
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition-colors"
              ></Link>
            )}
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#243236] border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
          <p className="text-gray-300">
            © 2024 Iglesia Ebenezer. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;

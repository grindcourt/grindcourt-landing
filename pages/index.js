export default function GrindCourtLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Grind Court</h1>
        <nav className="space-x-4 text-sm">
          <a href="#services" className="hover:text-blue-600">Servicios</a>
          <a href="#about" className="hover:text-blue-600">Quiénes somos</a>
          <a href="#contact" className="hover:text-blue-600">Contacto</a>
        </nav>
      </header>

      <section className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4">Automatiza. Optimiza. Acelera tu negocio.</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          En <strong>Grind Court</strong> ayudamos a empresas a ahorrar tiempo, digitalizar procesos y escalar sin contratar más personal.
        </p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">Solicita una demo gratuita</a>
      </section>

      <section id="services" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Nuestros Packs</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-2xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Pack Starter – Eficiencia Express</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>Optimización de Google My Business</li>
              <li>Automatización de tareas repetitivas</li>
              <li>Dashboard básico en Google Sheets</li>
              <li>Plantillas de comunicación internas</li>
            </ul>
            <p className="mt-4 font-semibold">Desde 350 €</p>
          </div>

          <div className="border p-6 rounded-2xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Pack Pro – Automatiza y Crece</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>Todo lo del Pack Starter</li>
              <li>Dashboard profesional (Data Studio)</li>
              <li>Onboarding digital para empleados</li>
              <li>Sistema de gestión interna en Notion</li>
              <li>Automatización de seguimiento de clientes</li>
            </ul>
            <p className="mt-4 font-semibold">Desde 800 €</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-6">¿Quiénes somos?</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          En Grind Court no vendemos páginas web: diseñamos sistemas que te hacen más eficiente. Nos apoyamos en IA, automatización y herramientas digitales para transformar tus procesos sin que tengas que contratar más personal.
        </p>
      </section>

      <section id="contact" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-6">¿Hablamos?</h3>
        <p className="text-center text-gray-700 mb-6">Agenda una llamada o solicita tu demo gratuita. Respondemos en menos de 24 horas.</p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Tu nombre" className="border rounded-xl px-4 py-3 w-full" />
          <input type="email" placeholder="Tu correo electrónico" className="border rounded-xl px-4 py-3 w-full" />
          <textarea placeholder="Cuéntanos qué necesitas" className="border rounded-xl px-4 py-3 w-full"></textarea>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition">Enviar</button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © 2025 Grind Court – Agencia de eficiencia digital
      </footer>
    </main>
  );
}
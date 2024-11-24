"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para el spinner

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return; // Si no hay formulario, no hacemos nada

    setIsLoading(true); // Activamos el spinner

    try {
      const result = await emailjs.sendForm(
        "service_cg2jt4l", // Reemplaza con tu Service ID de EmailJS
        "template_ren4i0b", // Reemplaza con tu Template ID de EmailJS
        form.current, // Referencia al formulario
        "kfk7NXzjf2jUPIPPA" // Reemplaza con tu User ID de EmailJS
      );

      console.log("Correo enviado:", result.text);
      alert("¡Correo enviado con éxito! 🚀");
    } catch (error) {
      console.error("Error al enviar el correo:", error);

      // Manejo de errores con más detalle
      if (error instanceof Error) {
        alert(
          `Hubo un error al enviar el correo. 😥\nDetalles: ${error.message}`
        );
      } else {
        alert("Hubo un error al enviar el correo. 😥");
      }
    } finally {
      setIsLoading(false); // Desactivamos el spinner
    }
  };

  return (
    <div className="isolate bg-white flex items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8">
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Contenedor del formulario */}
      <div className="max-w-[800px] w-full">
        {/* Encabezado */}
        <div className="mx-0 max-w-full text-left">
          <h1 className="h1-contact text-[3.5rem] font-bold text-left text-gray-800 my-20 mx-auto max-w-[800px]">
            <span className="c">C</span>ontact
          </h1>
          <p className="mt-2 text-lg/8 text-black text-left mx-0 max-w-full">
            Contact me and let's start creating something amazing!
          </p>
        </div>

        {/* Formulario */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-full sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="firstName">
              <label
                htmlFor="first-name"
                className="block text-left font-semibold text-gray-900"
              >
                First name
              </label>
              <input
                id="first-name"
                name="user_firstname"
                type="text"
                autoComplete="given-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0] first-name-input"
              />
            </div>
            <div className="lastName">
              <label
                htmlFor="last-name"
                className="block text-left font-semibold text-gray-900"
              >
                Last name
              </label>
              <input
                id="last-name"
                name="user_lastname"
                type="text"
                autoComplete="family-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-black focus:ring-1 focus:ring-[#1848a0] last-name-input"
              />
            </div>
            <div className="company sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-left font-semibold text-gray-900"
              >
                Company
              </label>
              <input
                id="company"
                name="user_company"
                type="text"
                autoComplete="organization"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0] company-input"
              />
            </div>
            <div className="email sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-left font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                autoComplete="email"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0] email-input"
              />
            </div>
            <div className="message sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-left font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0] message-input"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="send block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-1 focus:ring-[#1848a0]"
            >
              {isLoading ? "Sending..." : "Let's Talk"}{" "}
              {/* Cambiar texto según estado */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

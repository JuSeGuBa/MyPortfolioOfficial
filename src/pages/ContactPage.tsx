"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const firstName = formData.get("user_firstname") as string;
    const lastName = formData.get("user_lastname") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    // Validación de campos obligatorios
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_yoapk2c", // Reemplázalo con tu Service ID de EmailJS
        "template_ren4i0b", // Reemplázalo con tu Template ID de EmailJS
        form.current, // Referencia al formulario
        "kfk7NXzjf2jUPIPPA" // Reemplázalo con tu Public Key de EmailJS
      );

      console.log("Correo enviado:", result.text);
      alert("¡Correo enviado con éxito! 🚀");

      form.current.reset();
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo. 😥");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="isolate flex items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-[800px] w-full">
        <div className="mx-0 max-w-full text-left">
          <h1 className="h1-contact text-[3.5rem] font-bold text-left text-gray-800 my-20 mx-auto max-w-[800px]">
            <span className="c">C</span>ontact
          </h1>
          <p className="mt-2 text-lg/8 text-black text-left mx-0 max-w-full">
            Contact me and let's start creating something amazing!
          </p>
        </div>

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
                First name <sup>*</sup>
              </label>
              <input
                id="first-name"
                name="user_firstname"
                type="text"
                autoComplete="given-name"
                required
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0]"
              />
            </div>
            <div className="lastName">
              <label
                htmlFor="last-name"
                className="block text-left font-semibold text-gray-900"
              >
                Last name <sup>*</sup>
              </label>
              <input
                id="last-name"
                name="user_lastname"
                type="text"
                autoComplete="family-name"
                required
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-black focus:ring-1 focus:ring-[#1848a0]"
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
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0]"
              />
            </div>
            <div className="email sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-left font-semibold text-gray-900"
              >
                Email <sup>*</sup>
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                autoComplete="email"
                required
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0]"
              />
            </div>
            <div className="message sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-left font-semibold text-gray-900"
              >
                Message <sup>*</sup>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1848a0]"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isLoading}
              className={`send block w-full rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500"
              } focus:ring-1 focus:ring-[#1848a0]`}
            >
              {isLoading ? "Sending..." : "Let's Talk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

import "../styles/Footer.css";
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1848A0]">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* Footer Bottom Section */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-[#1848A0] py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a
              href="#"
              className="fooName h-6 w-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sebastian Guzman
            </a>
            . All Rights Reserved.
          </Typography>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Facebook */}
            <Typography
              as="a"
              href="https://www.facebook.com/profile.php?id=100062536004855&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook  transition-opacity hover:opacity-100"
            >
              <img
                src="/logos/facebook.svg" // Ruta al archivo dentro de la carpeta public
                alt="Facebook logo"
                className="h-6 w-6"
              />
            </Typography>
            {/* Instagram */}
            <Typography
              as="a"
              href="https://www.instagram.com/sebas_g.b43/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram  transition-opacity hover:opacity-100"
            >
              <img
                src="/logos/instagram.svg" // Ruta al archivo dentro de la carpeta public
                alt="Instagram logo"
                className="h-6 w-6"
              />
            </Typography>
            {/* LinkedIn */}
            <Typography
              as="a"
              href="https://www.linkedin.com/in/sebastian-guzman-57023b33a/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkendin  transition-opacity hover:opacity-100"
            >
              <img
                src="/logos/linkendin.svg" // Ruta al archivo dentro de la carpeta public
                alt="LinkedIn logo"
                className="h-6 w-6"
              />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

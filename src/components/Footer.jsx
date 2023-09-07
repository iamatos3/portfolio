import { links } from "../data";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-center items-center">
        <h2 className="text-3xl font-bold">
          I<span className="text-emerald-600">M</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                onClick={id === 1 ? scrollToTop : null}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-center py-4">
        <div className="flex flex-col items-center justify-center">
          <p>
            Copyright &copy; Ian Matos
          </p>
          <p>
            <span className="text-emerald-900">{new Date().getFullYear()}</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

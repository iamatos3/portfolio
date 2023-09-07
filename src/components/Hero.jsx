import heroImg from '../assets/portrait.jpg';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            Ian Matos
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full-Stack Software Engineer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/iamatos3/' title='GitHub' target="_blank">
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/iamatos/' title='LinkedIn' target="_blank">
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.instagram.com/iamatos3/' title='Instagram' target="_blank">
              <FaInstagramSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#' title='Download Resume' download>
              <BsDownload className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='border-2 border-black rounded-full w-full h-full max-w-xs transition-transform transform hover:scale-105' />
        </article>
      </div>
    </div>
  );
};

export default Hero;

import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am a motivated Software Engineer with a passion for crafting efficient and user-friendly applications. Proficient in coding, debugging, and problem-solving, with a strong foundation in programming languages such as JavaScript and Mongo. Dedicated to continuous learning and staying up-to-date with industry trends. Collaborative team player with excellent communication skills and a keen eye for detail. Excited to contribute creativity and innovation to projects while further developing technical expertise.
          </p>
          <p className='text-slate-600 mt-8 leading-loose'>
            Beyond the world of coding, I enjoy creating memories with my two furry companions (essentially... they're my children), Kai and Mika, as we embark on adventures, ranging from leisurely strolls to challenging hikes. Additionally, my passion for soccer, or football depending on your location, leads me to dedicate part of my leisure hours to following the sport's leagues and tournaments. I'm also an enthusiast of movies and relish the opportunity to explore new destinations whenever possible. 
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

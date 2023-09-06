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
            kldak lkjdlkfjadk lkdjflkadj kd kdjkfd kssk ksdjdla kdfkda kdlfdakldfakl dklfadkfakldlkfd kdljfakdlflkdajlf akldkafkdaldlkaslksflskdklslask kklajkdaskskj skds jsks jfksjds ksdjfkdlsjlks lkdjfslkslkjs ljsls.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

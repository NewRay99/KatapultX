// components
import EventsSlider from '../../components/EventsSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Layout from '../../components/Layout';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Experience from '../../components/Experience';

const events = () => {
  return (
        <div className='h-screen bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='h-1/5 bg-slate-500 py-36 flex items-center overflow-y-scroll'>
        <Experience/>
     </div>
  </div>
  )

       
};

export default events;

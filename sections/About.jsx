'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Узнай Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse </span>
        это новая вещь в будущем, где вы можете наслаждаться виртуальным миром,
        чувствуя, что он действительно реален, вы можете чувствовать то, что вы
        чувствуете в этом мире метавселенной, потому что это действительно
        <span className="font-extrabold text-white">
          безумие метавселенной{' '}
        </span>
        сегодняшнего дня, используя только
        <span className="font-extrabold text-white"> VR </span>
        устройств вы можете легко исследовать мир метавселенной, который вы
        хотите, превратить свои мечты в реальность. Давайте
        <span className="font-extrabold text-white"> исследовать</span>
        безумие метавселенной, прокрутив вниз
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[38px]"
      />
    </motion.div>
  </section>
);

export default About;

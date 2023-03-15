import { motion } from 'framer-motion'
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { testimonials } from '../constants';

const FeedbackCard = (props: { testimonial: typeof testimonials[0], index: number }) => {
  const { testimonial, index } = props
  return (
    <motion.div variants={fadeIn('', 'spring', index * .5, .75)}
      className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-5xl'>"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-xl'>{testimonial.testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-lg'><span className='blue-text-gradient'>@</span>{testimonial.name}</p>
            <p className='mt-1 text-secondary text-xs'>{testimonial.designation} of {testimonial.company}</p>
          </div>

          <img src={testimonial.image} alt={`$feedback-{testimonial.name}`}
            className='w-12 h-12 rounded-full object-cover'
          ></img>
        </div>
      </div>
    </motion.div >
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-md'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant('')}>
          <p className={styles.sectionSubText}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map((testimonial, index) => {
            return (
              <FeedbackCard key={testimonial.name} index={index} testimonial={testimonial} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')

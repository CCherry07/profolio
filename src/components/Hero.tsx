import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9153ff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi,&nbsp;&nbsp;I'm<span className="text-[#9153ff]">Cherry7</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a fan of the React technology stack and <br />
            a code perfectionist.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero

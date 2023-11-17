import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { artworks } from '../constants'



const ArtworkCard=({name,image})=>{
  return(
    <div
    className='bg-black-200 items-center justify-center'
    >
      <div className='h-96 w-96'>
        <img 
          src={image}
          alt={name}
          className='h-full w-full object-contain'
        />

      </div>
    </div>
  )

}


const Artworks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>I also make sketches, digital art, pencil carvings.</p>
          <h2 className={styles.sectionHeadText}>Artworks.</h2>
        </motion.div>
      </div>


      <div className={`${styles.paddingX}  -mt-20 pb-14 w-full overflow-x-auto flex flex-nowrap gap-7`}>
          {artworks.map((artwork,index)=>(
            <ArtworkCard 
              key={index}
              {...artwork}
            />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Artworks,"")
import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = ()=>{
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/Saroj.jpg" 
                    alt="An image showing Saroj" 
                    width={300} 
                    height={300}
                />
            </div>
            <h1>Hi, I'm Saroj</h1>
            <p>I blog about web development- especially frontend frameworks like React</p>
        </section>
    )
}

export default Hero;
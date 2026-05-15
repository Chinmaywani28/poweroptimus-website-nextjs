import Link from 'next/link';
// import './card-grid-section..module.css';
import styles from './card-grid-section.module.css';


type CardData = {
  imageSrc: string[];
  title: string;
  description?: string;
  date: string;
  linkText: string;
  linkHref?: string;
};

type Props = {
  cards: CardData[];
};

export const CardGridSection = ({cards}: Props) => {
  return (
    // <section
    // className={styles["card-grid-section"]}>
    //   <div className={styles["card-grid"]}>
    //     {cards.map((card: any, index:any) => (
    //       <div className={styles["card"]} key={index}>
    //         <img src={card.imageSrc} alt={card.title} className={styles["card-image"]}/>
    //         <div className="Header3 TextBlue marTopGlobal">{card.title}</div>
    //         <div className="body2 marTopGlobal">{card.description}</div>
    //         <div className={styles["card-footer"]}>
    //           <span className="body2" style={{color: '#666'} }>{card.date}</span>
    //           <Link href={card.linkHref} className={`${styles["card-link"]} body2`} target="_blank">
    //             {card.linkText} <span className="body2">→</span>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>


    // <section
    // className={styles["card-grid-section"]}>

    // {cards.map((card: any, index:any) => (

    //     <div className={styles["card-grid"]} key={index}>
    //       <Link href={card.linkHref} target="_blank" style={{ textDecoration: "none" }}>


    //       <div className={styles["card"]} key={index}>


    //         <img src={card.imageSrc} alt={card.title} className={styles["card-image"]}/>
    //         <div className="Header3 TextBlue marTopGlobal">{card.title}</div>
    //         <div className="body2 marTopGlobal">{card.description}</div>
    //         <div className={styles["card-footer"]}>
    //           <span className="body2" style={{color: '#666'} }>{card.date}</span>
    //           <div  className={`${styles["card-link"]} body2`}>
    //              {card.linkText} <span className="body2">→</span>
    //          </div>
    //         </div>
            
    //       </div>


    //   </Link>
    //     </div>
        

          


    //     ))}

      
    // </section>

    // newly done third for one line grid
    <section className={styles["card-grid-section"]}>

  <div className={styles["card-grid"]}>   {/* ✅ ONE GRID */}

    {cards.map((card: any, index: any) => (
      <Link href={card.linkHref} target="_blank" key={index} style={{ textDecoration: "none" }}>

        <div className={styles["card"]}>

              <img 
              src={card.imageSrc[index]} 
              alt={card.title} 
                className={styles["card-image"]}
              />

          
          {/* <img src={card.imageSrc} alt={card.title} className={styles["card-image"]}/> */}
          
          <div className="Header3 TextBlue marTopGlobal">{card.title}</div>
          
          {/* <div className="body2 marTopGlobal">{card.description}</div> */}
          
          <div className={styles["card-footer"]}>
            <span className="body2" style={{color: '#666'} }>{card.date}</span>
            
            <div className={`${styles["card-link"]} body2`}>
              {card.linkText} <span>→</span>
            </div>
          </div>

        </div>

      </Link>
    ))}

  </div>

</section>

  );
};


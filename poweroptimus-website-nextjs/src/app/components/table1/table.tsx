import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './table1.css'; // Import HomePage specific styles

// function Table1() {
//   const { t } = useTranslation(); // Initialize translation hook

//   return (
//     <div className="Table1_home_container">
//       <div className="Table1home">
//         <div className="T1HeaderTable1">
//           <div className="Header2 TextBlue">
//             {t('Table1Header')}
//           </div>
//         </div>

//         <div className="T1HeaderTable2">
//           <div className="Header3 TextGreen">
//             {t('Table1point1Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table1point1Body')}
//           </div>
//         </div>


//         <div className="T1HeaderTable3">
//           <div className="Header3 TextGreen">
//             {t('Table1point2Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table1point2Body')}
//           </div>
//         </div>

//         <div className="T1HeaderTable4">
//           <div className="Header3 TextGreen">
//             {t('Table1point3Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table1point3Body')}
//           </div>
//         </div>

        
//         <div className="T1HeaderTable5">
//           <div className="Header3 TextGreen">
//             {t('Table1point4Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table1point4Body')}
//           </div>
//         </div>

//         <div className="T1HeaderTable6">
//           <div className="Header3 TextBlue">
//             {t('Table1footer')}
//           </div>
//         </div>





       
//       </div>
//     </div>
//   );
// }

// export default Table1;


const Table = () => {
  const { t } = useTranslation(); // Initialize translation hook
  
  return (
    <div className="Table1_home_container">
      <div className="Table1home">
        <div className="T1HeaderTable1">
          <div className="Header2 TextBlue">
            {t('Table1Header')}
          </div>
        </div>

        <div className="T1HeaderTable2">
          <div className="Header3 TextGreen">
            {t('Table1point1Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table1point1Body')}
          </div>
        </div>


        <div className="T1HeaderTable3">
          <div className="Header3 TextGreen">
            {t('Table1point2Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table1point2Body')}
          </div>
        </div>

        <div className="T1HeaderTable4">
          <div className="Header3 TextGreen">
            {t('Table1point3Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table1point3Body')}
          </div>
        </div>

        
        <div className="T1HeaderTable5">
          <div className="Header3 TextGreen">
            {t('Table1point4Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table1point4Body')}
          </div>
        </div>

        <div className="T1HeaderTable6">
          <div className="Header3 TextBlue">
            {t('Table1footer')}
          </div>
        </div>





       
      </div>
    </div>
  )
}

export default Table

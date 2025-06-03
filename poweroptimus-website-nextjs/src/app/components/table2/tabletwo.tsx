import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './table2.css'; // Import HomePage specific styles

// function Table2() {
//   const { t } = useTranslation(); // Initialize translation hook

//   return (
//     <div className="Table2_home_container">
//       <div className="Table2home">
//         <div className="HeaderTable1">
//           <div className="Header2 TextBlue">
//             {t('Table2Header')}
//           </div>
//         </div>

//         <div className="HeaderTable2">
//           <div className="Header3 TextGreen">
//             {t('Table2point1Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table2point1Body')}
//           </div>
//         </div>


//         <div className="HeaderTable3">
//           <div className="Header3 TextGreen">
//             {t('Table2point2Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table2point2Body')}
//           </div>
//         </div>

//         {/* <div className="HeaderTable4">
//           <div className="Header3 TextGreen">
//             {t('Table2point3Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table2point3Body')}
//           </div>
//         </div>

        
//         <div className="HeaderTable5">
//           <div className="Header3 TextGreen">
//             {t('Table2point4Header')}
//           </div>
//           <div className="body2 TextGray2">
//             {t('Table2point4Body')}
//           </div>
//         </div> */}

//         <div className="Table2HeaderTable6">
//           <div className="Header3 TextBlue">
//             {t('Table2footer')}
//           </div>
//         </div>





       
//       </div>
//     </div>
//   );
// }

// export default Table2;


const TableTwo = () => {

  const { t } = useTranslation(); // Initialize translation hook
  return (
    <div className="Table2_home_container">
      <div className="Table2home">
        <div className="HeaderTable1">
          <div className="Header2 TextBlue">
            {t('Table2Header')}
          </div>
        </div>

        <div className="HeaderTable2">
          <div className="Header3 TextGreen">
            {t('Table2point1Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table2point1Body')}
          </div>
        </div>


        <div className="HeaderTable3">
          <div className="Header3 TextGreen">
            {t('Table2point2Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table2point2Body')}
          </div>
        </div>

        {/* <div className="HeaderTable4">
          <div className="Header3 TextGreen">
            {t('Table2point3Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table2point3Body')}
          </div>
        </div>

        
        <div className="HeaderTable5">
          <div className="Header3 TextGreen">
            {t('Table2point4Header')}
          </div>
          <div className="body2 TextGray2">
            {t('Table2point4Body')}
          </div>
        </div> */}

        <div className="Table2HeaderTable6">
          <div className="Header3 TextBlue">
            {t('Table2footer')}
          </div>
        </div>





       
      </div>
    </div>
  )
}

export default TableTwo
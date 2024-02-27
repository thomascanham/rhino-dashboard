import styled from 'styled-components';
import priceList from '../data/priceList';
import formatMoney from '../lib/formatMoney';

export default function PriceListPageTemp() {
  return (
    <div className="container">
      <p>Temp</p>
    </div>
  );
}

// export default function PriceList() {
//   return (
//     <div className="container">
//       <section>
//         <h2>Price List</h2>

//         {priceList.map((item, i) => {
//           const { title, options, additional } = item;

//           return (
//             <PriceListStyles key={i}>
//               <h3>{title}</h3>
//               <ul>
//                 {options.map((option, index) => (
//                   <li key={index}>
//                     {option.name}: {formatMoney(option.price)}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="additional">
//                 {additional.map((additionalItem, indexList) => (
//                   <li key={indexList}>
//                     {additionalItem.name}: {formatMoney(additionalItem.price)}
//                   </li>
//                 ))}
//               </ul>
//             </PriceListStyles>
//           );
//         })}
//       </section>
//     </div>
//   );
// }

// const PriceListStyles = styled.div`
//   margin-top: 60px;
//   h3 {
//     margin-bottom: 30px;
//   }
//   ul {
//     list-style: none;
//     &.additional {
//       li {
//         padding-left: 60px;
//       }
//     }
//     li {
//       padding: 15px 0 5px 30px;
//     }
//   }
// `;

import styled from 'styled-components';
import { TiTick } from 'react-icons/ti';

import PageLinks from '../components/buyingGuide/PageLinks';
import Introduction from '../components/buyingGuide/Introduction';
import Benefits from '../components/buyingGuide/Benefits';
import Compare from '../components/buyingGuide/Compare';

export default function GridPageTemp() {
  return (
    <div className="container">
      <p>Placeholder</p>
    </div>
  );
}

// export default function Grid() {
//   return (
//     <>
//       <PageLinks />
//       <Introduction />
//       <Benefits />
//       <Compare />
//       <div className="container">
//         <TableStyles>
//           <tr>
//             <th style={{ width: '50%,' }}>Features</th>
//             <th>Boot Area Liner</th>
//             <th>Up To Front Liner</th>
//             <th>Two Part Extendable Liner</th>
//           </tr>

//           <tr>
//             <td>
//               Covers the boot area
//               <sub>
//                 Our Boot Liners cover the boot floor, The sides and up the back
//                 of the seats. Comes with a flap for the rear bumper too
//               </sub>
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>-</td>
//             <td>-</td>
//           </tr>

//           <tr>
//             <td>
//               Covers boot and up to front seats when rear seats are folded
//               <sub>
//                 {' '}
//                 Up To Front Boot Liners cover the full boot area and then
//                 extends up to the front seats when the rear seats are folded
//                 permanently
//               </sub>
//             </td>
//             <td>-</td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//           </tr>

//           <tr>
//             <td>
//               Covers boot and up to front seats when rear seats are folded
//               <sub>
//                 The two part covers the full boot area and then exteneds to fit
//                 up to the front seats
//               </sub>
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//           </tr>

//           <tr>
//             <td>
//               Fully Waterproof
//               <sub>
//                 All of our products are made from a hard wearing durable water
//                 proof metaerial
//               </sub>
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//           </tr>

//           <tr>
//             <td>
//               Hand made to each model of vehicle
//               <sub>
//                 We measure and keep patterns for all vehicles so our product is
//                 not a one size fits all
//               </sub>
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//           </tr>

//           <tr>
//             <td>
//               Available in different colours
//               <sub>We offer 13 diffrent colours for our bootliner</sub>
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//             <td>
//               <TiTick className="tick" />
//             </td>
//           </tr>
//         </TableStyles>
//       </div>
//     </>
//   );
// }

// const TitleStyles = styled.h2`
//   padding: 60px 0;
// `;

// const TableStyles = styled.table`
//   border-collapse: collapse;
//   border-spacing: 0;
//   width: 100%;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   margin-bottom: 120px;
//   th,
//   td {
//     text-align: center;
//     padding: 16px;
//   }
//   th:first-child,
//   td:first-child {
//     text-align: left;
//   }
//   tr:nth-child(even) {
//     background-color: #f2f2f2;
//   }
//   .tick {
//     fill: green;
//     font-size: 28px;
//   }
//   sub {
//     display: block;
//     color: gray;
//     padding-left: 10px;
//   }
// `;

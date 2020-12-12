import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../../services';
// const NewsItem = ({ news }) => {
//   const { date, activity } = news[0];
//   return (
//     <div>
//       <h3>{date}</h3>
//       {activity.map((data) => {
//         return (
//           <div key={data.url}>
//             <a href={data.url}>
//               <h5>{data.title}</h5>
//             </a>
//             <p>{data.desc}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const DetailProduct = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { dateId } = params;
  console.log(dateId);
  // auth
  //   .productId(dateId)
  //   .then((res) => {
  //     console.log(res.data);
  //     setDetailProduct(res.data);
  //     setIsLoading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     setIsLoading(false);
  //   });

  return (
    <div className="center_view">
      <h2> Info Detail</h2>
    </div>
  );
};

export default DetailProduct;

// import { useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const useScrollToTop = () => {
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/products/id/${id}`);
//             } catch (error) {
//                 console.error('Lỗi khi lấy dữ liệu: ', error.response);
//             }
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         };

//         fetchData();
//     }, [id]);
// };

// export default useScrollToTop;

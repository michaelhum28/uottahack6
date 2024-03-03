// import React, { useState, useEffect } from 'react';
// import Card from './card';

// const CourseList = () => {
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         // Fetch data from the backend API
//         fetch('/courses')
//             .then(response => response.json())
//             .then(data => setCourses(data))
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div>
//             {courses.map((course, index) => (
//                 <Card key={index} name={course.name} description={course.description} />
//             ))}
//         </div>
//     );
// };

// export default CourseList;

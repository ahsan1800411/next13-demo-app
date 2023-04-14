'use client';
import { useEffect, useState } from 'react';
import CourseSearch from './components/CourseSearch';
import Courses from './components/courses';
import LoadingPage from './loading';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Welcome to Next.js 13</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;

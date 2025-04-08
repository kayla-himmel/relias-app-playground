export const filterCoursesByTitle = (courses: any[], searchQuery: string): any[] => {
  if (!searchQuery.trim()) {
    return courses;
  }
  
  const normalizedQuery = searchQuery.toLowerCase().trim();
  
  return courses.filter(course => 
    course.title.toLowerCase().includes(normalizedQuery)
  );
};
 
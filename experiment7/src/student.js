function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default Student;
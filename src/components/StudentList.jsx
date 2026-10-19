import StudentCard from "./StudentCard.jsx";

function StudentList({ students, onView }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 justify-content-center">
      {students.map((student) => (
        <div className="col" key={student.id}>
          <StudentCard student={student} onView={onView} />
        </div>
      ))}
    </div>
  );
}

export default StudentList;

import avatar from "../data/avatar.js";

function StudentCard({ student, onView }) {
  const { id, name, major, year, gpa } = student;

  return (
    <div className="card h-100 student-card">
      <img src={avatar} className="card-img-top avatar" alt={`${name} avatar`} />
      <div className="card-body">
        <h5 className="card-title fs-6">{name}</h5>
        <p className="card-text mb-3">
          ID: {id}
          <br />
          Major: {major}
          <br />
          Year: {year}
          <br />
          GPA: {gpa.toFixed(1)}
        </p>
        <div className="d-flex flex-wrap gap-1">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => onView(student)}
          >
            View Profile
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;

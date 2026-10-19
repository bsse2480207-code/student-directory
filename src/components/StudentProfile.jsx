import avatar from "../data/avatar.js";

function StudentProfile({ student, onBack }) {
  const { id, name, major, year, gpa } = student;

  return (
    <div className="card student-card mx-auto" style={{ maxWidth: "600px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-100 h-100 rounded-start"
            style={{ objectFit: "cover", minHeight: "180px" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">Student ID: {id}</li>
              <li className="list-group-item">Major: {major}</li>
              <li className="list-group-item">Year: {year}</li>
              <li className="list-group-item">GPA: {gpa.toFixed(1)}</li>
            </ul>
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onBack}>
              Back to Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;

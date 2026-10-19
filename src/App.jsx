import { useState } from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import BreadcrumbNav from "./components/BreadcrumbNav.jsx";
import PageHeader from "./components/PageHeader.jsx";
import StudentList from "./components/StudentList.jsx";
import StudentProfile from "./components/StudentProfile.jsx";
import PaginationBar from "./components/PaginationBar.jsx";
import StatusAlert from "./components/StatusAlert.jsx";
import Footer from "./components/Footer.jsx";
import students from "./data/students.js";

const PAGE_SIZE = 4;

function App() {
  const [currentPage, setCurrentPage] = useState(1); // which pagination page is open
  const [selectedStudent, setSelectedStudent] = useState(null); // student whose profile is open
  const [message, setMessage] = useState("Student records have been successfully updated.");

  // Pagination: pick only the students of the current page
  const totalPages = Math.ceil(students.length / PAGE_SIZE);
  const visible = students.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const backToDirectory = () => setSelectedStudent(null);

  return (
    <>
      <AppNavbar />

      <main className="container py-3">
        {selectedStudent ? (
          <>
            <BreadcrumbNav
              items={[
                { label: "Home" },
                { label: "Students", onClick: backToDirectory },
                { label: "Profile" },
              ]}
            />
            <PageHeader title="Student Profile" />
            <StudentProfile student={selectedStudent} onBack={backToDirectory} />
          </>
        ) : (
          <>
            <BreadcrumbNav
              items={[{ label: "Home" }, { label: "Students" }, { label: "Directory" }]}
            />
            <PageHeader title="Page Header" buttonLabel="Add New Student" />
            <StudentList students={visible} onView={setSelectedStudent} />
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
        <StatusAlert message={message} onClose={() => setMessage("")} />
      </main>

      <Footer />
    </>
  );
}

export default App;

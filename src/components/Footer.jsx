function Footer() {
  return (
    <footer className="site-footer mt-4 pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <h6>Links</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#">Home</a></li>
              <li><a href="#">Computer Science</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h6>Contact Info</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">+1: 123 456 7890</a></li>
              <li><a href="mailto:trm@studentportal.com">trm@studentportal.com</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center small mt-3 mb-0">
          &copy; 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

function StatusAlert({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      className="alert alert-info alert-dismissible small py-2 mt-4 mb-4"
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default StatusAlert;

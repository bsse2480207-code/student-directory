function PageHeader({ title, buttonLabel, onButtonClick }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
      <h1 className="page-title mb-0">{title}</h1>
      {buttonLabel && (
        <button type="button" className="btn btn-navy btn-sm" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default PageHeader;

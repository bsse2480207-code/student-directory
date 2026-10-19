// items = [{ label: "Home" }, { label: "Students", onClick: fn }, { label: "Directory" }]
// The last item is the current page.
function BreadcrumbNav({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-dark rounded px-3 py-2 mb-3 breadcrumb-dark">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.label}
              className={`breadcrumb-item small ${isLast ? "active fw-bold text-white" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                item.label
              ) : (
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick) item.onClick();
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
      <style>{`.breadcrumb-dark { --bs-breadcrumb-divider-color: #fff; }`}</style>
    </nav>
  );
}

export default BreadcrumbNav;

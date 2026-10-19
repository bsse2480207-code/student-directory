# Student Directory (React + Bootstrap)

A student directory page built with React components/props and Bootstrap 5
(Navbar, Breadcrumb, Cards, Buttons, Pagination, Alert, responsive Grid).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3001

## Components
- `AppNavbar` – brand, links, Settings dropdown, search
- `BreadcrumbNav` – Home / Students / Directory
- `PageHeader` – title + Add New Student button
- `StudentList` → `StudentCard` – responsive grid of cards (props: student, onDelete, onView)
- `PaginationBar` – Previous / 1 2 3 / Next
- `StatusAlert` – dismissible success alert
- `Footer`

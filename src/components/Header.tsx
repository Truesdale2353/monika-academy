import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full nav-container sticky top-0 z-40 bg-white md:px-32">
      <div className="flex justify-center py-4 md:justify-end">
        <nav>
          <ul className="flex flex-row gap-4">
            <li className="p-1 md:p-4">
              <Link to="/#home">Начало</Link>
            </li>

            <li className="p-1 md:p-4">
              <Link to="/#courses">Курсове</Link>
            </li>

            <li className="p-1 md:p-4">
              <Link to="/#contact">Контакти</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
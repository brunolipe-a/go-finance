// components/Header/index.tsx

import "./styles.css";

function Header() {
  return (
    <div>
      <header id="header">
        <span>Go Finance</span>
        <nav>
          <a href="/">Listagem</a>
          <a href="/create">Cadastro</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;

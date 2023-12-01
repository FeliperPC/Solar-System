import './header.css';

function Header({ image }:{ image:string }) {
  return (
    <header className="header">
      <img src={ image } alt="Logo" />
    </header>
  );
}

export default Header;

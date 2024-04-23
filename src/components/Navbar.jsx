
const Navbar = ({ setSearch, showSearchBar }) => (
    <header>
      <h1>HACKER NEWS</h1>
      {showSearchBar && <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="> search" />}
    </header>
);

export default Navbar;
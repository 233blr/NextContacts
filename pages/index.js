import Link from 'next/link';

const App = () => {
  return (
    <div>
      <nav>
        <Link className="nav_link" href={'/'}><a>Main</a></Link>
        <Link className="nav_link" href={'/users'}><a>Users</a></Link>
      </nav>
      <h1>Main Page</h1>

      <style jsx>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: sans-serif, serif;
          };
          nav {
            display: flex;
            flex-direction: row;
            gap: 10px;
          };
          a {
            text-decoration: none;
            color: #000;
          };
          a:hover {
            text-decoration: underline;
            cursor: pointer;
          };
        `}
      </style>

    </div>
  );
};

export default App;

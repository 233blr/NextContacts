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
                  nav {
                    margin: 10px;
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                  }
                `}
            </style>

        </div>
    );
};

export default App;

import './NotFound.css';
import {NavLink} from "react-router";
import {Header} from "../../components/Header.jsx";


export function NotFound() {
    return (
        <main className="not-found">
            <title>Page Not Found</title>
            <Header></Header>

            <section className="not-found-card">
                <p className="not-found-code">404</p>
                <h1 className="not-found-title">Page not found</h1>
                <p className="not-found-text">
                    The page you are looking for does not exist or may have been moved.
                </p>

                <div className="not-found-actions">
                    <NavLink to="/" className="not-found-home button-primary">
                        Back to Home
                    </NavLink>
                </div>
            </section>
        </main>
    )
}
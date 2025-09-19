import { Link } from "react-router";
import "./Navbar.css";

export const BigCard = props => {
    const {
        image,
        title,
        link
    } = props;
    return (
        <>
            <Link to={link}>
                <div className="navMenuBigCardWrapper"> {/* exists bc if u remove it breaks */}
                    <div
                        className="navMenuBigCard"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <h1>{title}</h1>
                </div>
            </Link>
        </>
    );
};

export const SmallCard = props => {
    const {
        image,
        title,
        subtitle,
        link
    } = props;
    return (
        <>
            <div className="navMenuSmallCardWrapper">
                <Link to={link}>
                    <div
                        className="navMenuSmallCard"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </Link>

            </div>
        </>
    );
};

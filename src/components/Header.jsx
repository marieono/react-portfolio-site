import { FaTwitter, FaGithub } from 'react-icons/fa';
import CoverImage from '../images/cover-image.jpeg';
import ProfileImage from '../images/profile-image.jpg';

export const Header = () => {
    return (
        <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
            {/* ovrlayはカバー画像の上に透過して表示される背景要素 */}
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        {/* カバー画像 */}
                        <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
                        <h1 className="title-text">まり</h1>
                        <h3 className="title-text">学生</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                {/* TODO */}
                                <a href="https://twitter.com/erimano23">
                                    <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                {/* TODO */}
                                <a href="https://github.com/marieono">
                                    <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
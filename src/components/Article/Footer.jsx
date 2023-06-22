import logo from "../../image/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__group-1">
          <img className="footer_logo" alt="logo" src={logo} />
          <p className="footer__group-text-1">Own Your Teaching Business</p>
          <p className="footer__group-text-2">
            Copyright © 2023 edTonomy. All rights reserved.
          </p>
        </div>

        <div className="footer__group-2">
          <p className="footer__group-text">Company</p>
          <ol className="footer__links">
            <li className="footer__link-item">
              <a className="footer__link">About</a>
            </li>
            <li className="footer__link-item">
              <a className="footer__link">Privacy Policy</a>
            </li>
            <li className="footer__link-item">
              <a
                className="footer__link"
                href="https://www.edtonomy.com/tos"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms of Service
              </a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}

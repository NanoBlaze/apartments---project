import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <footer id="footer" className="bg-main footer-bg text-center">
        <div className="pt-4 ">
          <i className="socials fab fa-facebook fa-2x px-2 text-light"></i>
          <i className="socials fab fa-instagram fa-2x px-2  text-light"></i>
          <i className="socials fab fa-twitter fa-2x px-2  text-light"></i>
          <i className="socials fas fa-envelope fa-2x px-2  text-light"></i>
        </div>
        <p className="mt-5 text-light">
          2023 Apartments website was developed and Designed by
          <strong>
            <a className="link" href="" target="_blank">
              <span className="name"> Ivan Burkush</span>
            </a>
          </strong>
        </p>
      </footer>
    </>
  );
};

export default Footer;

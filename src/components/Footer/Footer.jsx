import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export function Footer() {
  return (
    <footer>
      <div>
        <h1>SAKIley</h1>
        <h5>Stevana Nemanje 47</h5>
        <h5>Novi Pazar 36300</h5>
        <h5>Phone:063-842-42-88</h5>
        <h5>E-mail:hsaladin06@gmail.com</h5>
      </div>
      <div style={{ width: "2em" }}>
        <FaInstagram />
        <CiFacebook />
        <CiTwitter />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  );
}

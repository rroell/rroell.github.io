import Link from "next/link";
import Meta from "../components/Meta";

const contact = () => {
  return (
    <div>
      <Meta title="Roel Duijsings - Contact" />
      <h1>Contact details</h1>
      <a href="mailto:roel.duijsings@hotmail.com">
        Email: roel.duijsings@hotmail.com
      </a>
      <br></br>
      <br></br>
      <a href="tel:+31645650926">Phone: +31645650926 </a>
      <br></br>
      <br></br>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Nijmegen"
        target="_blank"
      >
        Nijmegen, The Netherlands
      </a>
    </div>
  );
};

export default contact;

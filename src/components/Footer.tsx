import { Instagram,  Snapchat, Whatsapp, Youtube } from "iconsax-reactjs";
import { footer } from "../data/footer";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="mt-36 bg-zinc-100 ">
        <div className="border-b border-zinc-200 pt-24 mx-auto lg:max-w-4xl xl:max-w-6xl flex  justify-between items-start">
          {footer.map((item, i) => (
            <div key={i} className="mb-24">
              <h1 className="text-3xl mb-4">{item.title}</h1>
              <div className="flex flex-col gap-2">
                {item.links.map((link, i) => (
                  <p key={i}>{link.text}</p>
                ))}
              </div>
            </div>
          ))}

        <Link to={"/"}>
        <img src="/images/logo1.svg" alt="" />
        </Link>
        </div>

        <div className="mx-auto lg:max-w-4xl xl:max-w-6xl py-8 flex justify-between">
          <h1>© 2025 Ecommerce Fronted. by Elisio Augusto</h1>
          <div className="flex items-center gap-6">
            <Whatsapp size={28} color="#000" variant="Bold"/>
            <Instagram size={28} color="#000" variant="Bold"/>
            <Youtube size={28} color="#000" variant="Bold"/>
            <Snapchat size={28} color="#000" variant="Bold"/>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { footer } from "../data/footer";

export default function Footer() {
  return (
    <footer className="mt-36 bg-zinc-900">
      <div className="mx-auto lg:max-w-4xl xl:max-w-6xl flex w-full justify-between">
        {footer.map((item, i) => (
          <div key={i} className="mb-18 text-white">
            <h1 className="text-3xl mb-4 pt-24">{item.title}</h1>
            <div className="flex flex-col gap-2">
              {item.links.map((link, i) => (
                <p key={i}>{link.text}</p>
              ))}
            </div>
          </div>
        ))}
        <h1>Mirror</h1>
      </div>
    </footer>
  );
}

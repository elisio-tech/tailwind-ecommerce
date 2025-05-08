import { ArrowRight } from "iconsax-reactjs";

const links = {
  shop: ["Men", "Women", "Kids", "Accessories"],
  customerService: ["Contact Us", "Order Tracking", "Returns", "FAQ"],
  company: ["About Us", "Careers", "Privacy Policy", "Terms & Conditions"],
  social: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-6xl p-6 py-12 lg:py-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <h1 className="text-4xl">MIRROR</h1>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {Object.entries(links).map(([section, items]) => (
              <div key={section}>
                <h2 className="mb-6 text-sm font-bold text-gray-800 uppercase dark:text-white">
                  {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  {items.map((item) => (
                    <li className="mb-4" key={item}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-800 uppercase dark:text-white">
                Stay Connected
              </h2>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg">
                  <ArrowRight size="24" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 ShopNow. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 gap-4">
            {links.social.map((platform) => (
              <a
                href="#"
                key={platform}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

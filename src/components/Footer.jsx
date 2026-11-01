



const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white px-6 md:px-20 pt-12 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Our Products */}
        <div>
          <h3 className="font-semibold mb-3">Our Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Our menus</li>
            <li>Our burgers</li>
            <li>Our times sides</li>
            <li>Our naandwiches</li>
          </ul>
        </div>

        {/* Legal Information */}
        <div>
          <h3 className="font-semibold mb-3">legal information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Legal Notice</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3">Contact us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contacts</li>
            <li>Our addresses</li>
            <li>Become a Times Square franchisee</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-3">We accept</h3>

          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/mastercard.png"
              alt="Mastercard"
              className="w-10"
            />
            <img
              src="/images/visa.png"
              alt="Visa"
              className="w-16"
            />
          </div>

          <img
            src="/images/amex.png"
            alt="American Express"
            className="w-14"
          />
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 mt-14 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-white">
          <span>●</span>
          <span>♥</span>
          <span>◉</span>
          <span>▣</span>
        </div>

        <p className="text-xs text-gray-300">
          © 2024 Nayef All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;



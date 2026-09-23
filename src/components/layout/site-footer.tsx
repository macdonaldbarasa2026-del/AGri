import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Wordmark inverse />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-fg/75">
            Kenya’s agricultural marketplace — seed, soil, medicine, machinery and harvest,
            listed by verified sellers from the highlands to the coast.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide">Trade</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-fg/80">
            <li>
              <Link to="/marketplace" className="hover:text-primary-fg">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/sellers" className="hover:text-primary-fg">
                Sellers
              </Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-primary-fg">
                List a lot
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-primary-fg">
                Basket
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide">House</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-fg/80">
            <li>
              <Link to="/about" className="hover:text-primary-fg">
                About Shamb
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-fg">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:hello@kenyashamb.co.ke" className="hover:text-primary-fg">
                hello@kenyashamb.co.ke
              </a>
            </li>
            <li>
              <a href="mailto:sell@kenyashamb.co.ke" className="hover:text-primary-fg">
                sell@kenyashamb.co.ke
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide">Pay & collect</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-fg/80">
            <li>M-Pesa Paybill 400200</li>
            <li>Till 847562</li>
            <li>Westlands, Nairobi</li>
            <li>Depots: Eldoret · Kisumu · Mombasa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-fg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-primary-fg/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Kenya Shamb Ltd. Nairobi, Kenya.</p>
          <p>Prices in Kenyan shillings. Licensed agrovet lots marked PCPB.</p>
        </div>
      </div>
    </footer>
  );
}

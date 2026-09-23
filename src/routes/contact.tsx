import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, NativeSelect, Textarea } from "@/components/ui/input";
import { COUNTIES } from "@/lib/catalog";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Name, email and a message, please.");
      return;
    }
    const notes = JSON.parse(localStorage.getItem("kenya-shamb-mail") ?? "[]") as unknown[];
    notes.unshift({
      name,
      email,
      phone: String(fd.get("phone") ?? ""),
      county: String(fd.get("county") ?? ""),
      message,
      at: Date.now(),
    });
    localStorage.setItem("kenya-shamb-mail", JSON.stringify(notes.slice(0, 40)));
    setSent(true);
    toast.success("Message received. The desk will write back.");
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Desk</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Buyers, sellers and county partners — write or call. The Nairobi floor answers on
          weekdays, 8:00 to 18:00 EAT.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-muted">Email</dt>
            <dd>
              <a href="mailto:hello@kenyashamb.co.ke" className="font-medium">
                hello@kenyashamb.co.ke
              </a>
              <span className="text-muted"> · buyers</span>
              <br />
              <a href="mailto:sell@kenyashamb.co.ke" className="font-medium">
                sell@kenyashamb.co.ke
              </a>
              <span className="text-muted"> · sellers</span>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Phone</dt>
            <dd>
              <a href="tel:+254207642100" className="font-medium">
                +254 20 764 2100
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">M-Pesa</dt>
            <dd className="font-medium">Paybill 400200 · Till 847562</dd>
          </div>
          <div>
            <dt className="text-muted">Floors</dt>
            <dd>
              HQ, Westlands, Nairobi
              <br />
              Tractor yard, Eldoret
              <br />
              Irrigation desk, Kisumu
              <br />
              Export pack, Changamwe, Mombasa
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
        {sent ? (
          <div className="py-10 text-center">
            <h2 className="font-display text-2xl font-semibold">Message on the desk.</h2>
            <p className="mt-2 text-sm text-muted">We reply to the email you left.</p>
            <Button className="mt-6" type="button" onClick={() => setSent(false)}>
              Send another
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="font-display text-xl font-semibold">Write to us</h2>
            <div>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" name="name" required />
            </div>
            <div>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" name="phone" />
            </div>
            <div>
              <FieldLabel htmlFor="county">County</FieldLabel>
              <NativeSelect id="county" name="county" defaultValue="Nairobi">
                {COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit" size="lg">
              Send message
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}

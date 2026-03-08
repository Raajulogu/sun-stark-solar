"use client";

import { Wallet } from "lucide-react";
import Image from "next/image";

export default function SolarFinanceSection() {
  const banks = [
    "/images/bank/bob.avif",
    "/images/bank/canara.avif",
    "/images/bank/hdfc.avif",
    "/images/bank/icici.avif",
    "/images/bank/indian-bank.avif",
    "/images/bank/png-bank.avif",
    "/images/bank/punjab.avif",
    "/images/bank/sbi.avif",
  ];

  return (
    <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Title */}

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Solar Loans at Your Doorstep
          </h2>

          <p className="text-muted-foreground mt-2">
            Get interest rates as low as <span className="font-semibold">6.75%</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* Financing Card */}

          <div className="bg-background border rounded-2xl p-6 flex items-start gap-4">

            <div className="p-3 rounded-lg bg-primary/10">
              <Wallet className="h-5 w-5 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">
                Flexible Solar Financing
              </h3>

              <p className="text-sm text-muted-foreground">
                Choose convenient installment options to install solar without financial stress.
              </p>
            </div>

          </div>

          {/* EMI Card */}

          <div className="bg-background border rounded-2xl p-6 text-center">

            <h3 className="text-xl font-semibold mb-2">
              EMI starting from just ₹2,170 / month
            </h3>

            <p className="text-sm text-muted-foreground mb-8">
              Get instant long-term loans with nationalised banks up to 10 years.
            </p>

            {/* Bank Logos */}

            <div className="grid grid-cols-4 bg-blue-50 rounded-lg gap-6 justify-items-center">

              {banks.map((bank, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full bg-white-40 shadow-xl flex items-center justify-center shadow-sm"
                >
                  <Image
                    src={bank}
                    alt="bank logo"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

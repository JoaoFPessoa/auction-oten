"use client";
import { motion } from "framer-motion";
import { RotatingBanner } from "@/components/rotating-banner";
import { HowItWorks } from "@/components/how-it-works";
import { SignUpSection } from "@/components/sign-up-section";
import { AboutUsSection } from "@/components/about-us";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <RotatingBanner />
      </motion.div>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo ao AuctionHub
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          Descubra, acompanhe e participe dos melhores leilões em um só lugar.
        </motion.p>
        <motion.div
          className="flex justify-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <Link href="/leilao">
            <Button variant={"primary"} size="lg">
              Explorar Leilões
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <HowItWorks />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <SignUpSection />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <AboutUsSection />
      </motion.div>
    </div>
  );
}

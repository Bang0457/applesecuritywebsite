import * as React from "react"
import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { cn } from "./cn"
import { Button } from "./button"

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
  imageUrl: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//")
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      ...props
    },
    ref,
  ) => {
    const PrimaryLink = isInternalHref(primaryButtonHref) ? Link : "a"
    const SecondaryLink = isInternalHref(secondaryButtonHref) ? Link : "a"

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/40"
          aria-hidden="true"
        />
        <div
          className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
          style={{ width: "1219px", height: "1210px", opacity: 1 }}
        >
          <motion.div
            className="w-full max-w-[1148px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.p
              className="absolute left-[561px] top-[427px] inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.22em] uppercase text-white/90"
              variants={itemVariants}
            >
              WHO WE ARE
            </motion.p>

            <motion.h2
              className="absolute left-[93px] top-[458px] mt-6 h-[116px] w-[1089px] text-center text-3xl font-black tracking-tight sm:text-4xl md:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p
              className="absolute left-[206px] top-[584px] mt-6 h-[95px] w-[907px] max-w-[907px] text-center text-base leading-[30px] tracking-[1.5px] text-white/85 sm:text-lg"
              style={{ fontFamily: '"SF Compact Display", sans-serif' }}
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="absolute left-[474px] top-[699px] mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-center"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <PrimaryLink
                  {...(PrimaryLink === Link
                    ? { to: primaryButtonHref }
                    : {
                        href: primaryButtonHref,
                        rel: "noreferrer",
                      })}
                >
                  {primaryButtonText}
                </PrimaryLink>
              </Button>

              <Button asChild variant="secondary" size="lg">
                <SecondaryLink
                  {...(SecondaryLink === Link
                    ? { to: secondaryButtonHref }
                    : {
                        href: secondaryButtonHref,
                        rel: "noreferrer",
                      })}
                >
                  {secondaryButtonText}
                </SecondaryLink>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  },
)

HeroSection.displayName = "HeroSection"

export { HeroSection }


import useZustand from "../../../../utilities/zustand";
import FooterList3 from "../../../Footer/FooterComp/FooterList3";
import NavDeskList1 from "./NavDeskList1";
import NavDeskList2 from "./NavDeskList2";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  show: boolean;
}
export default function NavDesktop({ show }: Props) {
  const { subsFixForms } = useZustand();
  return (
    <AnimatePresence>
      {!show && (
        <motion.section
          id="navDesktop"
          className="hidden lg:flex fixed w-full top-0 left-0 h-[5vw] z-50"
          initial={{ y: -140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -140, opacity: 0 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
        >
          {/* list 1 */}
          <NavDeskList1 />
          {/* list 2 */}
          <NavDeskList2 />
          <AnimatePresence>
            {subsFixForms && (
              <motion.div
                className="absolute top-[5.98vw] right-[1vw] w-[32.063vw] sub-bg-img z-50 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ease: "linear",
                  duration: 0.4,
                }}
              >
                <div className="z-30 relative pt-[4.5vw] px-[4.563vw] pb-[1vw]">
                  <FooterList3 />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

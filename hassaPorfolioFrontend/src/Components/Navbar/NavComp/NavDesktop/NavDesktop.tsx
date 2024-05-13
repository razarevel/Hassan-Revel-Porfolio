import NavDeskList1 from "./NavDeskList1";
import NavDeskList2 from "./NavDeskList2";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  show: boolean;
}
export default function NavDesktop({ show }: Props) {
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
        </motion.section>
      )}
    </AnimatePresence>
  );
}

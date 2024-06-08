import { motion } from "framer-motion";
interface Props {
  isInView: boolean;
}
export default function SocialHeading({ isInView }: Props) {
  const para = `If there’s anything in the world that I love the most is making AI that can change the world forever, and I’d love to share my creation with you and connect with those who’re interested in hiring, learning and seeing my creation.`;

  return (
    <>
      {isInView && (
        <motion.div
          className="w-full text-center space-y-[37px] "
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-[48px] font-Bold leading-[1.1] lg:text-[7.063vw]">
            Engage <br /> with me <br /> 24/7
          </h1>
          <p className="text-[18px] px-[37px] leading-[1.8] text-[#ababab] lg:max-w-[55.93vw] mx-auto lg:text-[1.125vw] lg:my-[3.438vw]">
            {para}
          </p>
        </motion.div>
      )}
    </>
  );
}

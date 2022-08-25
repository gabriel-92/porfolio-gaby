import { useRef } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import useDimensions from "../useDimensions";
import { MenuToggle } from "../MenuToggle/Index";








const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 1.7 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(20px at 30px 30px)",
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 40,
        },
    },
};



const Nav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


    return (
        <AnimatePresence>

            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                ref={containerRef}
                custom={height}
                className="navbar"
            >
                <MenuToggle toggle={() => toggleOpen()} />
                <motion.ul>
                    <motion.li>
                        <a href="#about">About</a>
                    </motion.li>
                    <motion.li>
                        <a href="#projects">Projects</a>
                    </motion.li>
                    <motion.li>
                        <a href="#contact">Contact</a>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        </AnimatePresence>
    );
}
export default Nav;

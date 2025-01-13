import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import Box from "../ui/Box";
import Image from "../ui/Image";

import { headerNavigationLinks } from "../configs/lists/headerNavigationLinks";

const Header = () => {
   const navigations = headerNavigationLinks.map((navLink) => (
      <li key={navLink.navigationLinkId}>
         <Box className="flex items-center xsm:gap-x-2 smPlus:gap-x-4">
            <Image
               className="xsm:w-[24px] xsm:h-[24px] smPlus:w-[32px] smPlus:h-[32px]"
               src={navLink.navigationLinkImg}
               alt="Home icon"
               width="32px"
               height="32px"
            />
            <NavLink
               className="
               font-semibold hover:text-raspberry-pink
               xsm:text-sm smPlus:text-medium sm:text-large
               "
               activeClassName="text-raspberry-pink"
               to={navLink.path}
            >
               {navLink.navigationLinkText}
            </NavLink>
         </Box>
      </li>
   ));

   return (
      <header
         className="
         w-full py-4 rounded-b-base bg-dark-slate-blue mb-[14px]
         relative before:absolute before:content-[''] before:w-full before:h-full
         before:bottom-[-2px] before:bg-raspberry-pink before:rounded-base before:z-[-1]
         "
      >
         <ul className="flex gap-x-11 gap-y-4 items-center justify-center px-4 flex-wrap">
            {navigations}
         </ul>
      </header>
   );
};

export default Header;

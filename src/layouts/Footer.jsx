import Text from "../ui/Text";

const Footer = () => {
   return (
      <footer
         className="
         w-full rounded-t-base bg-dark-slate-blue py-7
         text-center mt-11 relative before:absolute before:content-['']
         before:w-full before:h-full before:bg-raspberry-pink
         before:rounded-t-base before:top-[-2px] before:left-0 before:z-[-1]
         "
      >
         <Text className="text-medium xsm:text-sm smPlus:text-">
            Created by{" "}
            <Text
               className="font-semibold xsm:text-sm smPlus:text-medium"
               text="@Denys Korniyenko"
            />
         </Text>
      </footer>
   );
};

export default Footer;

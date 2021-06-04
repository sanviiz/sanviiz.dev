import * as _ from "../assets/constants";

export default function Footer() {
  return (
    <footer className="fixed w-full bottom-0 text-center sm:pt-2 sm:pb-2 pt-2 pb-3 bg-white border-t border-gray-300 z-10 dark:bg-gray-900 dark:border-gray-700 dark:text-white transition-all">
      <span className="text-xs md:text-base">{_.COPYRIGHT}</span>
    </footer>
  );
}

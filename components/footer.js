import * as _ from "../assets/constants";

export default function Footer() {
  return (
    <footer className="fixed w-full bottom-0 text-center py-2 bg-white border-t border-gray-300 z-10">
      <p className="text-xs md:text-base">
        Copyright © 2021 {_.NAME} All right reserved.
      </p>
    </footer>
  );
}

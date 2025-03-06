import Link from "next/link";

export const AuthFooter = () => {
  return (
    <footer className="bottom-0 py-8 w-full border-t border-gray-200">
      <div className="text-gray-500 text-sm flex gap-8 justify-center lg:justify-between items-center">
        <p className="text-center">
          © Copyright {new Date().getFullYear()}, Powered by Timbu Business
        </p>

        <div className="hidden lg:flex gap-14 items-center">
          {[
            { text: "Cookies", path: "/cookies" },
            { text: "Terms of Service", path: "/terms" },
            { text: "Privacy Policy", path: "/privacy" },
            { text: "Manage privacy", path: "/privacy/manage" },
          ].map(({ text, path }) => (
            <Link
              key={text}
              href={path}
              className="hover:text-gray-800 transition-colors duration-200"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

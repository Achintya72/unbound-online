import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unbound",
  description: "A new social networking app aimed at revolutionizing the college admissions process and beyond for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white-100">
        <nav className="py-[20px] px-[20px]">
          <div className="max-w-[1440px] w-full items-center flex mx-auto">
            <div className="flex items-center flex-1 gap-[20px]">
              <img src="/Icon.png" className="h-[24px] w-auto" alt="Unbound Logo" />
              <h4 className="hidden sm:block font-serif text-2xl">Unbound</h4>
            </div>
            <div className="justify-self-center flex text-white-800 gap-[20px]">
              <a className="font-sans font-medium">Features</a>
              <a className="font-sans font-medium">Launch Date</a>
            </div>
            <div className="flex items-center justify-end flex-1 gap-[20px]">
              <img src="/github.png" className="h-[24px] w-auto" alt="Unbound Logo" />
            </div>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}

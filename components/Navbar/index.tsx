import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { NavbarMenu } from './NavbarMenu';
import generalData from '../../constants/general';

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  let items: [string, string][] = [
    ['About', '/about'],
    ['Experience', '/experience'],
    ['Projects', '/project'],
    ['Publications', '/BS_Thesis.pdf'],
    ['Resume/CV', '/Buffett_CV.pdf'],
    ['DJ_Resume', '/DJ_Buffett_Resume.pdf'],
  ];

  const barHeight: number = 48;

  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;
      // set state based on location info (explained in more detail below)
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < barHeight);
      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <div className="max-w-screen">
      {openMenu && (
        // full page menu
        <NavbarMenu
          setOpenMenu={setOpenMenu}
          items={items}
          theme={theme}
          setTheme={setTheme}
          mounted={mounted}
        />
      )}
      <div className={`relative top-0`}>
        <div
          className={`transition-top fixed left-0 right-0 z-nav h-32 max-w-screen px-4 py-10 duration-500 ${visible ? 'top-0' : '-top-32'} ${router.pathname === '/' ? '' : 'mt-0 bg-[#F1F1F1] dark:bg-gray-900'}`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between md:flex-row">
            <div className="flex flex-col">
              <Link
                href="/"
                className="rounded-lg px-4 py-3 hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <div className="inline text-xl font-semibold text-gray-800 dark:text-white">
                  {generalData.name}
                </div>
                <div className="inline pl-1 text-xl font-light text-gray-600 dark:text-gray-300 max-sm:hidden">
                  {' '}
                  Website
                </div>
              </Link>
            </div>

            <div className="hidden lg:block lg:space-x-1">
              {items.map((item) => {
                return (
                  <Link
                    href={item[1]}
                    key={item[0]}
                    className={`rounded-lg border border-transparent px-3 py-3 text-base hover:bg-white hover:shadow-lg hover:dark:bg-gray-800 ${
                      router.asPath === item[1]
                        ? 'font-bold text-gray-800 dark:text-gray-200'
                        : 'font-light text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {item[0]}
                  </Link>
                );
              })}
            </div>

            <div className="hidden flex-row items-center lg:flex">
              <a
                href={generalData.github}
                aria-label="Github"
                className="rounded-lg p-2 hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>

              <a
                href={generalData.facebook}
                aria-label="Facebook"
                className="rounded-lg p-2 hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

              <a
                href={generalData.instagram}
                aria-label="Instagram"
                className="rounded-lg p-2 hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              <a
                href={generalData.linkedin}
                aria-label="Linkedin"
                className="rounded-lg p-2 hover:bg-white hover:shadow-lg hover:dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

            </div>

            {/* menu button */}
            <div className="flex flex-row-reverse items-center justify-between lg:hidden">
              <button
                aria-label="Menu"
                title="Menu"
                className="right-0 block rounded-lg px-4 py-3 hover:bg-white hover:shadow-lg dark:text-white hover:dark:bg-gray-800"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list text-gray-800 dark:text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    className="text-gray-800 dark:text-white"
                    d="M0 3.5A.5.5 0 0 1
                  .5 3h15a.5.5 0 0 1 0 1h-15A.5.5 0 0
                  1 0 3.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5
                  0 0 1 0 1h-15A.5.5 0 0 1 0
                  8.5zm0 5A.5.5 0 0 1 .5 13h15a.5.5
                  0 0 1 0 1h-15A.5.5 0 0 1 0
                  13.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative max-w-screen ${openMenu ? 'top-32' : 'top-0'} left-0 right-0 h-32`}
      ></div>
    </div>
  );
}
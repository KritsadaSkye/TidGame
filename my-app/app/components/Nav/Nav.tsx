export function Nav() {
    return (
        <nav className="sticky top-0 z-20 w-full bg-gradient-to-r from-purple-800 via-blue-600 to-blue-400 pb-4 px-20">
            <ul className="flex justify-center items-center gap-[80px] text-white">

                {[
                    "PC Game",
                    "Mobile",
                    "Nintendo",
                    "Steam",
                    "Roblox",
                    "Minecraft",
                    "Garena",
                    "Sports",
                ].map((item) => (
                    <li
                        key={item}
                        className="bg-white text-black text-[12px] font-semibold px-[14px] py-[6px] border border-gray-300 rounded-full transition-all duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
                    >
                        {item}
                    </li>
                ))}

            </ul>
        </nav>
    );
}

interface HeroSectionProps {
    titlePerCity?: string | null; 
    title: string;
    subtitle: string;
    buttonLabel: string;
    isExternalLink?: boolean;
    buttonLink: string;
    imgSrc: string;
}

export function HeroSection({ titlePerCity = null, title, subtitle, buttonLabel, isExternalLink = false, buttonLink, imgSrc }: HeroSectionProps) {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent to-neutral-900/75">
                <div className="w-full max-w-[1450px] mx-auto h-full px-6 pb-20 flex items-end justify-start ">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            {titlePerCity && <h2 className="block text-sun-500 text-base leading-4 font-bold tracking-widest uppercase">{titlePerCity}</h2>}
                            <h1 className="text-4xl font-bold text-neutral-200 tracking-tight leading-10 md:text-5xl">
                                {title}
                            </h1>

                            <h2 className="text-md font-medium text-neutral-300 tracking-tight max-w-2xl xl:text-neutral-400">
                                {subtitle}
                            </h2>
                        </div>

                        <div>
                            {isExternalLink ? (
                                <a
                                    href={buttonLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200"
                                >
                                    {buttonLabel}
                                </a>
                            ) : (
                                <a 
                                    href={buttonLink}
                                    className="inline-flex items-center justify-center px-8 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200"
                                >
                                    {buttonLabel}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[90vh]">
                <img
                    className="w-full h-full object-cover"
                    src={imgSrc}
                    alt="" 
                />
            </div>
        </div>
    );
}
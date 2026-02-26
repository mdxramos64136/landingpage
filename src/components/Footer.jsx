import { communityLinks, platformLinks, resourcesLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 ">
      <div className="flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
        {/* Resources */}
        <div className="w-full text-center sm:w-auto sm:text-left">
          <h3 className="text-lg font-semibold mb-4 tracking-widest">
            Resourses
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.href}
                  className="text-neutral-300 hover:text-orange-300 tracking-wide">
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div className="w-full text-center sm:w-auto sm:text-left">
          <h3 className="text-lg font-semibold mb-4 tracking-widest">
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((platform, index) => (
              <li key={index}>
                <a
                  href={platform.href}
                  className="text-neutral-300 hover:text-orange-300 tracking-wide">
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div className="w-full text-center sm:w-auto sm:text-left">
          <h3 className="text-lg font-semibold mb-4 tracking-widest">
            Community
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((community, index) => (
              <li key={index}>
                <a
                  href={community.href}
                  className="text-neutral-300 hover:text-orange-300 tracking-wide">
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

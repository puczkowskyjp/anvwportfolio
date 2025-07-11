import { NavigationMenu } from "@kobalte/core/navigation-menu";
import "~/styles/Nav.css";

const GITHUB = "https://github.com/puczkowskyjp/anvwportfolio";
const SAMBA_BUILD = "https://www.thesamba.com/vw/forum/viewtopic.php?t=795576";

const routes = [
  { label: "Home", href: "/" },
  { label: "Wrenches", href: "/wrenches" },
  { label: "Waypoints", href: "/waypoints" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "About", href: "/about" },
  { label: "Github", href: GITHUB, blank: true },
  { label: "Samba Build", href: SAMBA_BUILD, blank: true },
];

export default function Nav() {
  return (
    <NavigationMenu class="navigation-menu__root" orientation={"horizontal"}>
      {routes.map(route => (
        <NavigationMenu.Trigger
          class="navigation-menu__trigger"
          as="a"
          href={route.href}
          {...(route.blank ? {target: "_blank"} : {})}
        >
          {route.label}
        </NavigationMenu.Trigger>
      ))}
    
      <NavigationMenu.Viewport class="navigation-menu__viewport">
        <NavigationMenu.Arrow class="navigation-menu__arrow" />
      </NavigationMenu.Viewport>
    </NavigationMenu>
  );
}

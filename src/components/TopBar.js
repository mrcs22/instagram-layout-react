import Menu from "./Menu";
import Search from "./Search";
import Logos from "./Logos";

export default function TopBar() {
  return (
    <div class="top-bar">
      <div class="top-bar-content">
        <Logos />
        <Search />
        <Menu
          menuClass="menu"
          iconNames="paper-plane-outline compass-outline heart-outline person-outline"
        />
      </div>
    </div>
  );
}

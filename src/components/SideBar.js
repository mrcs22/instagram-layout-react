import Profile from "./Profile";
import Suggestions from "./Suggestions";
import SideBarFooter from "./SideBarFooter";

export default function SideBar() {
  return (
    <div class="side-bar">
      <Profile
        image="./img/catanacomics.png"
        user="catanacomics"
        userName="Catana"
      />

      <Suggestions />

      <SideBarFooter />
    </div>
  );
}

import Menu from "./Menu";

export default function TopBar() {
  return (
    <div class="top-bar">
      <div class="top-bar-content">
        <div class="logos">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="./img/logo.png" alt="instagram" class="insta-logo" />
        </div>
        <div id="search">
          <ion-icon name="search"></ion-icon>
          <input id="search-input" type="text" placeholder="Pesquisar"></input>
        </div>
        <Menu
          menuClass="menu"
          iconNames="paper-plane-outline compass-outline heart-outline person-outline"
        />
      </div>
    </div>
  );
}

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
        <div class="menu">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

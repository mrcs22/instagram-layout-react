export default function Menu(props) {
  const iconNames = props.iconNames.split(" ").filter((iconName) => !!iconName);

  return (
    <div class={props.menuClass}>
      {iconNames.map((iconName) => (
        <ion-icon name={iconName}></ion-icon>
      ))}
    </div>
  );
}

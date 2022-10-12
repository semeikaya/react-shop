import LeftMenuBlock from "./LeftMenuBlock";
import Main from "./Main";
import styles from "./Primary.module.css";
const list = [
    { name: "Гаджеты и аксуссуары" },
    { name: "Бытовая техника" },
    { name: "Прочее" },
];

function Primary(props) {
    return (
        <div className={styles.primary}>
            <LeftMenuBlock data={list} />
            <Main />
        </div>
    );
}

export default Primary;

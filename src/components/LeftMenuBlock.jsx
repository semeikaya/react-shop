import styles from "./LeftMenu.module.css";

function LeftMenuBlock(props) {
    return (
        <div className={styles.container}>
            <div className={styles.head}>Intocode Coding Shopcamp</div>
            <br />
            <List nav={props.data} />
        </div>
    );
}

function List(props) {
    const data = props.nav;
    const list = data.map((item) => <><li key={item.name}>{item.name}</li><hr /></>);
    return <ul className={styles.list}>{list}</ul>;
}



export default LeftMenuBlock;

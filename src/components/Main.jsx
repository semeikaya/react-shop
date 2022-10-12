import CardsContainer from "./CardsContainer";
import styles from "./Main.module.css";
import img from "./logo-trash.png";

const cards = [
    {
        name: "Монитор",
        image: "http://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u3223qe/pdp/monitor-u3223qe-pdp-hero-504x350.psd?fmt=jpg&wid=756&hei=525",
        price: "10000 руб",
    },
    {
        name: "Наушники",
        image: "https://www.creditasia.uz/upload/iblock/64c/4ng4yu7yuh1zkcmosuosijv1oxxaulxt/besprovodnye-naushniki-xiaomi-redmi-buds-3-pro-gray-3.png",
        price: "5000 руб",
    },
    {
        name: "Макбук",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788573000",
        price: "150000 руб",
    },
    {
        name: "Очки",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKcxKOyNU0H0ShsaS6x445NePsWOV19Qz5wwOlmrS0kAgDl05y4Wp_AXTzg-NRlDPV9Q&usqp=CAU",
        price: "2000 руб",
    },
    {
        name: "Чайник",
        image: "https://basket-03.wb.ru/vol420/part42043/42043682/images/big/1.jpg",
        price: "2500 руб",
    },
    {
        name: "Телефон",
        image: "https://www.shopkees.com/cdn/images/1000/2937719764_1662647784.jpg",
        price: "100000 руб",
    },
];

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.logocontainer}>
                <img src={img} className={styles.logo}></img>
            </div>
            <div className={styles.cards}>
                {cards.map((item) => (
                    <CardsContainer
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;

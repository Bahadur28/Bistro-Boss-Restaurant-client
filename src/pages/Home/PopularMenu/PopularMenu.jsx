import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [Menu] = useMenu();
    const popular = Menu.filter(item => item.category === 'popular');
    // const [Menu, setMenu] = useState([]);
    // useEffect( () =>{
    //     fetch('Menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})

    // }, [])
    return (
       <section className="mb-12">
        <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 p-5 bg-yellow-600">View Full Menu</button>
       </section>
    );
};

export default PopularMenu;
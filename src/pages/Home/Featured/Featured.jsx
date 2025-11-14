import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis beatae in illo aut, blanditiis nihil nulla ducimus nemo vero inventore, quaerat unde. Maiores quasi velit asperiores in illo iusto vel dolor recusandae aliquid cumque ab eligendi molestias deleniti architecto quas nisi aut, delectus ipsam libero doloribus ullam! Voluptatibus, eum.</p>
                    <button className="btn btn-outline btn-warning border-0 border-b-4 p-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
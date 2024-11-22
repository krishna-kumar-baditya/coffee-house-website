import MenuFeatured from "../MenuFeatured/MenuFeatured";
import Featured from "../Featured/Featured";
import TestimonialSlider from "../TestmonialSlider/TestimonialSlider";
import ShopGallery from "../ShopGallery/ShopGallery";
import Slider from "../Slider/Slider";

export default function Home() {
    return (
        <>
            <main>
                <Slider />
                <Featured />
                <MenuFeatured />
                <TestimonialSlider />
                <ShopGallery />
            </main>
        </>
    );
}

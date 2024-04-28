import faq from '../../src/assets/images/faq.png'

const Faq = () => {
    return (
        <div>
            <div className="border-dashed border mt-32 border-[#13131833] lg:mx-0 mx-2"></div>
            <div className="text-center px-2 lg:px-0">
                <h1 className="text-4xl font-extrabold mt-8">Welcome to Our Painting Studio</h1>
                <p className="mt-6 px-2 lg:px-[370px]">Unleash your creativity with our painting tools and create beautiful artworks.</p>
            </div>
            <div className="border-dashed border mt-8 border-[#13131833] lg:mx-0 mx-2"></div>
            <div className="lg:flex border border-solid border-[#1313181A] rounded-2xl mt-12 p-8 lg:space-y-0 space-y-8 gap-10 ">
                <div className="lg:flex-grow-0 ">
                    <img src={faq} alt="Paintbrush"/>
                </div>
                <div className="lg:flex-grow">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Pencil Tool
                        </div>
                        <div className="collapse-content md:w-auto lg:w-3/5 ">
                            <p>Use the pencil tool to draw freehand strokes and sketches.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Brush Tool
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 ">
                            <p>Create beautiful strokes with the brush tool, available in various sizes and textures.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Eraser Tool
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 ">
                            <p>Erase mistakes or unwanted portions of your artwork with the eraser tool.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Color Palette
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 ">
                            <p>Choose from a wide range of colors in our color palette to add vibrancy to your paintings.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Shape Tools
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 ">
                            <p>Create geometric shapes like rectangles, circles, and triangles effortlessly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Save and Share
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 ">
                            <p>Save your masterpieces and share them with friends and family on social media.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width text-xl font-bold">
                            Gradient Tool
                        </div>
                        <div className="collapse-content md:w-auto lg:w-3/5">
                            <p>Easily apply smooth color transitions to your artwork with our gradient tool, allowing for stunning visual effects.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" />
                        <div className="collapse-title md:w-auto w-auto max-width text-xl font-bold">
                            Text Tool
                        </div>
                        <div className="collapse-content md:w-auto lg:w-3/5">
                            <p>Add text elements to your paintings with our text tool, enabling you to personalize your creations with captions or quotes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
import { useLoaderData } from "react-router-dom";

const PaintDetails = () => {

    const paintDetails = useLoaderData()

    return (
        <div>
                {/* <img src={paintDetails.image} alt="" /> */}
                  {paintDetails.name}
        </div>
    );
};

export default PaintDetails;
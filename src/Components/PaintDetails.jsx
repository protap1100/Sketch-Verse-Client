import { useLoaderData } from "react-router-dom";

const PaintDetails = () => {

    const paintDetails = useLoaderData()

    return (
        <div>
            h
            {
                paintDetails.name
            }
        </div>
    );
};

export default PaintDetails;
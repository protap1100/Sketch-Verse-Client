import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySinglePaint = ({paint}) => {
    const {_id, name,category,description,price,rating,customization,processTime,stockStatus,image } = paint;

    const handleDelete = (id) =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                // console.log('delete confirmed')
            fetch(`http://localhost:5000/allPaint/${_id}`,{
                method:'DELETE',
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0 ){
                    Swal.fire(
                        'Deleted!',
                        'Your Paint has been deleted.',
                        'success'
                    )
                }
            })
            }
          });
    }

    return (
        <div className="card flex flex-col justify-center items-center">
        <img src={image} className="h-40 w-60 card-img-top rounded" alt={name}/>
        <div className="card-body ">
            <h5 className="card-title">{category}</h5>
            <p>Description:{description}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">Rating: {rating}</p>
            <p className="card-text">Customization: {customization}</p>
            <p className="card-text">ProcessTime: {processTime}</p>
            <p className="card-text">Stock Status: {stockStatus}</p>
            <Link to={`/updatingPaint/${_id}`} className="btn btn-info  text-white">Update</Link>
            <Link className="btn btn-danger" onClick={() => handleDelete(_id)} >Delete</Link>
        </div>
        </div>
    );
};

export default MySinglePaint;
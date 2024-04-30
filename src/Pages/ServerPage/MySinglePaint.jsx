import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySinglePaint = ({ paint, onDelete }) => {
  const { _id, name, category, description, price, rating, customization, processTime, stockStatus, image } = paint;

  const handleDelete = () => {
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
        // Call onDelete callback passed from parent
        onDelete();
        Swal.fire(
          'Deleted!',
          'Your Paint has been deleted.',
          'success',
        );
      }
    });
  };

  return (
    <div className="card flex flex-col justify-center items-center">
      <img src={image} className="h-60 w-80 card-img-top rounded" alt={name} />
      <div className="card-body ">
        <h5 className="card-title">{category}</h5>
        <p>Description:{description}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Rating: {rating}</p>
        <p className="card-text">Customization: {customization}</p>
        <p className="card-text">ProcessTime: {processTime}</p>
        <p className="card-text">Stock Status: {stockStatus}</p>
        <Link to={`/updatingPaint/${_id}`} className="btn btn-info  text-white">Update</Link>
        <button className="btn btn-error text-white" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MySinglePaint;

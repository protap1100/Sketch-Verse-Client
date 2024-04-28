import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PaintCard = ({ paint }) => {
    const { _id, name, category, email, rating } = paint;

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
        <tr>
            <td className="p-2">{_id}</td>
            <td className="p-2">{name}</td>
            <td className="p-2">{category}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">{rating}</td>
            <td><Link to={`/updatingPaint/${_id}`} className="btn btn-info  text-white">Update</Link></td>
            <td><Link onClick={() => handleDelete(_id)} className="btn btn-error text-white ">Delete</Link></td>
        </tr>
    );
};

export default PaintCard;

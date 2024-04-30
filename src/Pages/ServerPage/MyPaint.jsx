import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvier';
import MySinglePaint from './MySinglePaint';

const MyPaint = () => {
  const {user} = useContext(AuthContext);
  const {email} = user;

//   console.log(email);

  const [paintData, setPaintData] = useState([]);

//   http://localhost:5173/allPaint/user@example.com

    useEffect(()=>{
        fetch(`http://localhost:5000/myPaint/${email}`)
        .then(res=> res.json())
        .then(data => setPaintData(data))
    },[])

  return (
    <div className='mt-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {
            paintData.map(paint => <MySinglePaint key={paint._id} paint={paint}></MySinglePaint>)
        }
    </div>
  );
};

export default MyPaint;

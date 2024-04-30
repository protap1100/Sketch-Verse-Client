import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvier';
import MySinglePaint from './MySinglePaint';

const MyPaint = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [paintData, setPaintData] = useState([]);

  useEffect(() => {
    fetch(`https://server-site-navy.vercel.app/myPaint/${email}`)
      .then(res => res.json())
      .then(data => setPaintData(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://server-site-navy.vercel.app/allPaint/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.deletedCount > 0) {
          const remainingPaint = paintData.filter(paint => paint._id !== id);
          setPaintData(remainingPaint);
        }
      })
      .catch(error => {
        console.error('Error deleting paint:', error);
      });
  };

  return (
    <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {paintData.map(paint => (
        <MySinglePaint
          key={paint._id}
          paint={paint}
          onDelete={() => handleDelete(paint._id)} 
        />
      ))}
    </div>
  );
};

export default MyPaint;

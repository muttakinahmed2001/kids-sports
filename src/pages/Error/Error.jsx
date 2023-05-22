 
import { Link } from 'react-router-dom';
import error from '../../assets/404.gif'
import './Error.css'
const Error = () => {
    return (
        <div className='container mx-auto'> 
            <img src={error} alt="" />
            <Link to='/'>  <button className="btn btn-active btn-accent error bg-[#691b69] hover:bg-[#841e84]">Back to Home</button></Link>
          
        </div>
    );
};

export default Error;
import PropTypes from "prop-types"


const UserListCard = ({image, username}) => {
  return (
    <>
    <div className='card'>
        <div className='gitImage'>
            <img src={image} alt={username} />
        </div>
        <div>
            <h2 className="gitName">{username}</h2>
        </div>
    </div>
    </>
  );
}



export default UserListCard
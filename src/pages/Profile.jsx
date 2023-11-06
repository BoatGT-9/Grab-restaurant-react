import { useAuthContext } from "../context/Authcontext";
const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6 card profile my-2 light"
          style={{ width: "50px", borderRadius: "20px" }}
        >
          <div className="card-header">Profile</div>
          <div className="card-body"></div>
          <div className="card-title"></div>
          <div className="card-text"></div>
          <b>Token:</b>
          {state.accessToken.substring(0, 20)}...
          {state.accessToken.substring(state.accessToken.length - 20)}
        </div>
        <div className="card-text">
          <b>ID:</b>
          <br/>
          {user.id}
          <b>Email:</b>
          <br/>bo
          {user.email}
          <b>Roles:</b>
          <br/>
          {user.roles.lenght}
          <ul>
            {user.roles &&
              user.role.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;


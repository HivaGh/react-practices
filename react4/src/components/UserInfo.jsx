import UserAge from "./UserAge";
import UserEmail from "./UserEmail";
import UserName from "./UserName";

const UserInfo = ({ name, email, age }) => {
  return (
    <div>
      <UserName name={name} />
      <UserEmail email={email} />
      <UserAge age={age} />
    </div>
  );
};

export default UserInfo;

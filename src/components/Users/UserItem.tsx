import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="card-body row">
        <div className="col">
          <p className="card-text">Name: {user.name}</p>
          <p className="card-text">Email: {user.email}</p>
        </div>
        <div className="col">
          <p className="card-text">Activity: {user.isActive}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
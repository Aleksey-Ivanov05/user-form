import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    let activity = '';
    if (user.isActive) {
      activity = 'Activity'
    } else {
      activity = 'Not activity'
    }
     e.preventDefault();
     onSubmit({
      id: Math.random().toString(),
      ...user,
      isActive: activity
    })
  }

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" className="form-control" required value={user.name} onChange={onTextFieldChange}/>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="form-control" required value={user.email} onChange={onTextFieldChange}/>
      </div>
      <div className="mb-3">
        <input id="isActive" name="isActive" type="checkbox" checked={user.isActive} onChange={onCheckboxChange}/>
        <label htmlFor="isActive">Activity</label>
      </div>
      <div className="form-group mb-2">
        <select id="role" name="role" className="form-control" required value={user.role} onChange={onTextFieldChange}>
          <option disabled value="">Select role:</option>
          <option>user</option>
          <option>editor</option>
          <option>admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default UserForm;
const UPDATE_DATA = "UPDATE_DATA";

const UpdateData = (fullname,password,email) => {
  return {
    type: UPDATE_DATA,
    fullname,
    password,
    email
    
  };
};

export default UpdateData;
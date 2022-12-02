/** @format */

const CreateGroupCard = () => {
  return (
    <div className="creategroup_card">
      <div className="innerbody">
        <div className="close_btn">+</div>
        <div className="title">Create Group</div>
        <div className="body">
          <label htmlFor="groupName">Group Name</label>
          <input
            type="text"
            name="groupName"
            id="groupName"
            placeholder="GOA 2K22"
          />
          <button className="create_btn">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupCard;

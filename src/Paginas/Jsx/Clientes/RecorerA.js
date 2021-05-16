

constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    
  this.renderUsers = this.renderUsers.bind(this);

  function renderUsers() {
    const userList = [];
    for(let i = 0; i < this.state.users.length; i++) {
        let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
        let avatar = this.state.users[i].picture.thumbnail;
        let email = this.state.users[i].email;
        let key = this.state.users[i].id.value;
        userList.push(<User name={name} avatar={avatar} email={email} key={key}/>);
    }

    return userList;
}  

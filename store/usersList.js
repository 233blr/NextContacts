import {makeAutoObservable} from "mobx";

class UsersList {
  users = [];
  user = {};
  category = '';

  constructor() {
    makeAutoObservable(this);
  }

  sortLeaders() {
    const leaders = [...this.users].filter(item => item.rating > 3);
    if (leaders.length) {
      leaders.sort((a, b) => {
        if (a.rating < b.rating) return 1;
        if (a.rating > b.rating) return -1;
        return a.name.localeCompare(b.name);
      });
      if (leaders.length > 5) {
        return leaders.slice(0, 5);
      }
    }
    return leaders;
  };

  parseUsersData(arr) {
    this.users = arr.map((user) => {
      return {
        id: user.login.uuid,
        image: user.picture.medium,
        fullImage: user.picture.large,
        name: user.name.first,
        lastName: user.name.last,
        login: user.login.username,
        email: user.email,
        phone: user.phone,
        rating: 0,
      };
    });
  };

  sortUsers(value) {
    if (value === 'rating') {
      this.users = this.users.sort(
        (a, b) => (a[value] < b[value] ? 1 : -1),
      );
    } else {
      this.users = this.users.sort(
        (a, b) => {
          if (a[value] > b[value]) return 1;
          if (a[value] < b[value]) return -1;
          return 0;
        },
      );
    }
  };

  deleteUser(id) {
    this.users = this.users.filter(
      user => (user.id !== id),
    );
  };

  getUser(id) {
    this.user = this.users.find(
      user => (user.id === id),
    );
  }

  ratingHandler(val) {
    val ?
      this.user = {...this.user, rating: this.user.rating + 1} :
      this.user = {...this.user, rating: this.user.rating - 1};
    this.users.forEach(item => {
      if (item.id === this.user.id) item.rating = this.user.rating;
    })
  };

  setCategory(value) {
    this.category = value;
  }

}

export default new UsersList();

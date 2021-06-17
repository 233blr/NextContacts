const parseUsersData = (arr) => {
  return arr.map((contact) => {
    return {
      id: contact.login.uuid,
      image: contact.picture.medium,
      fullImage: contact.picture.large,
      name: contact.name.first,
      lastName: contact.name.last,
      login: contact.login.username,
      email: contact.email,
      phone: contact.phone,
      rating: 0,
    };
  });
};

export default parseUsersData;

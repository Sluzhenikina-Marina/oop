// BEGIN
export const getMutualFriends = (firstUser, secondUser) => {
  const friendsOfFirstUser = firstUser.getFriends();
  const secondsUserIds = secondUser.getFriends().map(friend => friend.id);
  const mutualFriends = friendsOfFirstUser.filter(friend => secondsUserIds.includes(friend.id));
  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
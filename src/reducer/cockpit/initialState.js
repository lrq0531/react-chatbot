export const initialState = {
  message: '',
  friend: 'Me',
  allFriends: {
    Me: {
      online: true,
      friendName: 'Me',
      allMessages: [
        {
          id: 'Me',
          content: 'Welcome back, Me!',
          speaker: 'Me',
        },
      ],
      unread: 0,
    },
  },
}

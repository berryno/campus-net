export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  read: boolean;
}

export interface ChatPreview {
  id: string;
  user: {
    name: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    unread: boolean;
  };
}

// Mock data
export const MOCK_CHATS: ChatPreview[] = [
  {
    id: '1',
    user: {
      name: 'Alice Smith',
      avatar: '/assets/icons/profile-placeholder.svg',
      online: true
    },
    lastMessage: {
      text: 'When is the next project meeting?',
      timestamp: '10:45 AM',
      unread: true
    }
  },
  {
    id: '2',
    user: {
      name: 'Bob Johnson',
      avatar: '/assets/icons/profile-placeholder.svg', //cambiare nomi e immagini profilo
      online: false
    },
    lastMessage: {
      text: 'I\'ve uploaded the assignment files',
      timestamp: '9:30 AM',
      unread: false
    }
  },
  {
    id: '3',
    user: {
      name: 'Carol Williams',
      avatar: '/assets/icons/profile-placeholder.svg',
      online: true
    },
    lastMessage: {
      text: 'Thanks for the help!',
      timestamp: 'Yesterday',
      unread: false
    }
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    content: 'Hey, have you started working on the presentation?',
    sender: 'other',
    timestamp: '10:30 AM',
    read: true
  },
  {
    id: '2',
    content: 'Yes, I\'m working on the slides right now',
    sender: 'me',
    timestamp: '10:31 AM',
    read: true
  },
  {
    id: '3',
    content: 'Great! When do you think you\'ll be done?',
    sender: 'other',
    timestamp: '10:31 AM',
    read: true
  },
  {
    id: '4',
    content: 'Should be ready by tomorrow morning',
    sender: 'me',
    timestamp: '10:32 AM',
    read: true
  }
];

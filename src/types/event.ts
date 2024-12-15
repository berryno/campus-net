export interface IEvent {
    id: string;
    creatorId: string;
    title: string;
    description: string;
    date: string;
    location: string;
    imageUrl: string;
    isApproved: boolean;
    createdAt: string;
    type: 'physical' | 'virtual';
  }
  
  export interface IPhysicalEvent extends IEvent {
    venue: string;
    address: string;
    city: string;
  }
  
  export interface IVirtualEvent extends IEvent {
    streamUrl?: string;
    streamStatus: 'scheduled' | 'live' | 'ended';
    viewerCount: number;
  }
  
  export const MOCK_EVENTS: (IPhysicalEvent | IVirtualEvent)[] = [
    {
      id: '1',
      creatorId: 'user1',
      title: 'End of Year Project Presentations',
      description: 'Join us for the final year project presentations from Computer Science students.',
      date: '2024-12-20T14:00:00',
      location: 'Main Auditorium',
      imageUrl: '/assets/icons/event-placeholder.svg',
      isApproved: true,
      createdAt: '2024-11-15T10:00:00',
      type: 'physical',
      venue: 'Engineering Building',
      address: 'Via Orabona, 4',
      city: 'Bari'
    },
    {
      id: '2',
      creatorId: 'user2',
      title: 'Online Workshop: Web Development',
      description: 'Learn the basics of modern web development with React and TypeScript.',
      date: '2024-12-18T15:00:00',
      location: 'Online',
      imageUrl: '/assets/icons/event-placeholder.svg',
      isApproved: true,
      createdAt: '2024-11-14T09:00:00',
      type: 'virtual',
      streamUrl: 'https://stream.example.com/workshop',
      streamStatus: 'scheduled',
      viewerCount: 0
    },
  ];
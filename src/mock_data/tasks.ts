import type { Task } from '../app/slices/taskSlice';

export const MOCKED_INCOMPLETED_TASKS: Task[] = [
  { text: 'TO DO MOCK', completed: false, id: 1, isUpdating: false },
  { text: 'TO DO MOCK 2', completed: false, id: 2, isUpdating: false },
  { text: 'TO DO MOCK 3', completed: false, id: 3, isUpdating: false },
];

export const MOCKED_COMPLETED_TASKS: Task[] = [
  { text: 'TO DO MOCK', completed: true, id: 1, isUpdating: false },
  { text: 'TO DO MOCK 2', completed: true, id: 2, isUpdating: false },
  { text: 'TO DO MOCK 3', completed: true, id: 3, isUpdating: false },
];

export const MOCKED_TASK: Task = { text: 'TO DO MOCK', completed: false, id: 1, isUpdating: false };
export interface ITodoProp {
  title: string;
  content: string;
  id: string;
}

export interface ITodoFormProp {
  onSubmit: (data: ITodoProp) => void;
  oldData?: { title: string; content: string; id: string };
  setUpdate?: (data: boolean) => void;
  update?: boolean;
  handleModalOpen: () => void;
}

export interface IUpdateTodoModalProp {
  handleModalOpen: () => void;
  isModalOpen?: boolean;
}

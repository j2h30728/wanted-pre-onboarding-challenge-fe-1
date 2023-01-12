import { useState } from "react";

export default function handleModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { isModalOpen, handleModalOpen };
}

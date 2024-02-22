import { toast } from "react-toastify";

export function useUseful() {
  const formatDate = (data) => {
    const originalDate = new Date(data);

    const day = originalDate.getDate().toString().padStart(2, "0");
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const year = originalDate.getFullYear();
    const hours = originalDate.getHours().toString().padStart(2, "0");
    const minutes = originalDate.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} as ${hours}:${minutes}`;
  };

  const successToast = (text, color) => {
    toast.success(text, {
      style: {
        background: color,
        color: "white",
      },
    });
  };

  const errorToast = (text, color) => {
    toast.error(text, {
      style: {
        background: color,
        color: "white",
      },
    });
  };

  const infoToast = (text, color) => {
    toast.info(text, {
      style: {
        background: color,
        color: "white",
      },
    });
  };

  return { formatDate, successToast, errorToast, infoToast };
}

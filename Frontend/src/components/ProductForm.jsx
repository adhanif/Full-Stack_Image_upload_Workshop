import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductForm() {
  const url = "http://localhost:3000/products";

  const notify = () => toast.success("The form has been submitted");
  const notifyError = () => toast.error("The form has not submitted");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      image: "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);
    formData.append("owner", data.owner);

    // console.log(formData);
    axios
      .post(url, formData)
      .then(() => {
        notify();
        reset();
      })
      .catch((err) => {
        notifyError();
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "this is required",
            maxLength: { value: 30, message: "Maximum length is 30" },
          })}
          placeholder="Name"
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <input
          type="number"
          {...register("price", {
            required: "'Numbers only'",
            maxLength: { value: 30, message: "Maximum length is 30" },
          })}
          placeholder="Price"
        />
        <p style={{ color: "red" }}>{errors.price?.message}</p>
        <input
          {...register("image", {
            required: "Product picture is required",
          })}
          type="file"
          id="image"
        />
        <p style={{ color: "red" }}>{errors.image?.message}</p>
        <input
          {...register("owner", {
            required: "this is required",
            maxLength: { value: 200, message: "Maximum length is 200" },
          })}
          placeholder="Owner_Id"
        />
        <p style={{ color: "red" }}>{errors.owner?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}

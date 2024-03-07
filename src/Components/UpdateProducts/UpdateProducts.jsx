import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../axios/axiosprivate";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import useGetAProduct from "../../API/ServiceApi/useGetAProduct";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data,isPending,refetch] = useGetAProduct(id)
  const axios = useAxiosPrivate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const ProductsData = {
        img: data.img,
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
      };
    axios
      .patch(`/products/${id}`, ProductsData)
      .then(() => {
        toast.success("Product Update Successfully");
        navigate("/dashboard/manageProducts");
      })
      .then(() => refetch());
  };
  return (
    <div className="font-andika">
     <SectionTitle heading={"update product"}/>
      {isPending ? (
        ""
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl p-5 shadow-2xl rounded-xl mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Add Image(URL)"
            className="input input-bordered w-full"
            defaultValue={data?.img}
            {...register("img")}
            required
          />
          <input
            type="text"
            placeholder="Add Title"
            className="input input-bordered w-full"
            defaultValue={data?.title}
            {...register("title")}
            required
          />

        <input
          type="number"
          placeholder="Add Price"
          defaultValue={data?.price}
          {...register("price", { required: true })}
          className="input input-bordered w-full"
        />      

          <textarea
            placeholder="Add Description"
            className="input input-bordered w-full min-h-36"
            defaultValue={data?.description}
            {...register("description")}
            required
          ></textarea>
          <input
            type="submit"
            className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
            value={"add product"}
          />
        </form>
      )}
    </div>
  );
};

export default UpdateProducts;



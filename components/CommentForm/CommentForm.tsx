'use client';

const CommentForm: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <form className="commentForm">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center"> Share Your Thoughts </h2>
        <div className="flex flex-col gap-4">
         {formData.map((data, i) => <input key={i} type={data.type} placeholder={data.placeholder}/>)}
          <textarea placeholder="Your Thoughts..." rows={5}></textarea>
          <button> Publish Thoughts </button>
        </div>
      </form>
    </div>
  );
};
const formData = [{ type: "text", placeholder: "Your Name"}, { type: "email", placeholder: "Your Email"}];
export default CommentForm;

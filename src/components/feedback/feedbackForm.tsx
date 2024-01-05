import { FeedBackProps } from "@/types/types";
import { FeedbackData, FeedbackDataMessage } from "@/data/feedbackFormData";
import { useForm, FieldError } from "react-hook-form";
import { SubmitButton } from "../buttons/buttons";
import { useEffect, useRef } from "react";
import { CorssSvg } from "../corssSvg/corsSvg";
import './feedbackForm.css'
export const FeedbackForm = ({ setShowfeedbackform }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data, "iiii");
  };
  const errorMessages: Record<string, string> = {
    user_name: "Please enter a valid name.",
    user_email: "Please enter a valid email address.",
    feedback: "please Enter Some message about feedback",
  };

  const validateAtLeastOneField = async (name: string) => {
    setError(name, {
      type: "manual",
      message: `${errorMessages[name]} `,
    });
  };

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!formRef.current?.contains(e.target as Node)) {
        setShowfeedbackform(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="fixed backdrop-brightness-[0.8] w-[100%] h-[100%] right-0 left-0 top-0 bottom-0 z-[9999999999]">
      <div className="absolute z-[9999999] right-0 left-0 top-[95px]  ">
        <div
          ref={formRef}
          className="contact-form feedback_main w-[300px] mx-auto border border-black p-2 overflow-hidden   rounded-[10px]"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
<div
              className="close_popup float-right  cursor-pointer"
              onClick={() => setShowfeedbackform(false)}
            >
              <CorssSvg />
            </div>
            <div className="border-b-[black] border-b border-solid pb-2 pt-[5px] rounded-[10px]  bg-[#d7f3d7]">
              <h3 className="text-center font-bold ">Your Feedback</h3>
            </div>

            {FeedbackData?.map((inputs: FeedBackProps | any, index: any) => {
              const inputError = errors[inputs.name] as FieldError | undefined;
              return (
                <div key={index} className="mt-3 form-group">
                 
                 <p
                    
                    className=" user_label !inline-block font-bold  "
                  >
                    {inputs.label} -:
                  </p>
                  {inputs.type === "email" ? (
                    <>
                      <input
                        type={inputs.type}
                        className="!inline-block w-[100%] border-[black] border border-solid rounded-[10px] p-2"
                        {...register(`${inputs.name}`, { required: true })}
                        onChange={async () => {
                          await validateAtLeastOneField(inputs.name);
                        }}
                      />
                       <div className="h-6">
                        {errors[inputs.name] && (
                          <span className="text-[15px] text-red-600">
                            {inputError?.message || "fields required"}
                          </span>
                        )}
                      </div>
                      
                     
                    </>
                  ) : (
                    <>
                      <input
                        type={inputs.type}
                        className=" !inline-block w-[100%] border-[black] border border-solid rounded-[10px] p-2"
                        {...register(`${inputs.name}`, { required: true })}
                        onChange={async () => {
                          await validateAtLeastOneField(inputs.name);
                        }}
                      />
                      <div className="h-6">
                        {errors[inputs.name] && (
                          <span className="text-[15px] text-red-600">
                            {inputError?.message || "fields required"}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
            {FeedbackDataMessage?.map((inputs: string | any, index: any) => {
              const inputError = errors[inputs.name] as any | undefined;
              return (
                <div key={index}>
                  <label
                    className=" user_label !inline-block font-bold"
                    htmlFor={inputs.name}
                  >
                    {inputs.label}
                  </label>
                  <textarea
                    className="!inline-block w-[100%] border-[black] border border-solid rounded-[10px] p-2"
                    {...register(`${inputs.name}`, { required: true })}
                    onChange={async () => {
                      await validateAtLeastOneField(inputs.name);
                    }}
                  />

                  {errors[inputs.name] && (
                    <span className="text-[15px] text-red-600">
                      {inputError?.message || "fields required"}
                    </span>
                  )}
                </div>
              );
            })}

            <SubmitButton
              btnName="Submit Feedback"
              pathName="feedback"
              onSubmit={handleSubmit(onSubmit)}
              OnClick={() => console.log("feedback")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};


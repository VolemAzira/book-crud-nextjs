import { Label, TextInput } from "flowbite-react";

const page = () => {
  return (
    <div>
      <form action="">
        <h1 className="text-2xl font-bold text-center">Edit Page</h1>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name input" />
          </div>
          <TextInput id="name" type="text" sizing="md" placeholder="Name" />
        </div>
      </form>
    </div>
  );
};

export default page;

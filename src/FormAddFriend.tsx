import { FormEvent, useState } from "react";
import Button from "./Button";
import { FriendI } from "./interfaces/interfaces";

type FormAddFriendProps = {
  addFriend: (friend: FriendI) => void;
};

function FormAddFriend({ addFriend }: FormAddFriendProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");
    addFriend(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙎 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌅 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;

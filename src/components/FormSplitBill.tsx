import Button from "./Button";
import { FriendI } from "../interfaces/interfaces";
import { FormEvent, useState } from "react";

type FormSplitBillProps = {
  selectedFriend: FriendI;
  onSplitBill: (value: number) => void;
};

function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<string>("");
  const [paidByUser, setPaidByuser] = useState<string>("");
  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : 0;
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>🙎 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🙎 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByuser(
            Number(e.target.value) > Number(bill) ? paidByUser : e.target.value
          )
        }
      />

      <label>🙎 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;

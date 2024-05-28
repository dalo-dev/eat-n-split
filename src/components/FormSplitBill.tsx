import Button from "./Button";
import { FriendI } from "../interfaces/interfaces";
import { useState } from "react";

type FormSplitBillProps = {
  selectedFriend: FriendI;
};

function FormSplitBill({ selectedFriend }: FormSplitBillProps) {
  const [bill, setBill] = useState<string>("");
  const [paidByUser, setPaidByuser] = useState<string>("");
  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : "";
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  return (
    <form className="form-split-bill">
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

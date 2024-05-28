import Button from "./Button";
import { FriendI } from "./interfaces/interfaces";

type FriendListProps = {
  friends: FriendI[];
  onSelection: (friend: FriendI) => void;
  selectedFriend: FriendI | null;
};

type FriendProps = {
  friend: FriendI;
  onSelection: (friend: FriendI) => void;
  selectedFriend: FriendI | null;
};

function FriendsList({
  friends,
  selectedFriend,
  onSelection,
}: FriendListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelection }: FriendProps) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default FriendsList;

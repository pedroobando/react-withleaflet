import { AddressItem } from "./AddressItem";

const AddressList = ({ locationList, onClickItem }) => {
  return (
    <div className="ui list">
      {locationList.map((add) => (
        <AddressItem mapPoint={add} key={add.key} onClickItem={onClickItem} />
      ))}
    </div>
  );
};

export default AddressList;

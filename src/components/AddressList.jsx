import { AddressItem } from "./AddressItem";

const AddressList = ({ locationList }) => {
  return (
    <div className="ui list">
      {locationList.map((add) => (
        <AddressItem mapPoint={add} key={add.key} />
      ))}
    </div>
  );
};

export default AddressList;

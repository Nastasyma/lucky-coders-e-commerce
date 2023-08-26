import { useSelector } from 'react-redux';

import styles from './UserAddress.module.scss';

import AddressCard from './addressCard/AddressCard';

import { PlusIcon } from '../../../../app/layouts/images';
import selectUser from '../../model/userSelectors';

function UserAddress(): JSX.Element {
  const userData = useSelector(selectUser);

  return (
    <div className={styles.profileAddress}>
      {userData.addresses.map((address) => (
        <AddressCard
          key={address.id}
          id={address.id}
          country={address.country}
          city={address.city}
          state={address.state}
          street={address.street}
          postalCode={address.postalCode}
          shippingAddress={userData.shippingAddress}
          billingAddress={userData.billingAddress}
        />
      ))}
      <div className={`${styles.userAddressItem} ${styles.addNewAddressItem}`}>
        <div className={styles.addNewAddress}>
          <PlusIcon />
          <span>Add new address</span>
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
